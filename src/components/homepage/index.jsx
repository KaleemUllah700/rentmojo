import Layout from "../shared/layout"
import Features from "./features"
import Hero from "./here"
import Homeproducts from "./home-products"
const Homepage = ()=>{
    return (
        <Layout>
            <Hero />
            <Features />
            <Homeproducts />
        </Layout>
    ) 
}

export default Homepage