const Facilities = ()=>{
    return (
        <div>
            <div className="bg-[white] h-[70px] mx-16 flex flex-col my-2 text-xl">
                <h1 className="font-bold opacity-70">There's more</h1>
                <h1>to renting</h1>
                <hr className="my-2 w-[60px] text-black text-xl font-bold"  />
            </div>
            <div className="bg-[white] h-[462px] mx-16 my-2">
                <div className="flex items-center">
                    <div className="w-[370px] h-[230px] bg-[white]">
                        <img src="images/rent1.png" alt="rent1" />
                        <div className="flex flex-col gap-2">
                            <h1 className="text-xl font-semibold opacity-70">Finest-quality products</h1>
                            <p className="text-sm opacity-70">Quality matters to you, and us! That's why we do a strict quality-check for every product.</p>
                        </div>
                    </div>
                    <div className="w-[370px] h-[230px] bg-[white]">
                        <img src="images/rent2.png" alt="rent2" />
                        <div className="flex flex-col gap-2">
                            <h1 className="text-xl font-semibold opacity-70">Free relocation</h1>
                            <p className="text-sm opacity-70">Changing your house or even your city? We'll relocate your rented products for free.</p>
                        </div>
                    </div>
                    <div className="w-[370px] h-[230px] bg-[white]">
                        <img src="images/rent3.png" alt="rent3" />
                        <div className="flex flex-col gap-2">
                            <h1 className="text-xl font-semibold opacity-70">Free maintenance</h1>
                            <p className="text-sm opacity-70">Keeping your rented products in a spick and span condition is on us, so you can sit back and relax.</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="w-[370px] h-[230px] bg-[white]">
                        <img src="images/rent4.png" alt="rent4" />
                        <div className="flex flex-col gap-2">
                            <h1 className="text-xl font-semibold opacity-70">Cancel anytime</h1>
                            <p className="text-sm opacity-70">Pay only for the time you use the product and close your subscription without any hassle.</p>
                        </div>
                    </div>
                    <div className="w-[370px] h-[230px] bg-[white]">
                        <img src="images/rent5.png" alt="rent5" />
                        <div className="flex flex-col gap-2">
                            <h1 className="text-xl font-semibold opacity-70">Easy return on delivery</h1>
                            <p className="text-sm opacity-70">If you don't like the product on delivery, you can return it right away—no questions asked.</p>
                        </div>
                    </div>
                    <div className="w-[370px] h-[230px] bg-[white]">
                        <img src="images/rent6.png" alt="rent6" />
                        <div className="flex flex-col gap-2">
                            <h1 className="text-xl font-semibold opacity-70">Keep upgrading</h1>
                            <p className="text-sm opacity-70">Bored of the same product? Upgrade to try another, newer design and enjoy the change!</p>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    )
}

export default Facilities