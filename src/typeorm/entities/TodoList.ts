import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "todo-list" })
export class TodoList {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @Column()
    title: string;

    @Column()
    body: string;

    @Column()
    createdAt: Date;
}