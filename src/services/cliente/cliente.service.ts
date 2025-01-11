import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClienteDto } from 'src/dtos/cliente/cliente-dto';
import { Cliente } from 'src/models/cliente.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ClienteService {

    constructor(
        @InjectRepository(Cliente)
        private clienteRepository: Repository<Cliente>
    ){}

    create(createClienteDto: ClienteDto){
        const cliente = this.clienteRepository.create(createClienteDto)
        return this.clienteRepository.save(cliente)
    }

    update(id: number, updateClienteDto: ClienteDto){
        return this.clienteRepository.update(id, updateClienteDto)
    }

    async find(id: number){
        const cliente = await this.clienteRepository.findOne({ where: {id}})
        return this.toClienteDtoDetail(cliente)
    }

    async findAll(){
        const clientes = await this.clienteRepository.find()
        return clientes.map( cliente => this.toClienteDtoList(cliente))
    }

    delete(id: number){
        return this.clienteRepository.delete(id)
    }

    private toClienteDtoList(cliente: Cliente): ClienteDto {
        return {
          id: cliente.id,
          nome: cliente.nome,
          dataNascimento: cliente.dataNascimento,
          email: cliente.email,
          telefone: cliente.telefone,
        };
      }

      private toClienteDtoDetail(cliente: Cliente): ClienteDto {
        return {
          id: cliente.id,
          nome: cliente.nome,
          dataNascimento: cliente.dataNascimento,
          email: cliente.email,
          telefone: cliente.telefone,
          logradouro: cliente.logradouro,
          complemento: cliente.complemento,
          cidade: cliente.cidade,
          estado: cliente.estado,
          cep: cliente.cep,
        };
      }




}
