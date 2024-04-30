import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TodoList } from 'src/typeorm/entities/TodoList';
import { TodoListDetails } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class TodoListService {
    constructor(@InjectRepository(TodoList) private repo: Repository<TodoList>) { }

    findOne(id: number) {
        return this.repo.findOneBy({ id });
    }

    get() {
        return this.repo.find();
    }

    create(details: TodoListDetails) {
        const newList = this.repo.create({
            ...details,
            createdAt: new Date()
        });
        return this.repo.save(newList);
    }

    update(id: number, details: TodoListDetails) {
        return this.repo.update({ id }, { ...details });
    }

    async delete(id: number) {
        return await this.repo.delete({ id });
    }
}
