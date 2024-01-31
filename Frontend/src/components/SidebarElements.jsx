export const SidebarElemensts = ({ svg, name }) => {
    return <div className="flex px-3 py-1.5 items-center gap-3  cursor-default " >
                <div className="blue-500" >
                    {svg}
                </div>
                <div className="text-sm leading-[14px] font-normal tracking-tight" >{name}</div>
            </div>

}