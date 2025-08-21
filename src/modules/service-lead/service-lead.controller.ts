import { Body, Controller, Get, Post, Param,  Put, Delete } from '@nestjs/common';
import { ServiceLeadService } from './service-lead.service';
import { ServiceLead } from './schemas/serviceLead.schema';
import { CreateServiceLeadDto} from './dto/create-service-lead.dto'
import { UpdateServiceLeadDto} from './dto/update-service-lead.dto'
import { ParseObjectIdPipe } from 'src/common/pipes/parse-objectid.pipe';

@Controller('service-lead')
export class ServiceLeadController {
  constructor(private readonly serviceLeadService: ServiceLeadService) {}

  @Post()
  create(@Body() newService: CreateServiceLeadDto): Promise<ServiceLead> {
    return this.serviceLeadService.create(newService);
  }

  @Get()
  findAll() : Promise<ServiceLead[]>{
    return this.serviceLeadService.findAll();
  }

  @Get(':id')
  getById(@Param('id', ParseObjectIdPipe) id: string): Promise<ServiceLead>{
    return this.serviceLeadService.findById(id);
  }

  @Put(':id')
  update(@Param('id', ParseObjectIdPipe) id: string, @Body() updateService: UpdateServiceLeadDto ): Promise<ServiceLead> {
    return this.serviceLeadService.update(id, updateService);
  }

  @Delete(':id')
  delete(@Param('id', ParseObjectIdPipe) id: string): Promise<void>{
    return this.serviceLeadService.delete(id);
  }
}
