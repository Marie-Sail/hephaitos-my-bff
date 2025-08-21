import { Module } from '@nestjs/common';
import { ServiceLeadController } from './service-lead.controller';
import { ServiceLeadService } from './service-lead.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ServiceLead, ServiceLeadSchema } from './schemas/serviceLead.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ServiceLead.name, schema: ServiceLeadSchema },
    ]),
  ],
  controllers: [ServiceLeadController],
  providers: [ServiceLeadService],
})
export class ServiceLeadModule {}
