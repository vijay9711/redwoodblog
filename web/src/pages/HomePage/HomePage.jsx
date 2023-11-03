// import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import RWlogo from 'src/assets/redwoodjs-logo-card/diecut_mark.png';
import './HomePAge.scss';
import TechnologiesPage from './TechnologiesPage';

const HomePage = () => {
  let techRef = null;
  const scrollDown = () => {
    techRef = document.getElementById('technologies');
    techRef.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <div className="dark:bg-gray-dark w-screen h-screen">
        <div className="grid grid-cols-3 grid-rows-1 p-0 my-0 w-screen bg-black h-screen">
          <div className="col-span-2 flex justify-center items-center">
            <div className="p-10 m-auto">
              <h1 className="flex dark:text-white text-5xl">
                Hello there,
              </h1>
              <p className='m-0 dark:text-white text-5xl'>create a <span className='text-red font-bold text-8xl hover:subpixel-antialiased'> vision </span> that stays with you always!</p>
            </div>
          </div>
          <div className="col-span-1 p-5 flex justify-center items-center">
            <img className='animate-logo-bounce z-0' width="500" src={RWlogo} />
          </div>
          {/* <button onClick={scrollDown}>down</button> */}
          <div onClick={scrollDown} className='col-span-3 scroll-down mt-[-20vh]'>
              <div className="container">
                <div className="chevron"></div>
                <div className="chevron"></div>
                <div className="chevron"></div>
              </div>
            </div>
          </div>

      </div>
      <TechnologiesPage />
    </>
  )
}

export default HomePage
