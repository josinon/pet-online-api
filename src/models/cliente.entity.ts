import internal from "stream";
import { Endereco } from "./endereco.entity";
import { Animal } from "./animal.entity";
import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

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
    
    @OneToOne( () => Endereco, endereco => endereco.cliente )
    endereco: Endereco
    
    @OneToMany(() => Animal, animal => animal.cliente)
    animais: Animal[]

}