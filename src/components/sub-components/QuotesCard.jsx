import { RiDoubleQuotesL } from "react-icons/ri";
const QuotesCard = ({Quotes,Author}) => {
    return (
        <>
        <div className="w-[50%] rounded-lg bg-white p-4 font-light text-black shadow-xl text-2xl text-justify flex flex-col gap-2">
                <RiDoubleQuotesL/>
                {Quotes}
            <p className="text-sm font-semibold text-gray-700">
                - {Author}
            </p>
        </div>
        </>
    )
}
export default QuotesCard;