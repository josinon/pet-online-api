import { Animal } from "./animal.entity";
import { Column, CreateDateColumn, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Cliente {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome:string

    @Column()
    dataNascimento: Date
    
    @Column()
    email:string

    @Column()
    telefone: string
    
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
    
    @OneToMany(() => Animal, animal => animal.cliente)
    animais: Animal[]

    @CreateDateColumn()
    dataCadastro: Date

    @UpdateDateColumn()
    dataAtualizacao: Date

}