'use client'
import Head from 'next/head';
import Contador from './components/contador-fun';


const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Contador App</title>
        <meta name="description" content="A simple counter app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <h1 className="text-4xl font-bold mb-8">Bienvenido a Contador App</h1>
        <Contador />
      </main>
    </div>
  );
};

export default Home;
