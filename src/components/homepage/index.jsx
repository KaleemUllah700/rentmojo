import Layout from "../shared/layout"
import Facilities from "./facilities"
import Features from "./features"
import Feedback from "./feedback"
import Hero from "./here"
import Homeproducts from "./home-products"

const Homepage = ()=>{
    return (
        <Layout>
            <Hero />
            <Features />
            <Homeproducts />
            <Facilities />
            <Feedback />
        </Layout>
    ) 
}

export default Homepage