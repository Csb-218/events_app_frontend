
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';


const EventsPerCityPage =({data,id}) => {
    return(
       <div className='mt-24'>
        <h1 className='text-center text-3xl font-serif p-5'>
            Events in {id}
        </h1>

        <main className='flex flex-col gap-y-10 mx-5 lg:mx-auto text-center lg:w-8/12'>
        {
          data.map((ev) => (
            
              <Link key={ev.id} href={`/events/${ev.city}/${ev.id}`} className={ data.indexOf(ev) % 2===0 ?'flex lg:flex-row-reverse flex-col lg:my-10 my-2 justify-center ':'flex lg:flex-row flex-col lg:my-10 my-2 justify-center '}>
                <Image width={600} height={600} alt={ev.title} src={ev.image} className='w-full'/>
                <div className='my-32 mx-10'>
                    <h2 className="text-4xl mt-4">{ev.title}</h2>
                    <p>{ev.description}</p>
                </div>
                
              </Link>
            
            )
          )
        }
      </main> 
       </div>
    )
}

export default EventsPerCityPage;

export async function getStaticPaths(){

    const response = await axios.get(process.env.NEXT_PUBLIC_ENV_LOCAL_VARIABLE_1);
    const events_categories = response.data;
    const allPaths = events_categories.map( ev => {
            return({
                params: {cat : ev.id}
            })
        }
    )
    return{
        paths:allPaths,
        fallback:false
    }
}

export async function getStaticProps(context){
    
    const response = await axios.get(process.env.NEXT_PUBLIC_ENV_LOCAL_VARIABLE_2);
    const allEvents = response.data;
    const id = context.params.cat;
    const data = allEvents.filter(ev => ev.city === id);

    return{
        props:{data,id}
    }
}


