import { RiDoubleQuotesL } from "react-icons/ri";
import Cards from "./Cards";
const Comments = () => {
    return (
        <>
            <div className="flex flex-wrap w-[70%] gap-10 mt-[10%] items-center justify-center mb-10 ">
            <RiDoubleQuotesL className='text-4xl'/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
            </div>
        </>
    )
}
export default Comments;