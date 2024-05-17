import { PartialType } from '@nestjs/mapped-types';
import { CreateChirrupDto } from './create-chirrup.dto';

export class UpdateChirrupDto extends PartialType(CreateChirrupDto) {}
