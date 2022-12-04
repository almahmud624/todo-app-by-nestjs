import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Todos, TodosDocument } from './todos.model';

@Injectable()
export class AppService {
  getHello() {
    return 'Todos Api is Running';
  }

  constructor(
    @InjectModel('todos') private readonly todosModel: Model<TodosDocument>,
  ) {}
  // create new todos
  async createTodos(todos: Todos): Promise<Todos> {
    const newTodos = new this.todosModel(todos);
    return newTodos.save();
  }

  // get all todos
  async getTodos() {
    return this.todosModel
      .find({})
      .then((todos) => {
        return todos;
      })
      .catch((error) => console.log(error));
  }

  // get single todo
  async getSingleTodo(id: string) {
    return this.todosModel
      .findById(id)
      .then((todo) => {
        return todo;
      })
      .catch((error) => console.log(error));
  }

  // update todo status
  async updateTodoStatus(id: string, status) {
    return this.todosModel
      .findByIdAndUpdate(id, { status: 'done' }, { new: true })
      .then((todo) => {
        return todo;
      })
      .catch((error) => console.log(error));
  }

  // delete todo
  async deleteTodo(id) {
    return this.todosModel
      .findByIdAndRemove(id)
      .then((todo) => {
        return todo;
      })
      .catch((error) => console.log(error));
  }
}
