import mongoose, { Document, Schema } from 'mongoose';

interface Contador extends Document {
  value: number;
}

const ContadorSchema: Schema = new Schema({
  value: {
    type: Number,
    required: true,
  },
});

export default mongoose.models.Contador || mongoose.model<Contador>('Contador', ContadorSchema);
