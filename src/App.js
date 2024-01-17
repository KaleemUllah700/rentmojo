import { BrowserRouter, Routes, Route} from "react-router-dom"
import Homepage from "./components/homepage"
import Cart from "./components/cart"
import ProductDetails from "./components/product-details"

const App = ()=>{
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product-details" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
