export const TopMonth = (
    { desc, title,  other }
) => {
    return <div className="p-4 bg-white rounded-xl " >
        <div className="text-[#7D7D7D] font-semibold text-sm tracking-tightest" >
            {desc}
        </div>
        <div className="pt4 pr-4 mt-7" >
            <div className="font-semibold text-[#734A00] text-2xl">
                {title}
            </div>
            <div className="text-[#FFA500] text-base font-medium">
                {other}
            </div>
        </div>

        <div>

        </div>
    </div>
}
export const TopYear = (
    { desc, title, other }
) => {
    return <div className="p-4 bg-white rounded-xl " >
        <div className="text-[#7D7D7D] font-semibold text-sm tracking-tightest" >
            {desc}
        </div>
        <div className="pt4 pr-4 mt-8" >
            <div className="font-semibold text-[#734A00] text-2xl">
                {title}
            </div>
            <div className="text-sm text-[#454545] tracking-tight" >
                {other}
            </div>
        </div>

        <div>

        </div>
    </div>
}
export const TopBuyer = (
    { name, desc, company }
) => {
    return <div className="p-4 bg-white rounded-xl " >
        <div className="text-[#7D7D7D] font-semibold text-sm tracking-tightest" >
            {desc}
        </div>
        <div className="pt4 pr-4 " >
            <div className="py-2">
                <img className="w-9 h-9 rounded-full " src="./../Images/cont3.jpg" alt="" />
            </div>
            <div className="font-semibold text-black text-xs font-semibol tracking-tighter">
                {name}
            </div>
            <div className="text-[10px] font-normal tracking-tighter text-[#454545] tracking-tight" >
                {company}
            </div>
        </div>

        <div>

        </div>
    </div>
}