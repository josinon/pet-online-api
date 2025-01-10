import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { Cliente } from "./cliente.entity"

@Entity()
export class Endereco {
    
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    logradouro: string
    
    @Column()
    complemento: string
    
    @Column()
    cidade: string
    
    @Column()
    estado: string
    
    @Column()
    cep: string

    @OneToOne( () => Cliente, cliente => cliente.endereco)
    @JoinColumn()
    cliente: Cliente
}