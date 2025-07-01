import { Test, TestingModule } from '@nestjs/testing';
import { CategoriaPlatillosController } from './categoria_platillos.controller';
import { CategoriaPlatillosService } from './categoria_platillos.service';

describe('CategoriaPlatillosController', () => {
  let controller: CategoriaPlatillosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoriaPlatillosController],
      providers: [CategoriaPlatillosService],
    }).compile();

    controller = module.get<CategoriaPlatillosController>(CategoriaPlatillosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
