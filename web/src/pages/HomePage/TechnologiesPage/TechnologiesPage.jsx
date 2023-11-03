import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import './TechnologiesPage.scss';
import reactLogo from 'src/assets/tech/react.svg';
import jestLogo from 'src/assets/tech/jest.svg';
import typescriptLogo from 'src/assets/tech/typescript.svg';
import storyBookLogo from 'src/assets/tech/storybook.svg';
import prismaLogo from 'src/assets/tech/prisma.svg';
import graphqlLogo from 'src/assets/tech/graphql.svg';

const TechnologiesPage = () => {
  return (
    <>
      <MetaTags title="Technologies" description="Technologies page" />
      <div id="technologies" className='h-screen pt-[5.5rem] bg-white dark:bg-gray-dark'>
        <div className='grid grid-rows-1 grid-cols-2'>
          <div className='items-center justify-items-center flex'>
            <div className=' grid grid-rows-1 grid-cols-3 m-auto font-inter'>
              <div className='col-span-1 items-center justify-center'>
                <div className='text-8xl m-auto texto dark:text-white'>MORE</div>
              </div>
              <div className='col-span-1 flex flex-col items-start justify-between'>
                <div className='text-5xl dark:text-white'>startup</div>
                <div className='text-5xl dark:text-white'>territory</div>
                <div className='text-5xl dark:text-white'>quickly</div>
              </div>
              <div className='col-span-3'>
                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
              </div>
            </div>
          </div>
          <div className='grid grid-rows-2 grid-cols-3 gap-0 items-center justify-items-center h-[100vh] mt-[-10vh]'>
            <div className='col-span-1 flex items-center flex-col justify-evenly shadow-3xl absolute animate-icon-bounce-1 rounded-md mr-[-29vw] mt-[0vw] bg-gray bg-opacity-20 h-[10vw] w-[10vw]'>
              <img className='' width={80} src={storyBookLogo}></img>
              <p className='text-xl'>Storybook</p>
            </div>
            <div className='col-span-1 flex items-center flex-col justify-evenly shadow-3xl absolute animate-icon-bounce-2 rounded-md mt-[7vw] ml-[6vw] bg-gray bg-opacity-20 h-[10vw] w-[10vw]'>
              <img className='' width={60} src={jestLogo}></img>
              <p className='text-xl'>Jest</p>
            </div>
            <div className='col-span-1 flex items-center flex-col justify-evenly shadow-3xl absolute animate-icon-bounce-3 rounded-md mr-[16vw] mt-[4vw] bg-gray bg-opacity-20 h-[10vw] w-[10vw]'>
              <img className='' width={60} src={prismaLogo}></img>
              <p className='text-xl'>Prisma</p>
            </div>
            <div className='col-span-1 flex items-center flex-col justify-evenly shadow-3xl absolute animate-icon-bounce-3 rounded-md mt-[-26vw] ml-[26vw] bg-gray bg-opacity-20 h-[10vw] w-[10vw]'>
              <img className='' width={60} src={typescriptLogo}></img>
              <p className='text-xl'>TypeScript</p>
            </div>
            <div className='col-span-1 flex items-center flex-col justify-evenly shadow-3xl absolute animate-icon-bounce-3 rounded-md mt-[-22vw] ml-[3vw] bg-gray bg-opacity-20 h-[10vw] w-[10vw]'>
              <img className='' width={60} src={graphqlLogo}></img>
              <p className='text-xl'>GraphQl</p>
            </div>
            <div className='col-span-1 flex items-center flex-col justify-evenly shadow-3xl absolute animate-icon-bounce-1 rounded-md mt-[-20vw] ml-[-20vw] bg-gray bg-opacity-20 h-[10vw] w-[10vw]'>
              <img className='' width={60} src={reactLogo}></img>
              <p className='text-xl'>React</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TechnologiesPage
