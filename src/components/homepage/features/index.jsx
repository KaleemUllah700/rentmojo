const Features = ()=>{

const features = [
    {
        src:'images/packages.png',
        description: 'Packages'
    },
    {
        src:'images/furniture.png',
        description: 'Furnitures'
    },
    {
        src:'images/appliances.png',
        description: 'Appliances'
    },
    {
        src:'images/electronics.png',
        description: 'Electronics'
    },
    {
        src:'images/bikes.png',
        description: 'Bikes'
    },
    {
        src:'images/fitness.png',
        description: 'Fitness'
    },
    {
        src:'images/WFH-essentails.png',
        description: 'WFH Essentails'
    },
]

    return (
        <div className="bg-[white] h-[150px] mx-16 flex justify-center my-2">
            {
                features.map((feature, index)=>(
                    <buuton key={index} className="w-[150px] h-[100px] bg-[white] flex flex-col items-center py-4 my-6 mx-2 rounded-lg border hover:shadow-xl hover:font-xl">
                        <img src={feature.src} />
                        <span>{feature.description}</span>
                    </buuton>
                ))
            }
        </div>
    )
}

export default Features