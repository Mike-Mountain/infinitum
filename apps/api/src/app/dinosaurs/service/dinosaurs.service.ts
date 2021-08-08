import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DinosaurEntity } from '../models/dinosaur.entity';
import { Repository } from 'typeorm';
import { DinosaurDto } from '../models/dinosaur.dto';

@Injectable()
export class DinosaursService {
  constructor(@InjectRepository(DinosaurEntity) private dinosaurRepository: Repository<DinosaurEntity>) {
  }

  public async getAllDinosaurs(): Promise<DinosaurDto[]> {
    return await this.dinosaurRepository.find();
  }

  public async getDinosaurById(id: number): Promise<DinosaurDto> {
    return await this.dinosaurRepository.findOne({ where: { id } });
  }

  public async getDinosaurByName(name: string): Promise<DinosaurDto> {
    return await this.dinosaurRepository.findOne({ where: { name } });
  }
}
