// route.ts
import { Request, Response } from 'express';
import Contador from '@/app/models/Contador';
import { connectDB } from '@/app/libs/gamebd';
import { NextResponse } from 'next/server';

export async function GET(request: Request, response: Response) {
  try {
    await connectDB(); 
    let contador = await Contador.findOne();
    console.log(contador)
    if (!contador) {
      contador = new Contador({ value: 0 });
      await contador.save();
    }
    return NextResponse.json({ valor: contador.value });
  } catch (error) {
    console.error('Error obteniendo el contador:', error);
    return NextResponse.json({ message: 'Error en el servidor' }, { status: 500 });
  }
}

export async function POST(request: Request, response: Response) {
  try {
    await connectDB();
    let contador = await Contador.findOne();
    if (!contador) {
      contador = new Contador({ value: 0 });
    }
    // Verifica que el nuevo valor a asignar sea un número
    const newValue = contador.value + 1;
    if (typeof newValue !== 'number' || isNaN(newValue)) {
      throw new Error('El nuevo valor no es un número válido');
    }
    contador.value = newValue;
    await contador.save();
    return NextResponse.json({ count: contador.value });
  } catch (err) {
    console.error('Error incrementando el contador:', err);
    return NextResponse.json({ message: 'Error incrementando el contador' });
  }
}
