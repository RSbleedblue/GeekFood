import geekLogo from '../assets/logo.png';
import { Link } from 'react-router-dom';
const NavBar = () => {
    return (
        <>
            <div className="w-[100%] bg-white  flex justify-center shadow-lg navbar">
                <div className="flex w-[80%] mt-2  items-center justify-between " >
                    <div className='w-20 h-20 flex items-center'>
                        <img src={geekLogo} alt="Logo" />
                        <Link to="/"  className='text-2xl font-semibold text-blue-400 hover:cursor-pointer hover:text-blue-600'>GeekFood</Link>
                    </div>
                    <div className='flex text-stone-600 gap-10 font-semibold text-l '>
                        <Link to = "/" className='hover:text-blue-400 hover:cursor-pointer' >Home</Link>
                        <Link to = "/quote" className='hover:text-blue-400 hover:cursor-pointer'>Quote</Link>
                        <Link to = "/restaurants" className='hover:text-blue-400 hover:cursor-pointer'>Restaurants</Link>
                        <Link to = "/foods" className='hover:text-blue-400 hover:cursor-pointer'>Foods</Link>
                        <p className='hover:text-blue-400 hover:cursor-pointer'>Contact</p>
                    </div>
                    <div>
                        <button className='bg-blue-400 rounded-lg p-2 text-white hover:bg-transparent  hover: border hover:border-solid hover:border-blue-500 hover:text-blue-400'>Login</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default NavBar;