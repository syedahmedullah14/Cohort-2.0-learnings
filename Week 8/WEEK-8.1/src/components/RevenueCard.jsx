
export const RevenueCard = ({
    title,
    orderCount,
    amount
    
}) => {
    return <div className="bg-blue-100 rounded-md shadow-md p-4 m-10 hover:bg-blue-300" >
        <div className="flex">
            <div className="flex text-gray-900">
                {title}
            </div>
            <div className="flex ml-1 pt-1 flax justify-center flex-col-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            </div>
        </div>
        <div className="flex justify-between pt-2">
            <div className="font-semibold text-3xl">
                ${amount}
            </div>
            {orderCount ? <div className="flex cursor-pointer underline font-semibold flex flex-col justify-center"> 
            <div className="flex">           
            <div className="text-blue-700 font-bold text-1xl">{orderCount} order(s) </div>
            {<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 fill-blue-700">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
            }    
            </div>
            </div> :null} 
              
        </div>
        
    </div>
    
}