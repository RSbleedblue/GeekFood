import geekLogo from '../assets/logo.png';
const NavBar = () => {
    return (
        <>
            <div className="w-[100%] bg-white  flex justify-center shadow-lg navbar">
                <div className="flex w-[80%] mt-2  items-center justify-between " >
                    <div className='w-20 h-20 flex items-center'>
                        <img src={geekLogo} alt="Logo" />
                        <p className='text-2xl font-semibold text-blue-400 hover:cursor-pointer hover:text-blue-600'>GeekFood</p>
                    </div>
                    <div className='flex text-stone-600 gap-10 font-semibold text-l '>
                        <p className='hover:text-blue-400 hover:cursor-pointer' >Home</p>
                        <p className='hover:text-blue-400 hover:cursor-pointer'>Quote</p>
                        <p className='hover:text-blue-400 hover:cursor-pointer'>Restaurants</p>
                        <p className='hover:text-blue-400 hover:cursor-pointer'>Foods</p>
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