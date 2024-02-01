import 'font-awesome/css/font-awesome.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './components/cart'
import "animate.css"

const App = ()=>{
    return (
        <div>
               <BrowserRouter>
                <Routes>
                        <Route path='/cart' element={<Cart />} />
                </Routes>
               </BrowserRouter>
         </div>
    )
}

export default App