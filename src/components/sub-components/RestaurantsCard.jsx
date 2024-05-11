import { FaStar } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { ImSpoonKnife } from "react-icons/im";
import { FaShare } from "react-icons/fa";
const ResCard = ({title, address, postalCode, rating, foodType, share}) => {
    return (
        <>
            <div className="w-[28%] p-4 shadow-xl rounded-xl flex flex-col gap-4 justify-between hover:scale-105 transition-all cursor-pointer">
                <div className="w-full flex justify-between items-center">
                    <p className="text-xl font-semibold">{title}</p>
                    <div className="flex gap-2">
                        {
                            [...Array(5)].map((_,index) => (
                                <FaStar key={index} className={`text-${index < rating ? 'yellow' : 'gray'}-400 text-2xl `}/>
                            ))
                        }
                    </div>      
                </div>
                <div className="flex items-center gap-2 ">
                    <IoLocationSharp className="text-gray-500"/>
                    <p className="text-gray-500 text-sm">{address}</p>
                </div>
                <p className="text-gray-500 text-sm">
                    {postalCode}
                </p>
                <div  className="flex justify-between items-center gap-2  ">
                    <div className="flex gap-2">                        
                        <ImSpoonKnife className="text-green-400"/>
                        <p className="text-sm text-green-400">{foodType}</p>
                    </div>
                    <FaShare className="text-blue-400 hover:text-blue-600 cursor-pointer" href={share}/>
                </div>
            </div>
        </>
    )
}
export default ResCard;