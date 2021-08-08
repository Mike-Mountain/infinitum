import { Controller, Get, Param } from '@nestjs/common';
import { DinosaursService } from '../service/dinosaurs.service';

@Controller('dinosaur')
export class DinosaursController {
  constructor(private dinosaursService: DinosaursService) {
  }

  @Get()
  getAllDinosaurs() {
    return this.dinosaursService.getAllDinosaurs();
  }

  @Get(':id')
  getDinosaurById(@Param() params) {
    return this.dinosaursService.getDinosaurById(params.id);
  }

  @Get('name/:name')
  getDinosaurByName(@Param() params) {
    return this.dinosaursService.getDinosaurByName(params.name);
  }
}
