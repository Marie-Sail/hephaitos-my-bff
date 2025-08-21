import { Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ServiceLead } from './schemas/serviceLead.schema';
import { CreateServiceLeadDto } from './dto/create-service-lead.dto'
import { UpdateServiceLeadDto } from './dto/update-service-lead.dto'

@Injectable()
export class ServiceLeadService {
  constructor(
    @InjectModel(ServiceLead.name)
    private serviceLeadModel: Model<ServiceLead>,
  ) {}

    async create(dto: CreateServiceLeadDto): Promise<ServiceLead> {
        try {
            const newLead = new this.serviceLeadModel(dto);
            return await newLead.save();
        } catch (error) {
            console.error(error);
            throw new InternalServerErrorException('Error creating ServiceLead');
        }
    }

  async findAll(): Promise<ServiceLead[]> {
      try {
          return this.serviceLeadModel.find().exec();
      }
      catch (error){
          console.error(error);
          throw new InternalServerErrorException('Error fetching ServiceLeads');
      }

  }

  async findById(id: string): Promise<ServiceLead> {
      try{
          const service = await this.serviceLeadModel.findById(id).exec();
          if(!service) throw new NotFoundException(`Service not found with id: ${id}`);
          return service
      }
      catch (error){
          console.error(error);
          if (error instanceof NotFoundException) throw error;
          throw new InternalServerErrorException('Error fetching ServiceLead');
      }
  }

  async update(id: string, dto: UpdateServiceLeadDto): Promise<ServiceLead> {
    try{
      const serviceUpdated = await this.serviceLeadModel
        .findByIdAndUpdate(id, dto, { new: true })
        .exec();

      if(!serviceUpdated) throw new NotFoundException(`Service not found with id: ${id}`);
      return serviceUpdated;
    }
    catch (error){
      console.error(error);
      if (error instanceof NotFoundException) throw error;
      throw new InternalServerErrorException('Error updating ServiceLead');
    }
  }

  async delete(id: string): Promise<void> {
    try{
      const serviceDeleted = await this.serviceLeadModel.findByIdAndDelete(id).exec();

      if(!serviceDeleted) throw new NotFoundException(`Service not found with id: ${id}`);
    }
    catch (error){
      console.error(error);
      if (error instanceof NotFoundException) throw error;
      throw new InternalServerErrorException('Error deleting ServiceLead');
    }
  }

}
