import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <div className="welcome-page-wrapper">
        <h1 className="welcome-title">
          welcome HomePage. Let's learn RedWood!
        </h1>
      </div>
    </>
  )
}

export default HomePage
