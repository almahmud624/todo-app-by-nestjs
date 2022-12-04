import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosSchema } from './todos.model';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://todos:kIef6CXNcdwC21F6@cluster0.4ieih.mongodb.net/?retryWrites=true&w=majority',
    ),
    MongooseModule.forFeature([{ name: 'todos', schema: TodosSchema }]),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
