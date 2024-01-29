const Feedback = ()=>{

const feedbacks = [
    {
        img: 'images/mojostore1.jpg',
        heading: 'Akshayanagar MojoStore',
        description: 'First Floor of # 35, Viva Corner, DLF new township road, Nyanapanahalli, Begur Hobli...',
        ratingtext: 'Rating 4.8'
    },
    {
        img: 'images/mojostore2.jpg',
        heading: 'BTM Stage-2 MojoStore',
        description: '952, 16th Main, BTM 2nd Stage Bangalore -560076 (Next to ICICI Bank)...',
        ratingtext: 'Rating 4.8'
    },
    {
        img: 'images/mojostore3.jpg',
        heading: 'J.P.Nagar Phase 7 MojoStore',
        description: 'Basement Floor, Site No.13, TJ Towers, 80 Feet Road, Wilson Garden Society, Kothanur...',
        ratingtext: 'Rating 4.9'
    }
]
    return (
        <div>
            <div className="bg-[white] h-[70px] mx-16 flex flex-col my-2 text-xl">
                <h1 className="font-bold opacity-70">There's more</h1>
                <h1>to renting</h1>
                <hr className="my-2 w-[60px] text-black text-xl font-bold"  />
            </div>
            <div className="bg-[white] h-[420px] mx-16 p-2 flex justify-center gap-4">
                {
                    feedbacks.map((feedback, index)=>(
                        <div className="w-[360px] h-[410px] bg-[white] rounded-xl shadow-xl" key={index}>
                            <button>
                                <img src={feedback.img} alt="mojostore1" width={360} className="rounded-lg" />
                                <div className="flex flex-col gap-1 px-[2px] py-2">
                                <h1 className="text-2xl font-semibold text-left">{feedback.heading}</h1>
                                <p className="text-sm font-semibold opacity-70 text-left">{feedback.description}</p>
                                <div className="flex items-center gap-px">
                                        <h3 className="font-semibold text-lg">{feedback.ratingtext}</h3>
                                    <div className="flex items-center px-2 text-lg text-[orange]">
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                    </div>
                                </div>
                                </div>
                            </button>
                        </div>
                    ))
                }
            </div>
            <div className="flex items-center justify-center gap-2 py-16 text-[blue] text-lg">
                <button className="font-bold">VIEW YOUR NEAREST STORE</button>
                <i className="fa fa-arrow-right"></i>
            </div>
        </div>
    )
}

export default Feedback