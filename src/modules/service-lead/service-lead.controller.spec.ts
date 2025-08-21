import { Test, TestingModule } from '@nestjs/testing';
import { ServiceLeadController } from './service-lead.controller';

describe('ServiceLeadController', () => {
  let controller: ServiceLeadController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ServiceLeadController],
    }).compile();

    controller = module.get<ServiceLeadController>(ServiceLeadController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
