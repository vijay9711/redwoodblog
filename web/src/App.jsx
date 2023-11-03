import { ThemeUIProvider } from 'theme-ui'

import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import FatalErrorPage from 'src/pages/FatalErrorPage'
import { useState } from "react";
import Routes from 'src/Routes'
// import { theme } from 'src/theme'
import './index.css'
import NavBarLayout from './layouts/NavBarLayout/NavBarLayout'

const App = () => {
  const [darkMode, setDarkMode] = useState();
  const propThemeModeToApp = (event) => {
      setDarkMode(event);
  }
  // <ThemeUIProvider theme={theme}>
  return (
    <div className={darkMode ? "dark" : ""}>
      <FatalErrorBoundary page={FatalErrorPage}>
        <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
          <RedwoodApolloProvider>
            <NavBarLayout propThemeModeToApp={propThemeModeToApp} />
            {/* <div className='mt-[4.5rem]'> */}
              <Routes />
            {/* </div> */}
          </RedwoodApolloProvider>
        </RedwoodProvider>
      </FatalErrorBoundary>
    </div>
  )
  // </ThemeUIProvider>
  }

export default App
