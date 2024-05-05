import { Component, OnDestroy } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { RegisterWindowComponent } from '../register-window/register-window.component';
import { DialogCommunicationService } from '../register-window/dialog-communication.service';
import { Subject } from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login-window',
  templateUrl: './login-window.component.html',
  styleUrls: ['./login-window.component.sass']
})
export class LoginWindowComponent implements OnDestroy {

  ref: DynamicDialogRef | undefined;
  private unsubscribe$ = new Subject<void>();

  loginForm: any;

  constructor(
    private dialogService: DialogService,
    private dialogCommunicationService: DialogCommunicationService,
    private fb: FormBuilder,
    private auth: AuthService
  ) { }


  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.loginForm = this.fb.group({
      username: ['',Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
    },{})
  }

  get usernameControl() {
    return this.loginForm.get('username');
  }

  get passwordControl() {
    return this.loginForm.get('password');
  }


  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  openRegisterPopup(event: Event) {
    event.preventDefault();

    try {
      this.ref = this.dialogService.open(RegisterWindowComponent, {
        width: '25rem',
        showHeader: false,
        contentStyle: {
          "background-color": "black",
          "max-height": "600px",
          "overflow": "auto",
          "border-radius": "25px" // Optional: Add border-radius for rounded corners
        }
      });

      this.dialogCommunicationService.registrationSuccess$.subscribe(() => {
        this.closeDialog();
      })
    } catch (error) {
      console.error('Error opening dialog:', error);
    }
  }

  closeDialog() {
    if (this.ref) {
      this.ref.close();
    }
  }

  onSubmit() {
    //post
    this.auth.loginAuth(this.usernameControl.value, this.passwordControl.value);
  }
}
