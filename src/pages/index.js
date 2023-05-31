import Head from 'next/head'
import { Inter } from 'next/font/google'
import Home_ from '../components/home/Home';
import axios from 'axios';

const inter = Inter({ subsets: ['latin'] })

export async function getServerSideProps(){

  const response = await axios.get(process.env.NEXT_PUBLIC_ENV_LOCAL_VARIABLE_1);

  const events_catagories = response.data;
  return{
    props:{
      data:events_catagories  
    }
  }
}

export default function Home({data}) {
  return (
    <>
      <Head>
        <title>Events</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='mt-24'>
        <Home_ data={data} />
      </div>
    </>
  )
}


