

export const PercentCard = ({
    title,
    num,
    desc,
    followLink,
    isIcon,
    isSVG
}) => {
    return <div className='font-interF bg-white rounded-lg abv p-4' >
        <div className="text-xl font-semibold leading-10 tracking-tight pb-4" >{title}</div>
        <div className="flex text-5xl font-medium items-center">
            <div className="pr-4">{num}%</div>
            {isIcon ? <div>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.6667 1.33334L1.33334 14.6667M14.6667 1.33334H2.66667M14.6667 1.33334V13.3333" stroke="#25CD25" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div> : null }
            
        </div>
        <div className="text-sm font-normal tracking-tight text-[#454545] ">{desc}</div>
        <div className="pt-14 font-normal text-sm tracking-tight flex items-center">
            <div className="text-[#734A00]" >{followLink}</div>
            <div>
                <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.91666 7.11162H11.0833M11.0833 7.11162L8.75 9.44496M11.0833 7.11162L8.75 4.77829" stroke="#734A00" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
        </div>

    </div>
}

