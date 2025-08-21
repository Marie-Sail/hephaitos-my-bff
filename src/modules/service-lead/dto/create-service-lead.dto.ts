import { IsNotEmpty, Length, MaxLength, IsString } from 'class-validator';

export class CreateServiceLeadDto {

    @IsNotEmpty()
    @IsString()
    @Length(2, 50, { message: 'Le nom du service doit avoir entre 2 et 50 caractères' })
    name: string;

    @IsNotEmpty()
    @IsString()
    @Length(3, 125, { message: 'Le titre doit avoir entre 3 et 125 caractères' })
    titleLead: string;

    @IsNotEmpty()
    @IsString()
    @Length(3, 125, { message: 'Le titre doit avoir entre 3 et 125 caractères' })
    titleContactForm: string;

    @IsNotEmpty()
    @IsString()
    @MaxLength(50, { message: "L'id contentfull doit faire au maximum 50 caractères" })
    contentfullId: string;
}

export class CreateServiceLead {
}