import { useEffect, useState } from 'react'
import burgerMenu from '../assets/images/icon-menu.svg'
import closeBtn from '../assets/images/icon-menu-close.svg'
import { getCategories } from '../helpers/getCategories';
import { Link } from 'react-router-dom';

export const Navbar = () => {

  const [categories, setCategories ] = useState([])
  
  const getInitialCategories = async() => {
    const newCategories = await getCategories();
    setCategories(newCategories);
  }
  useEffect(() => {
    getInitialCategories();
  },[])

  const [menuClicked, setMenuClicked] = useState(true)

  const handleClick = () => {
    setMenuClicked(prevState => !prevState)
  }

  return (
    <>
      <ul className={`${menuClicked ? 'hidden' : ''} absolute bg-white top-0 right-0 w-[256px] p-[24px] h-full text-[18px] sm:flex sm:items-center sm:w-[438px] sm:place-content-around sm:p-0 sm:h-auto sm:relative sm:text-[16px]`}>
        <li className={`${menuClicked ? 'hidden' : ''} cursor-pointer sm:hidden  flex place-content-end`}>
          <img className='w-8 h-8 mb-[87px]' src={closeBtn} onClick={handleClick} alt="" />
        </li>
        <li className='mb-8 sm:mb-0'>
          <Link className='hover:text-SoftRed sm:text-4' to="/">
            Home
          </Link>
        </li>
        {
          categories.map(category => (
            <li className='mb-8 sm:mb-0' key={category.id}>
              <a className='hover:text-SoftRed' href="#">{category.name}</a>
          </li>
          ))
        }
        <li className='mb-8 sm:mb-0'>
          <Link className='hover:text-SoftRed sm:text-4' to="/create">
            Create
          </Link>
        </li>
      </ul>
      <img className={`${menuClicked ? '' : 'hidden'} w-10 h-4 cursor-pointer sm:hidden`} src={burgerMenu} onClick={handleClick} alt="" />
  
    </>
  )
}
