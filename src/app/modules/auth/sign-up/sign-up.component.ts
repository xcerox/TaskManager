import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidateDiscardChanges } from '@auth/shared/interfaces/validate-discard-changes';
import { Country } from '@auth/shared/models/country';
import { NewUser } from '@auth/shared/models/new-user';
import { AuthService } from '@auth/shared/services/auth';
import { CountryService } from '@auth/shared/services/country';
import { SignUpValidatorService } from '@auth/shared/services/sign-up-validator';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit, ValidateDiscardChanges {

  signUpForm: FormGroup | any = null;
  genders = ["male", "female"];
  countries: Array<Country> = [];
  registerError: string = "";
  canLeave: boolean = true;

  constructor(private countryService: CountryService, private formBuilder: FormBuilder, 
    private singUpValidatorService: SignUpValidatorService, 
    private authService: AuthService, private router: Router) { }

  ngOnInit(): void {

    this.countryService.getCountries().subscribe(countries => {
      this.countries = countries;
    }, console.error);

    this.signUpForm = this.formBuilder.group({
      personName: this.formBuilder.group({
        firstName: [null, [Validators.required, Validators.minLength(2)]],
        lastName: [null, [Validators.required, Validators.minLength(2)]],
      }),
      email: [null, [Validators.required, Validators.email], [this.singUpValidatorService.duplicateEmailValidator()], { updateOn: 'blur'}],
      mobile: [null, [Validators.required, Validators.pattern(/^[809]\d{9}$/)]],
      dateOfBirth: [null, [Validators.required, this.singUpValidatorService.minimumAgeValidator(18)]],
      password: [null, [Validators.required]],
      confirmPassword: [null, [Validators.required]],
      gender: [null, [Validators.required]],
      countryID: [null, [Validators.required]],
      receiveNewsLetters: null,
      skills: this.formBuilder.array([])
    },
    {
      validators: [ this.singUpValidatorService.compareValidator("confirmPassword", "password")]
    });

    this.signUpForm?.valueChanges.subscribe(() => this.canLeave = false);
  }

  onAddSkill()
  {
    const formGroup = new FormGroup({
      skillName: new FormControl(null, [Validators.required]),
      skillLevel: new FormControl(null, [Validators.required])
    });

    (<FormArray>this.signUpForm.get("skills")).push(formGroup);
  }

  onRemoveSkill(index: number)
  {
    (<FormArray>this.signUpForm.get("skills")).removeAt(index);
  }

  onSubmit() {
    this.signUpForm["submitted"] = true;
    if (this.signUpForm.valid)
    {
      const newUser = <NewUser>this.signUpForm.value;
      this.authService.register(newUser).subscribe(
        () => this.router.navigate(["/employee","tasks"]), 
        () => this.registerError = "Unable to submit"
      );
    }
  }

  private get(field:string): any {
    return this.signUpForm.get(field);
  }

  private isFormSubmited(){
    return this.signUpForm?.submitted;
  }

  isInvalid(field:string): boolean {
    return this.get(field).invalid && (this.get(field).dirty || this.get(field).touched || this.isFormSubmited());;
  }

  isValid(field:string): boolean {
    return this.get(field).valid && (this.get(field).dirty || this.get(field).touched || this.isFormSubmited());
  }

  isFieldEmpty(field:string): boolean {
    return this.isInvalid(field) && this.get(field).errors?.required;
  }

  isInvalidMinLength(field:string): boolean {
    return this.isInvalid(field) && this.get(field).errors?.minlength;
  }

  isInvalidEmail(field:string): boolean {
    return this.isInvalid(field) && this.get(field).errors?.email;
  }

  isInvalidUniqueEmail(field:string): boolean {
    return this.isInvalid(field) && this.get(field).errors?.uniqueEmail;
  }

  isInvalidPattern(field:string): boolean {
    return this.isInvalid(field) && this.get(field).errors?.pattern;
  }

  isInvalidMinAge(field:string): boolean {
    return this.isInvalid(field) && this.get(field).errors?.minAge;
  }

  isInvalidCompare(field:string): boolean {
    return this.isInvalid(field) && this.get(field).errors?.compareValidator;
  }
}
