import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ClienteDto } from 'src/dtos/cliente/cliente-dto';
import { Cliente } from 'src/models/cliente.entity';
import { ClienteService } from 'src/services/cliente/cliente.service';

@Controller('cliente')
export class ClienteController {

    constructor(private readonly clienteService: ClienteService){}

    @Post()
    async create(@Body() createClienteDto: ClienteDto){
        return this.clienteService.create(createClienteDto);
    }

    @Put(":id")
    update(@Param('id') id: number, @Body() updateClienteDto: ClienteDto){
        return this.clienteService.update(id, updateClienteDto)
    }

    @Get()
    async findAll(){
        return this.clienteService.findAll()
    }

    @Get(':id')
    async find(@Param('id') id: number){
        return this.clienteService.find(id)
    }

    @Delete(':id')
    delete(@Param('id') id: number){
        this.clienteService.delete(id)
    }

    
    


}
