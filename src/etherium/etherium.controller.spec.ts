import { Test, TestingModule } from '@nestjs/testing';
import { EtheriumController } from './etherium.controller';

describe('EtheriumController', () => {
  let controller: EtheriumController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EtheriumController],
    }).compile();

    controller = module.get<EtheriumController>(EtheriumController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
