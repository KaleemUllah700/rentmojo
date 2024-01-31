import Layout from './components/shared/layout'
import 'font-awesome/css/font-awesome.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './components/homepage'
import "animate.css"
const App = ()=>{
    return (
        <div>
               <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Homepage />} />
                </Routes>
               </BrowserRouter>
         </div>
    )
}

export default App