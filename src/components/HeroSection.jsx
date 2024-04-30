import heroSection from '../assets/heroSection.jpg'
import dogButtler from '../assets/dogButtler.png'
const HeroSection = () => {
    return (
        <>
            <div className='w-full  flex'>
                <div className=' flex flex-col gap-2 ml-[10%] mt-[15%] w-[60%]'>
                    <p className='text-[60px] font-semibold'>
                        Let us find your
                    </p>
                    <p className='text-[70px] font-bold text-blue-500 -mt-8'>
                        Favorite Food.
                    </p>
                    <div className='flex gap-4'>
                        <button className='bg-blue-500 rounded-lg p-4 text-white hover:bg-blue-600'>
                            Search Now
                        </button>
                        <button className='bg-white rounded-lg border border-solid border-blue-500 text-blue-500 p-4 hover:bg-gray-100'>
                            Know More
                        </button>
                    </div>
                </div>
                <div className='mt-10'>
                    <img src={dogButtler} alt="dog" />
                </div>
                
            </div>
        </>
    )
};
export default HeroSection;
