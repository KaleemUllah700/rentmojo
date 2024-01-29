import Button from "../shared/button"
import Layout from "../shared/layout"
const Cart = ()=>{
    return (
            <Layout>
                <div className="flex flex-col items-center justify-center w-full h-[550px] bg-[white]">
                    <div className="w-[500px] h-[500px] bg-[white] flex flex-col items-center py-6 gap-6">
                        <img src="images/no-cart.png" width={220} height={300} />
                        <h1 className="text-3xl">No items in cart</h1>
                        <p className="text-center opacity-70">Add a few items to your cart and come back here for anexpress checkout process!</p>
                        <Button size="meduim" color="danger">Bowser catalogue</Button>
                    </div>
                </div>
            </Layout>
    )
}

export default Cart