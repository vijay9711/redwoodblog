// import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import './HomePAge.scss'
const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <div className="welcome-page-wrapper dark:bg-gray-dark">
        <div className="row p-0 m-0 welcome-content bg-black">
          <h1 className="dark:text-white">
            Hello there,
            <p>create a vision that stays with you always!</p>
          </h1>
        </div>
        <div className="bg-white dark:bg-gray-800">
          <h1 className="text-gray-900 dark:text-white">Dark mode</h1>
          <p className="text-gray-600 dark:text-red">
            Lorem ipsum...
          </p>
        </div>
      </div>
    </>
  )
}

export default HomePage
