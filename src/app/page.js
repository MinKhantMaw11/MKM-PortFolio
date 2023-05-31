'use client'
import Image from 'next/image';
import Head from 'next/head';
import MKM from '../../public/mkm.png';
import Design from '../../public/design.png';
import Code from '../../public/code.png';
import Consulting from '../../public/consulting.png';
import Web1 from '../../public/web1.png';
import Web2 from '../../public/web2.png';
import Web3 from '../../public/web3.png';
import Web4 from '../../public/web4.png';
import Web5 from '../../public/web5.png';
import { useState } from 'react';
export default function Home() {
  const [darkMode,setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ""}>
      <Head>
        <title>Min Khant Maw Portfolio</title>
        </Head>
      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900 dark:text-white'>
        <section className=' min-h-screen'> 
          <nav className='p-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-bold text-teal-600'>MinKhantMaw</h1>
            <ul className='flex items-center'>
              <li className='cursor-pointer'> 
                <div onClick={() => setDarkMode(!darkMode)} className='bg-black w-10 h-10 rounded-full dark:bg-white'></div>
              </li>
              <li><a className='bg-gradient-to-r  from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href='#'>Resume</a></li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-4xl py-2 text-teal-600 font-bold md:text-6xl'> Min Khant Maw</h2>
            <h3 className='text-2xl py-2 md:text-3xl '>Junior Frontend Developer</h3>
            <p className='text-md py-5 leading-8 md:text-xl text-gray-800 max-w-lg mx-auto dark:text-gray-400'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer
             took a galley of type and scrambled it to make a type specimen book
            </p>
          </div>
          <div className='text-xl  flex justify-center gap-16 py-3 text-gray-600'>
            <h3 className='bg-blue-500 cursor-pointer text-white rounded px-4 py-2 ml-8 inline-block'>Twitter</h3>
            <h3 className='bg-blue-800 cursor-pointer text-white rounded px-4 py-2 ml-8 inline-block'>FaceBook</h3>
            <h3 className='bg-red-600 cursor-pointer text-white rounded px-4 py-2 ml-8 inline-block'>Youtube</h3>
          </div>
          <div className=''>
            <Image src={MKM} width={0} height={0} objectFit='cover' alt='profile' className='realative mx-auto bg-black dark:bg-gradient-to-b from-teal-500  rounded-full w-80 h-80 mt-20 md:h-96 md:w-96'/>
          </div>
        </section>

        <section className='mt-10' >
          <div>
            <h3 className='text-3xl py-1 text-center text-cyan-600 font-bold'>Services I offer</h3>
            <p className='text-md py-2 leading-8 text-grey-800'>
            t is a long established fact that a reader will be distracted
             by the readable content of a page when looking at its layout
             <span className='text-teal-500'>agencies</span>
             The point of using Lorem Ipsum is that
             <span className= 'text-teal-500'>Start</span> andcollaborated with talended people to crerate digisnefa-rotate-180
             for both businesss and consumer use.
            </p>
            <p className='text-md py-2 leading-8 text-grey-800'>
            Contrary to popular belief 
            Lorem Ipsum is not simply random text
            </p>
          </div>
          <div className='lg:flex gap-10'>
            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
              <Image src={Design} width={100} height={100} alt='Design' className='mx-auto'/>
              <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Design</h3>
              <p className='py-2'>
                Creating elegeant design suited for your needed
                design theory.
              </p>
              <h4 className='py-4 text-teal-600'>Design tools I use</h4>
              <p className='text-gray-800 py-1 dark:text-gray-400'>PhotoShop</p>
              <p  className='text-gray-800 py-1 dark:text-gray-400'>Illustrator</p>
              <p  className='text-gray-800 py-1 dark:text-gray-400'>Figma</p>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
              <Image src={Consulting} width={100} height={100} alt='Consulting' className='mx-auto'/>
              <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Design</h3>
              <p className='py-2'>
                Creating elegeant design suited for your needed
                design theory.
              </p>
              <h4 className='py-4 text-teal-600'>Design tools I use</h4>
              <p className='text-gray-800 py-1 dark:text-gray-400'>PhotoShop</p>
              <p  className='text-gray-800 py-1 dark:text-gray-400'>Illustrator</p>
              <p  className='text-gray-800 py-1 dark:text-gray-400'>Figma</p>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
              <Image src={Code} width={100} height={100} alt='Code' className='mx-auto'/>
              <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Design</h3>
              <p className='py-2'>
                Creating elegeant design suited for your needed
                design theory.
              </p>
              <h4 className='py-4 text-teal-600'>Design tools I use</h4>
              <p className='text-gray-800 py-1 dark:text-gray-400'>PhotoShop</p>
              <p  className='text-gray-800 py-1 dark:text-gray-400'>Illustrator</p>
              <p  className='text-gray-800 py-1 dark:text-gray-400'>Figma</p>
            </div>
          </div>
        </section>

        <section>
          <div>
            <h3 className='text-3xl py-1 text-center font-bold'>PortFolio</h3>
            <p className='text-md py-2 leading-8 text-grey-800 dark:text-gray-400'>
            t is a long established fact that a reader will be distracted
             by the readable content of a page when looking at its layout
             <span className='text-teal-500'>agencies</span>
             The point of using Lorem Ipsum is that
             <span className= 'text-teal-500'>Start</span> andcollaborated with talended people to crerate digisnefa-rotate-180
             for both businesss and consumer use.
            </p>
            <p className='text-md py-2 leading-8 text-grey-800 dark:text-gray-400'>
            Contrary to popular belief 
            Lorem Ipsum is not simply random text
            </p>
            <p className='text-md py-2 leading-8 text-grey-800 dark:text-gray-400'>
              I offer from a wide range of Services,
               including programming and teaching
            </p>
          </div>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/3 flex-1'>
              <Image src={Web1} width={0} height={0} alt='web1' className='w-auto h-auto rounded-lg object-cover'/>
            </div>
            <div className='basis-1/3 flex-1' >
              <Image src={Web2} width={0} height={0} alt='web1' className='w-auto h-auto rounded-lg object-cover'/>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={Web3} width={0} height={0} alt='web1' className='w-auto h-auto rounded-lg object-cover'/>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={Web4} width={0} height={0} alt='web1' className='w-auto h-auto rounded-lg object-cover'/>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={Web5} width={0} height={0} alt='web1' className='w-auto h-auto rounded-lg object-cover'/>
            </div>
          </div>
        </section>
      </main>
    </div>

  )
}
