import './App.css';
import Nav from './components/Nav'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Footer from './components/Footer'
import  Signup from './components/signup'
import PrivateCmp from './components/PrivateCmp'; //to make private components
import Login from './components/Login';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';
import UpdateProduct from './components/UpdateProduct';
import Profile from './components/Profile';
import EditProfile from './components/EditProfile';
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <Routes>

        <Route element={<PrivateCmp />}>
        <Route path="/" element={<ProductList />}/>
        <Route path="/add" element={<AddProduct />}/>
        <Route path="/update/:id" element={<UpdateProduct />}/>
        <Route path="/logout" element={<h1>logout Components</h1>}/>
        <Route path="/profile/:id" element={<Profile />}/>
        <Route path="/editProfile" element={<EditProfile />}/>
        </Route>

        <Route path="/signup" element={<Signup />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
     </BrowserRouter>
     <Footer />
    </div>
  );
}

export default App;
