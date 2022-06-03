import Home from './components/Home';
import Navbar from './components/Navbar';
import ProductDeatils from './components/ProductDeatils';
import AllProducts from './components/AllProducts';
import Error from './components/Error';
import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/products/*' element={<AllProducts/>}>
        <Route path=':id' element={<ProductDeatils/>}></Route>{" "}
        </Route>
        <Route path='error' element={<Error/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
