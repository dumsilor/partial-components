import { AbstractControl, ValidatorFn } from '@angular/forms';

export function confirmPassword(
  password: string,
  confirmPassword: string
): ValidatorFn {
  return (formGroup: AbstractControl): { [key: string]: any } | null => {
    const passwd = formGroup.get(password);
    const confirmPasswd = formGroup.get(confirmPassword);
    if (passwd?.value !== confirmPasswd?.value) {
      confirmPasswd?.setErrors({ notMatch: true });
      return { notMatch: true };
    } else {
      return null;
    }
  };
}
