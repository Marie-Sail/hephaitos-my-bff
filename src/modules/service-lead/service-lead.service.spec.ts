import { Test, TestingModule } from '@nestjs/testing';
import { ServiceLeadService } from './service-lead.service';

describe('ServiceLeadService', () => {
  let service: ServiceLeadService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServiceLeadService],
    }).compile();

    service = module.get<ServiceLeadService>(ServiceLeadService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
