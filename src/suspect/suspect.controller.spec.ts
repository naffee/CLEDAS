import { Test, TestingModule } from '@nestjs/testing';
import { SuspectController } from './suspect.controller';

describe('SuspectController', () => {
  let controller: SuspectController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SuspectController],
    }).compile();

    controller = module.get<SuspectController>(SuspectController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
