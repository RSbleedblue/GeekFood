import geekLogo from '../assets/logo.png';
const Footer = () => {
    return (
        <div className="w-full p-4 bg-blue-400 flex flex-col items-center justify-center  ">
            <div className='flex items-center justify-center'>   
               <img src={geekLogo} alt='logo' className='w-[15%] h-[15%]'/>
               <p className='text-[40px] font-semibold -ml-8 text-white'>GeekFood</p>
            </div>
            <div className='w-[40%] text-white font-extralight text-sm text-center'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quis voluptas, repellendus reiciendis distinctio eveniet quam totam possimus asperiores nesciunt?
            </div>
            <div className='flex text-white gap-10 font-semibold text-l mt-10 mb-10'>
                        <p className='hover:text-stone-100 hover:cursor-pointer' >About</p>
                        <p className='hover:text-stone-100 hover:cursor-pointer'>Careers</p>
                        <p className='hover:text-stone-100 hover:cursor-pointer'>Explore</p>
                        <p className='hover:text-stone-100 hover:cursor-pointer'>Projects</p>
                        <p className='hover:text-stone-100 hover:cursor-pointer'>Blogs</p>
            </div>
            <div className='text-white font-sm'>
                GeekFood Pvt. Ltd. 2024.
            </div>
        </div>
    )
}
export default Footer;