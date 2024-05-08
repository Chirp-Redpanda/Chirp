import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewChirrupComponent } from './components/new-chirrup/new-chirrup.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LikedPageComponent } from './pages/liked-page/liked-page.component';
import { ButtonModule } from 'primeng/button';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TruncatePipe } from './pipes/truncate.pipe';
import { ChirrupListComponent } from './components/chirrup-list/chirrup-list.component';
import { TruncateAvatarPipe } from './pipes/truncate-avatar.pipe';
import { ReversePipe } from './pipes/reverse.pipe';



@NgModule({
  declarations: [
    NewChirrupComponent,
    HomePageComponent,
    LikedPageComponent,
    ChirrupListComponent,
    ReversePipe,
    TruncatePipe,
    TruncateAvatarPipe
  ],
  imports: [
    CommonModule,
    ButtonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    NewChirrupComponent,
    HomePageComponent,
    LikedPageComponent,
  ],

})
export class ChirrupModule { }