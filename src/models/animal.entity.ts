import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Cliente } from "./cliente.entity"
import { Especie } from "./especie.entity"
import { Consulta } from "./consulta.entity"

@Entity()
export class Animal {
    
    @PrimaryGeneratedColumn()
    id:  number

    @Column()
    nome: string

    @Column()
    dataNascimento: Date

    @Column()
    sexo: string
    
    @ManyToOne(() => Cliente, cliente => cliente.animais)
    @JoinColumn()
    cliente: Cliente
    

    @ManyToOne(() => Especie, especie => especie.animais)
    @JoinColumn()
    especie: Especie
    
    @OneToMany(() => Consulta, consulta => consulta.animal)
    consultas: Consulta[]
}