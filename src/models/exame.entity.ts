import { Column, Entity, Generated, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Consulta } from "./consulta.entity"

@Entity()
export class Exame {
    
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    descricao: string
    
    @ManyToOne(() => Consulta, consulta => consulta.exames)
    @JoinColumn()
    consulta: Consulta
}