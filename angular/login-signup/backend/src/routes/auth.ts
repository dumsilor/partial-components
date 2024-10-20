import { User } from './../models/User';
import { Router } from 'express';
import * as bcrypt from 'bcryptjs';
import asyncHandler from 'express-async-handler';
import * as jwt from 'jsonwebtoken';

const router = Router();

router.post(
  '/register',
  asyncHandler(async (req, res) => {
    const { name, email, phoneNumber, password } = req.body;
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const newUser = new User({
        name,
        email,
        phoneNumber,
        password: hashedPassword,
      });

      await newUser.save();
      res.status(201).send('User Created Successfully');
    } catch (err) {
      res.status(500).send('Error Registering server Error details ' + err);
    }
  })
);

router.post(
  '/login',
  asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });
      if (!user) {
        res.status(400).send('User not found');
        return;
      }
      const isMatch = await bcrypt.compare(password, user!.password);
      if (!isMatch) {
        res.status(400).send('Wrong Password');
        return;
      }

      const token = jwt.sign({ userId: user._id }, 'mypersonalAPP', {
        expiresIn: '1h',
      });
      res.json({ token });
    } catch (error) {
      res.status(500).send('Server Error');
    }
  })
);
