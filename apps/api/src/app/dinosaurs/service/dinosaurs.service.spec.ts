import { Test, TestingModule } from '@nestjs/testing';
import { DinosaursService } from './dinosaurs.service';

describe('DinosaursService', () => {
  let service: DinosaursService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DinosaursService],
    }).compile();

    service = module.get<DinosaursService>(DinosaursService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
