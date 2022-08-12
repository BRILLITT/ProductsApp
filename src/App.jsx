import { HashRouter, Routes, Route } from 'react-router-dom'
import {Home, Purchases, Login, ProductsDetail} from './pages'
import "./App.css";

function App(){

return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="products/:id" element={<ProductsDetail/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/purchases" element={<Purchases/>}/>
            </Routes>
        </HashRouter>
    );
};


 export default App;