import { Controller, Get, Body, Post, Param, Delete } from '@nestjs/common';
import { AppService } from './app.service';
import { Todos } from './todos.model';
import { todoUpdateDto } from './todoUpdate.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  async getHello() {
    return this.appService.getHello();
  }
  @Post('todos')
  async createTodos(@Body() todos: Todos) {
    return this.appService.createTodos(todos);
  }
  @Get('todos')
  async getTodos() {
    return this.appService.getTodos();
  }
  @Get('todo/:id')
  async getSingleTodo(@Param('id') id: string) {
    return this.appService.getSingleTodo(id);
  }
  @Post('todo/:id')
  async updateTodoStatus(
    @Param('id') id: string,
    @Body() updateStatus: todoUpdateDto,
  ) {
    return this.appService.updateTodoStatus(id, updateStatus);
  }
  @Delete('todo/:id')
  async deleteTodo(@Param('id') id: string) {
    return this.appService.deleteTodo(id);
  }
}
