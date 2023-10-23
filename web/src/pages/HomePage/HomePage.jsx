import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import './HomePAge.scss'
const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <div className="welcome-page-wrapper">
        <div className="row p-0 m-0 welcome-content">
          <h1 className="welcome-title col-4">
            Hello there,
            <p>create a vision that stays with you always!</p>
          </h1>
        </div>
      </div>
    </>
  )
}

export default HomePage
