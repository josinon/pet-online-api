import { Type } from "class-transformer"
import { IsDate, IsDateString, IsEmail, IsPhoneNumber } from "class-validator"

export class ClienteDto {

    id: number

    nome: string 
    
    @Type(() => Date)
    @IsDate()
    dataNascimento: Date
    
    @IsEmail()
    email: string

    @IsPhoneNumber("BR")
    telefone: string

    logradouro?: string
    complemento?: string
    cidade?: string
    estado?: string
    cep?: string

}