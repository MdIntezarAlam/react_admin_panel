import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar'
import './App.css';
import Homepage from './Pages/Homepage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserList from './Pages/UserList/UserList'
import User from './Pages/UserPage/User';
import Newuser from './Pages/Newuser/Newuser';
import ProductList from './Pages/ProductList/ProductList';
import Product from './Pages/Product/Product';
import NewProduct from './Pages/NewProduct/NewProduct';


const App = () => {
    return (
        <Router>
            <Topbar />
            <div className="container">
                <Sidebar />
                <Routes>
                    <Route path='/' element={<Homepage />}> </Route>
                    <Route path='/users' element={<UserList />}> </Route>
                    <Route path='/user/:userId' element={<User />}> </Route>
                    <Route path='/newUser' element={<Newuser />}> </Route>
                    <Route path='/products' element={<ProductList />}> </Route>
                    <Route path='/product/:productId' element={<Product />}> </Route>
                    <Route path='/newproduct' element={<NewProduct />}> </Route>
                </Routes>
            </div>
        </Router>
    )
}
export default App; 