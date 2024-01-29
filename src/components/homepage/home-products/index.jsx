import Button from "../../shared/button"

const homeproducts = [
    {
        img: 'images/product1.jpg',
        heading: 'Perk 4-Seater Wooden...',
        icon: 'fa fa-dollar',
        price: '500/mo'
    },
    {
        img: 'images/product2.jpg',
        heading: 'Stowy 2-Door Wardrobe...',
        icon: 'fa fa-dollar',
        price: '500/mo'
    },
    {
        img: 'images/product3.jpg',
        heading: 'Minion Beside Table...',
        icon: 'fa fa-dollar',
        price: '500/mo'
    },
    {
        img: 'images/product4.jpg',
        heading: 'Betty Dresser with Stool...',
        icon: 'fa fa-dollar',
        price: '500/mo'
    }
]
const Homeproducts = ()=>{
    return (
        <div>
            <div className="bg-[white] h-[370px] mx-16 flex justify-center py-3">
            {
                homeproducts.map((homeproduct, index)=>(
                        <div className="bg-[white] h-[335px] w-[250px] mx-3 flex justify-center py-2 rounded-lg shadow-lg" key={index}>
                            <button className="flex flex-col gap-2">
                                <img src={homeproduct.img} alt="product1" width={230} />
                                <h1 className="text-lg font-semibold">{homeproduct.heading}</h1>
                                <div className="flex justify-end">
                                        <div className="flex items-center gap-1">
                                            <i className={homeproduct.icon}></i>
                                            <span>{homeproduct.price}</span>
                                        </div>
                                        <div className="px-8">
                                            <Button size="small" color="danger" variant="outline">See More</Button>
                                        </div>
                                </div>
                            </button>
                        </div> 
                ))
            }
             </div>
        </div>
    )
}

export default Homeproducts