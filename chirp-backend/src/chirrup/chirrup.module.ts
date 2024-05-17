import { Module } from '@nestjs/common';
import { ChirrupService } from './chirrup.service';
import { ChirrupController } from './chirrup.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Chirrup, ChirrupSchema } from './entities/chirrup.entity'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Chirrup.name, schema: ChirrupSchema }])
  ],
  controllers: [ChirrupController],
  providers: [ChirrupService],
})
export class ChirrupModule { }
