import { Test, TestingModule } from '@nestjs/testing';
import { DinosaursController } from './dinosaurs.controller';

describe('DinosaursController', () => {
  let controller: DinosaursController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DinosaursController],
    }).compile();

    controller = module.get<DinosaursController>(DinosaursController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
