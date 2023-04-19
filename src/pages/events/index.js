
import axios from 'axios';
import Home_ from 'src/components/home/Home';

export async function getStaticProps(){

  const response = await axios.get(process.env.NEXT_PUBLIC_ENV_LOCAL_VARIABLE_1);
  const events_categories = response.data;
  return{
    props:{
     data:events_categories
    }
  }
} 

const EventsPage = ({data}) =>{//console.log(data)
    return (
      <main className='text-center mt-28 ' >
        <h1 className='text-5xl font-serif '>
          Events Around The Globe
        </h1>

        <Home_ data={data} />
        {/* {
          data.map((ev) =>

            <Link key={ev.id} href={`/events/${ev.id}`}>
              <Image width={600} height={600} alt={ev.title} src={ev.image} className='w-full' />
              <h2>{ev.title}</h2>
              <p>{ev.description}</p>
            </Link>
          )
        } */}
      </main>
    )

}

export default EventsPage;

