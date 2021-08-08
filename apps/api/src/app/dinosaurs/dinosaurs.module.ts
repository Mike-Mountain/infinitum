import { Module } from '@nestjs/common';
import { DinosaursService } from './service/dinosaurs.service';
import { DinosaursController } from './controller/dinosaurs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DinosaurEntity } from './models/dinosaur.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DinosaurEntity])],
  controllers: [DinosaursController],
  providers: [DinosaursService]
})
export class DinosaursModule {}
