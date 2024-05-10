import commentPic from '../../assets/comment.jpg'
const Cards = () => {
    return (
        <>
            <div className="w-[20%] rounded-lg flex flex-col p-3 shadow-2xl ">
                    <div className='flex items-center gap-2'>    
                        <div className='w-12 h-12 rounded-full overflow-hidden shadow-2xl'>
                            <img src={commentPic} alt='pic' className='w-full h-full object-cover' />
                        </div>
                        <p className='text-gray-500 font-semibold'>
                            Hannah James
                        </p>
                    </div>
                    <div className='ml-10'>
                         <p className='text-sm font-extralight '>        
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sint perspiciatis deleniti reiciendis! Eaque vel pariatur consectetur nemo voluptatum recusandae?
                        </p>
                    </div>
            </div>
        </>
    )
}
export default Cards;