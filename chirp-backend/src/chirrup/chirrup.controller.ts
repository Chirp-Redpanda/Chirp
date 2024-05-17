import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ChirrupService } from './chirrup.service';
import { CreateChirrupDto } from './dto/create-chirrup.dto';
import { UpdateChirrupDto } from './dto/update-chirrup.dto';

@Controller('chirrup')
export class ChirrupController {
  constructor(private readonly chirrupService: ChirrupService) { }

  @Post()
  create(@Body() createChirrupDto: CreateChirrupDto) {
    return this.chirrupService.create(createChirrupDto);
  }

  @Get()
  findAll() {
    return this.chirrupService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chirrupService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChirrupDto: UpdateChirrupDto) {
    return this.chirrupService.update(+id, updateChirrupDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chirrupService.remove(+id);
  }
}
