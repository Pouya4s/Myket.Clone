import React from "react"
import NumberToPersianWord from "number_to_persian_word";

function State(props){
    return(
        <div className="status flex-1 text-center">
            <h3 className="text-[44px] text-[#07f] font-bold">{NumberToPersianWord.convertEnToPe(props.number)}</h3>
            <p className="text-[19px] mt-4 ">{props.text}</p>
        </div>
    )
}
export default State