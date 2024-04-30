import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { TodoListService } from 'src/todo-list/services/todo-list/todo-list.service';
import { TodoListDetails } from 'src/utils/types';

@Controller('todo-list')
export class TodoListController {
    constructor(private service: TodoListService) { }

    @Get()
    getTodoList() {
        return this.service.get();
    }

    @Get(':id')
    getOneTodoList(@Param('id', ParseIntPipe) id: number) {
        return this.service.findOne(id);
    }

    @Post()
    createTodoList(@Body() details: TodoListDetails) {
        return this.service.create(details);
    }

    @Put(':id')
    updateTodoList(@Param('id', ParseIntPipe) id: number, @Body() details: TodoListDetails) {
        return this.service.update(id, details);
    }

    @Delete(':id')
    deleteTodoList(@Param('id', ParseIntPipe) id: number) {
        return this.service.delete(id);
    }
}
