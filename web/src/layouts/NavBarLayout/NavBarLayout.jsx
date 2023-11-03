import { Menu } from '../menu';
import ThemeButton from "src/components/ThemeButton";
const NavBarLayout = ({ children, propThemeModeToApp }) => {
  return <>
    <div className='fixed z-40'>
      <nav class="bg-white dark:bg-gray-dark fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div class="max-w-screen-2xl px-3 flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://redwoodjs.com/" class="flex items-center">
            <img src="https://redwoodjs.com/images/diecut.svg" class="h-8 mr-3" alt="Flowbite Logo" />
            <span class="self-center text-2xl text-gray-dark font-semibold whitespace-nowrap dark:text-white">Vj's RedWoodjs</span>
          </a>
          <div class="flex md:order-2">
            <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
          <div className="hidden bg-white w-full ml-auto md:block md:w-auto dark:bg-gray-dark " id="navbar-default">
            <ul className="font-medium flex flex-col p-4 mb-0 dark:bg-gray-dark dark:text-white md:p-0 mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {Menu.items.map(item => {
                return (
                  <li key={item.id} className='flex justify-center items-center'>
                    <a key={item.id} href={item.path} className="block py-2 pl-3 pr-4 text-gray-dark bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">{item.name}</a>
                  </li>
                )
              })}
              <li><ThemeButton setModeToNav={(event) => { propThemeModeToApp(event) }} /></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>

  </>
}

export default NavBarLayout
