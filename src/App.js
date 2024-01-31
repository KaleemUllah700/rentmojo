import Layout from './components/shared/layout'
import 'font-awesome/css/font-awesome.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "animate.css"
const App = ()=>{
    return (
        <div>
               <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout />} />
                </Routes>
               </BrowserRouter>
         </div>
    )
}

export default App