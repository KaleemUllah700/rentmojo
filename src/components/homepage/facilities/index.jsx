const Facilities = ()=>{

const facilities = [
    {
        img : 'images/rent1.png',
        heading: 'Finest-quality products',
        description: 'Quality matters to you, and us! Thats why we do a strict quality-check for every product.'
    },
    {
        img : 'images/rent2.png',
        heading: 'Free relocation',
        description: 'Changing your house or even your city? Well relocate your rented products for free.'
    },
    {
        img : 'images/rent3.png',
        heading: 'Free maintenance',
        description: 'Keeping your rented products in a spick and span condition is on us, so you can sit back and relax.'
    }
]
    return (
        <div>
            <div className="bg-[white] h-[70px] mx-16 flex flex-col my-2 text-xl">
                <h1 className="font-bold opacity-70">There's more</h1>
                <h1>to renting</h1>
                <hr className="my-2 w-[60px] text-black text-xl font-bold"  />
            </div>
            <div className="bg-[white] h-[270px] mx-16 my-2 flex py-4">
                {
                    facilities.map((facility, index)=>(
                            <div className="w-[370px] h-[230px] bg-[white] flex flex-col mx-2" key={index}>
                                <img src={facility.img} alt="rent1" width={50} height={50} />
                                <div className="flex flex-col gap-2">
                                    <h1 className="text-xl font-semibold opacity-70">{facility.heading}</h1>
                                    <p className="text-sm opacity-70">{facility.description}</p>
                                </div>
                            </div>
                    ))
                }  
            </div>
        </div>
    )
}

export default Facilities