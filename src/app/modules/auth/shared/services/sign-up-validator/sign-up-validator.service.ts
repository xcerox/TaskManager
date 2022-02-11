import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Observable, timer } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { AuthService } from '../auth';

@Injectable()
export class SignUpValidatorService {

  constructor(private authService: AuthService) { }

  public minimumAgeValidator(minAge: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {

      let isMinAge: any = null;
      if (control.value) {
        const today = new Date();
        const dateOfBirth = new Date(control.value);
        const diffMilliSeconds = Math.abs(today.getTime() - dateOfBirth.getTime());
        const diffYears = (diffMilliSeconds / (1000 * 60 * 60 * 24)) / 365.25;
        
        if (diffYears < minAge) {
          isMinAge =  { minAge: { valid: false } };
        }
      }

      return isMinAge;
    };
  }

  public compareValidator(controlToValidate: string, controlToCompare: string): ValidatorFn {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      let isCompared = null;
      const controlTo = <FormControl>formGroup.get(controlToValidate);

      if (controlTo.value && controlTo.value != (<any>formGroup.get(controlToCompare)).value) {
        controlTo.setErrors({ compareValidator: { valid: false }});
        isCompared = { compareValidator: { valid: false }}; 
      }

      return isCompared;
    };
  }

  public duplicateEmailValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return timer(1000).pipe(switchMap(() => {
        return this.authService.getUserByEmail(control.value).pipe(map((existingUser: any) => {
          return existingUser==null?null:{uniqueEmail:{valid:false}}
        }))
      }));
    };
  }
}
