import food from '../../assets/food.jpg';
const DemoPage = () => {
    return (
        <>
            <div className="flex w-[80%] justify-center gap-2">
                <div className='w-[60%] ml-10'>
                    <img src={food}/>
                </div>
                <div className='w-[60%] bg-gray-300 p-10'>
                    <div className='mt-[20%] flex flex-col gap-4'>    
                        <p className='text-4xl font-semibold'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        </p>
                        <p className='text-sm font-extralight'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore inventore soluta aut aliquam temporibus molestiae at saepe molestias. Id, reiciendis.
                        </p>
                        <button className='rounded-lg bg-blue-500 p-4 text-white w-[40%] hover:bg-blue-600'>Get in Touch</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default DemoPage;