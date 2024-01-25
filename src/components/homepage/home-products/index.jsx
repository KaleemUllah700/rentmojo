import Button from "../../shared/button"
const Homeproducts = ()=>{
    return (
        <div>
            <div className="bg-[white] h-[370px] mx-16 flex justify-center py-3">
                <div className="bg-[white] h-[335px] w-[250px] mx-3 flex justify-center py-2 rounded-lg shadow-lg">
                    <button className="flex flex-col gap-2">
                        <img src="images/product1.jpg" alt="product1" width={230} />
                        <h1 className="text-lg font-semibold">Perk 4-Seater Wooden...</h1>
                        <div className="flex justify-end">
                                <div className="flex items-center gap-1">
                                    <i className="fa fa-dollar"></i>
                                    <span>500/mo</span>
                                </div>
                                <div className="px-8">
                                    <Button size="small" color="danger" variant="outline">See More</Button>
                                </div>
                        </div>
                    </button>
                </div>
                <div className="bg-[white] h-[335px] w-[250px] mx-3 flex justify-center py-2 rounded-lg shadow-lg">
                    <button className="flex flex-col gap-2">
                        <img src="images/product1.jpg" alt="product1" width={230} />
                        <h1 className="text-lg font-semibold">Perk 4-Seater Wooden...</h1>
                        <div className="flex justify-end">
                                <div className="flex items-center gap-1">
                                    <i className="fa fa-dollar"></i>
                                    <span>500/mo</span>
                                </div>
                                <div className="px-8">
                                    <Button size="small" color="danger" variant="outline">See More</Button>
                                </div>
                        </div>
                    </button>
                </div>
                <div className="bg-[white] h-[335px] w-[250px] mx-3 flex justify-center py-2 rounded-lg shadow-lg">
                    <button className="flex flex-col gap-2">
                        <img src="images/product1.jpg" alt="product1" width={230} />
                        <h1 className="text-lg font-semibold">Perk 4-Seater Wooden...</h1>
                        <div className="flex justify-end">
                                <div className="flex items-center gap-1">
                                    <i className="fa fa-dollar"></i>
                                    <span>500/mo</span>
                                </div>
                                <div className="px-8">
                                    <Button size="small" color="danger" variant="outline">See More</Button>
                                </div>
                        </div>
                    </button>
                </div>
                <div className="bg-[white] h-[335px] w-[250px] mx-3 flex justify-center py-2 rounded-lg shadow-lg">
                    <button className="flex flex-col gap-2">
                        <img src="images/product1.jpg" alt="product1" width={230} />
                        <h1 className="text-lg font-semibold">Perk 4-Seater Wooden...</h1>
                        <div className="flex justify-end">
                                <div className="flex items-center gap-1">
                                    <i className="fa fa-dollar"></i>
                                    <span>500/mo</span>
                                </div>
                                <div className="px-8">
                                    <Button size="small" color="danger" variant="outline">See More</Button>
                                </div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Homeproducts