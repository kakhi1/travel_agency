import { MdFlight } from 'react-icons/Md';
import {IoBedSharp} from 'react-icons/io5';
import Logo from '../assets/Logo.png';
const Header = () => {
  return (
    <div className="w-full h-[90px] flex flex-row justify-between items-center mx-2" > 
      <div className="flex flex-row  gap-4"> 
        <div className='flex flex-row gap-2 items-center'><MdFlight className='rotate-90 '/><button className='font-semibold text-sm'> Find Flight</button></div>
        <div className='flex flex-row gap-2 items-center'><IoBedSharp/><button className='font-semibold text-sm'>Find Stays</button></div>
      </div>
      <div><img src={Logo} alt="logo" /></div>
      <div className='mr-4'> 
        <button className='font-semibold text-sm'>Login</button>
        <button className='bg-red-500 w-24 h-12 rounded-md ml-2 font-semibold text-sm text-white' > Sign up</button>
      </div>
    </div>
  )
}

export default Header