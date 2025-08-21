import { PartialType } from '@nestjs/mapped-types';
import { CreateServiceLeadDto } from './create-service-lead.dto';

export class UpdateServiceLeadDto extends PartialType(CreateServiceLeadDto) {}

// PartialType rend toutes les propriétés optionnelles pour la mise à jour.