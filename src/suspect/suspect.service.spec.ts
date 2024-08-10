import { Test, TestingModule } from '@nestjs/testing';
import { SuspectService } from './suspect.service';

describe('SuspectService', () => {
  let service: SuspectService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SuspectService],
    }).compile();

    service = module.get<SuspectService>(SuspectService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
