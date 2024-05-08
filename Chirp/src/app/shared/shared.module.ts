import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChirrupListComponent } from '../features/chirrup/components/chirrup-list/chirrup-list.component';
import { ChirrupCardComponent } from '../features/chirrup/components/chirrup-card/chirrup-card.component';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { GetChirrupsService } from '../shared/services/get-chirrups.service';
import { FormsModule } from '@angular/forms';
import { ReversePipe } from './pipes/reverse.pipe';
import { Truncate1Pipe } from './pipes/truncate1.pipe';


@NgModule({
  declarations: [
    ChirrupListComponent,
    ChirrupCardComponent,
    ReversePipe,
    Truncate1Pipe
  ],

  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
    FormsModule
  ],

  exports: [
    ChirrupCardComponent,
    ChirrupListComponent,
    Truncate1Pipe
  ]


})
export class SharedModule { }
