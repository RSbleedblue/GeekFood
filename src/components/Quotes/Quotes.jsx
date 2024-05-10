import QuotesCard from "../sub-components/QuotesCard";
import QuotesData from "../../utils/QuotesData";
import { FaCaretLeft } from "react-icons/fa";
import { FaCaretRight } from "react-icons/fa";
import {useState} from 'react';
const Quotes = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const quotesPerPage = 10;
    const lastIndex = currentPage * quotesPerPage;
    const firstIndex = lastIndex - quotesPerPage;
    const quotes = QuotesData.slice(firstIndex,lastIndex);
    const nPages = Math.ceil(QuotesData.length / quotesPerPage);
    const numbers = [...Array(nPages + 1).keys()].slice(1)
    const startPage = Math.max(currentPage - 2, 1);
    const endPage = Math.min(startPage + 4, nPages);
    const prevQuotePage = () => {
        if(currentPage !== firstIndex){
            setCurrentPage(currentPage-1);
        }
    }
    const nextQuotePage = () => {
        if(currentPage !== lastIndex){
            setCurrentPage(currentPage + 1);
        }
    }
    const getPageQuote = (idx) => {
        setCurrentPage(idx)
    }
    return (
        <>
            <div className="text-black w-full p-2 gap-4 mt-[6%]  items-center justify-center flex flex-col">
                <h1 className="text-[30px]"> Quotes</h1>
                {
                    quotes.map(each => (
                        <QuotesCard key={each.from} Quotes={each.text} Author={each.from}/>
                    ))
                }
            </div>
            <div className="p-4 flex gap-2 items-center justify-between ">
                <FaCaretLeft className="text-sky-600 text-[40px] rounded-lg hover:bg-sky-600 p-1 hover:text-white transition-all ease-in delay-50" onClick={prevQuotePage}/>
                {
                    numbers.slice(startPage - 1, endPage).map((ele, idx) => (
                        <p key={idx} className={`hover:bg-sky-600 p-1 hover:text-white transition-all ease-in delay-50 cursor-pointer rounded-full ${currentPage === ele ? 'bg-sky-600 text-white' : ''}`} onClick={() => getPageQuote(ele)}>{ele}</p>
                    ))
                }
                <FaCaretRight className="text-sky-600 text-[40px] rounded-lg hover:bg-sky-600 p-1 hover:text-white transition-all ease-in delay-50" onClick={nextQuotePage}/>
            </div>
        </>
    )
}
export default Quotes;