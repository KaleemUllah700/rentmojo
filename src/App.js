import Layout from './components/shared/layout'
import 'font-awesome/css/font-awesome.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './components/cart'
const App = ()=>{
    return (
        <div>
               <BrowserRouter>
                <Routes>
                    <Layout>
                        <Route path='/cart' element={<Cart />} />
                    </Layout>
                </Routes>
               </BrowserRouter>
         </div>
    )
}

export default App