import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoList } from 'src/typeorm/entities/TodoList';
import { TodoListService } from './services/todo-list/todo-list.service';
import { TodoListController } from './controllers/todo-list/todo-list.controller';

@Module({
    imports: [TypeOrmModule.forFeature([TodoList])],
    providers: [TodoListService],
    controllers: [TodoListController]
})
export class TodoListModule {}
