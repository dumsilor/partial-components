import * as jwt from 'jsonwebtoken';
export const authMiddleware = (req: any, res: any, next: any) => {
  const token = req.header('Authorization').split(' ')[1];
  if (!token) {
    return res.status(401).send('Access Denied');
  }

  try {
    const decoded = jwt.verify(token, 'mypersonalAPP');
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).send('Invalid Token');
  }
};
