import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "todo-list" })
export class TodoList {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @Column({ unique: true })
    title: string;

    @Column()
    description: string;

    @Column()
    createdAt: Date;
}