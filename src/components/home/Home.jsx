import  Link from 'next/link';
import  Image from 'next/image';


function Home({data}) {
  return (
    <main className='flex flex-col gap-y-10 mx-5 lg:mx-auto text-center lg:w-8/12 '>
        {
          data.map((ev) => 

            <Link key={ev.id} href={`/events/${ev.id}`} className={ data.indexOf(ev) % 2===0 ?'flex lg:flex-row-reverse flex-col lg:my-10 my-2 justify-center ':'flex lg:flex-row flex-col lg:my-10 my-2 justify-center '}>
                <Image width={400} height={400} alt={ev.title} src={ev.image} className='w-auto h-auto'/>
                <div className='my-20 mx-10'>
                  <h2 className="text-4xl mt-4">{ev.title}</h2>
                  <p>{ev.description}</p>
                </div>
              </Link>
            )
          
        }
</main>
  )
}

export default Home;



