import { ContactCard } from "./contactCard"

export const CustomerCard = () => {
    return <div className="py-6 bg-white mt-3 rounded-xl">
        <div className="flex justify-between px-6" >
            <div className="text-xl font-semibold leading-10 tracking-tight " >Customers</div>
            <div className="flex items-center" >
                <div className="text-gray-500 pr-1 text-[14px]" >Sort by <span className="font-medium" >Newest</span></div>
                <div>
                    <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.5 0.861633L4 4.36163L7.5 0.861633" stroke="#7D7D7D" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                </div>
            </div>
        </div>
        <div>
            <ContactCard imgAdd={<img className="w-9 h-9 rounded-full " src="./../Images/cont4.jpg" alt="" />} name={'Chris Friedkly'} company={"Supermarket Villanova"} isActive={false}></ContactCard>
            <ContactCard imgAdd={<img className="w-9 h-9 rounded-full " src="./../Images/cont3.jpg" alt="" />} name={'Maggie Johnson'} company={"Oasis Organic Inc."} isActive={true} ></ContactCard>
            <ContactCard imgAdd={<img className="w-9 h-9 rounded-full " src="./../Images/cont2.jpg" alt="" />} name={'Gael Harry'} company={"New York Finest Fruits"} isActive={false} ></ContactCard>
            <ContactCard imgAdd={<img className="w-9 h-9 rounded-full " src="./../Images/cont1.jpg" alt="" />} name={'Jenna Sullivan'} company={"Walmart"} isActive={false} ></ContactCard>
        </div>
        <div className="pt-6 ml-6 font-normal text-sm tracking-tight flex items-center">
            <div className="text-[#734A00]" >All customers</div>
            <div>
                <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.91666 7.11162H11.0833M11.0833 7.11162L8.75 9.44496M11.0833 7.11162L8.75 4.77829" stroke="#734A00" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
        </div>

    </div>
}