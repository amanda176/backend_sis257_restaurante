import { Test, TestingModule } from '@nestjs/testing';
import { CategoriaPlatillosService } from './categoria_platillos.service';

describe('CategoriaPlatillosService', () => {
  let service: CategoriaPlatillosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategoriaPlatillosService],
    }).compile();

    service = module.get<CategoriaPlatillosService>(CategoriaPlatillosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
