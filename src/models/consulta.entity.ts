import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Animal } from "./animal.entity"
import { Exame } from "./exame.entity"
import { Veterinario } from "./veterinario.entity"

@Entity()
export class Consulta {
    
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    data: Date

    @Column()
    historico: string
    
    @OneToMany(() => Exame, exame => exame.consulta)
    exames: Exame[]
    
    @ManyToOne( () => Veterinario, veterinario => veterinario.consultas)
    veterinario: Veterinario
    
    @ManyToOne(() => Animal, animal => animal.consultas)
    animal: Animal
}