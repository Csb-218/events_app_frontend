import Link from 'next/link';
import Image from 'next/image';
import menuIcon from 'public/images/menu.png';
import {useState} from 'react';

function Header() {
  const[state, setState] = useState('hidden');

  return (
    <header >
    <nav className='flex flex-row fixed w-full top-0 lg:px-5 justify-between bg-black '>
      <Image width={50} height={50} src='/images/curve.png' alt='xyz' className='bg-white mt-4 ml-4'></Image>

      <div className='dropdown' onMouseEnter={()=>setState('dropdown-content')} onMouseLeave={()=>setState('hidden')}>
          <button className=''>
            <Image src={menuIcon} alt='xyz' className='w-10 h-10 my-2 mx-2' ></Image>
          </button>

          <div className={state}>
            <Link href='/' className='dropdown-item'> Home </Link>
            <Link href='/events' className='dropdown-item'> Events </Link>
            <Link href='/about-us' className='dropdown-item'> About Us </Link>
          </div>
      </div>
      
      <div className='lg:flex gap-x-5 p-5 hidden '>
        <Link href='/'> Home </Link>
        <Link href='/events'> Events </Link>
        <Link href='/about-us'> About Us </Link>
      </div>
      
    </nav>
  </header>
  )
}

export default Header