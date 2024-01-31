export const ChatsCard = () => {
    return <div className="p-6 bg-white mt-3 pb-24 rounded-xl">
        <div className="" >
            <div className="text-xl font-semibold leading-10 tracking-tight " >Chats</div>
        </div>
        <div className=" text-sm rounded-lg" >2 unread messages</div>
        <div className="flex gap-3 mt-9" >
            <div className="relative p-3 bg-[#FFF7E8] rounded-xl ">
                <img className=" w-8 h-8 rounded-full " src="./../Images/cont3.jpg" alt="" />
                <span className="top-3  left-9 absolute  w-2 h-2 bg-[#EB5050] border-2 border-[#FFF7E8] rounded-full"></span>
            </div>
            <div className="relative p-3 bg-[#FFF7E8] rounded-xl" >
                <img className="w-8 h-8 rounded-full " src="./../Images/chat2.jpg" alt="" />
                <span className="top-3  left-9 absolute  w-2 h-2 bg-[#EB5050] border-2 border-[#FFF7E8] rounded-full"></span>
            </div>
            <div className="p-3" >
                <img className="w-8 h-8 rounded-full " src="./../Images/chat3.jpg" alt="" />
            </div>
            <div className="p-3" >
                <img className="w-8 h-8 rounded-full " src="./../Images/chat4.jpg" alt="" />
            </div>
        </div>
    </div>
}