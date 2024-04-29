import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoListModule } from './todo-list/todo-list.module';
import { TodoList } from './typeorm/entities/TodoList';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      database: 'todo_list',
      entities: [TodoList],
      synchronize: true
    }),
    TodoListModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
