import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type TodosDocument = Todos & Document;

@Schema()
export class Todos {
  @Prop({ default: 1 })
  id: number;

  @Prop()
  description: string;

  @Prop({ default: 'pending' })
  status: string;
}

export const TodosSchema = SchemaFactory.createForClass(Todos);
