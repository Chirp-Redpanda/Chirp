import { Injectable } from '@nestjs/common';
import { CreateChirrupDto } from './dto/create-chirrup.dto';
import { UpdateChirrupDto } from './dto/update-chirrup.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Chirrup, ChirrupDocument } from './entities/chirrup.entity';
// import { Chirrup } from './interfaces/chirrup.interface';


@Injectable()
export class ChirrupService {

  constructor(@InjectModel(Chirrup.name) private chirrupModel: Model<ChirrupDocument>) { }


  async create(createChirrupDto: CreateChirrupDto): Promise<ChirrupDocument> {
    const createdChirrup = new this.chirrupModel(createChirrupDto);
    return createdChirrup.save();
  }
  findAll() {
    return this.chirrupModel.find();
    // return `This action returns all chirrup`;
  }

  findOne(id: number) {
    return this.chirrupModel.findById(id);
    // return `This action returns a #${id} chirrup`;
  }

  update(id: number, updateChirrupDto: UpdateChirrupDto) {
    return this.chirrupModel.findByIdAndUpdate(id, updateChirrupDto);
    // return `This action updates a #${id} chirrup`;
  }

  remove(id: number) {
    // return `This action removes a #${id} chirrup`;
    return this.chirrupModel.findByIdAndDelete(id);
  }
}
