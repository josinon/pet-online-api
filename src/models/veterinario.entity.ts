import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Consulta } from "./consulta.entity"

@Entity()
export class Veterinario {
    
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome: string

    @Column()
    telefone: string
    
    @Column()
    email: string

    @OneToMany(() => Consulta, consulta => consulta.veterinario)
    consultas: Consulta[]
    
}