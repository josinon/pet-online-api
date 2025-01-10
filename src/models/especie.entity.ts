import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Animal } from "./animal.entity"

@Entity()
export class Especie {
    
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome: string

    @OneToMany(() => Animal, animal => animal.especie)
    animais: Animal[]
}