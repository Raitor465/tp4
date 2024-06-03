//contador-fun.tsx
import React, { useState, useEffect } from 'react';

const Contador: React.FC = () => {
  const [contador, setContador] = useState<number | null>(null);

  useEffect(() => {
    const fetchCounter = async () => {
      try {
        const res = await fetch('/api/test');
        
        const response = await fetch('/api/contador');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setContador(data.valor);
      } catch (error) {
        console.error('Error fetching counter:', error);
      }
    };
    fetchCounter();
  }, []);

  const incrementContador = async () => {
    try {
      const response = await fetch('/api/contador', {
        method: 'POST',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setContador(data.count);
    } catch (error) {
      console.error('Error incrementing counter:', error);
    }
  };
  
  return (
    <div className="text-center">
      <h2 className="text-2xl mb-4">Contador: {contador}</h2>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition"
        onClick={incrementContador}
      >
        Incrementar
      </button>
    </div>
  );
};

export default Contador;
