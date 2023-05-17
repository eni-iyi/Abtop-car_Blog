import {Route, Routes} from 'react-router-dom';
import Home from './Screen/Home'
import Blog from './Screen/Blog'
import Store from './Screen/Store'
import Layout from './Component/Layout/Layout'
import Cart from './Component/Cart/Cart';
import Login from './Screen/Checkout/Login';
import Register from './Screen/Register';

const Router = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={
                <Layout>
                    <Home />
                </Layout>
            }
            />
               <Route path="/login" element={
                <Layout>
                    <Login />
                </Layout>
            }
            />
               <Route path="/register" element={
                <Layout>
                    <Register />
                </Layout>
            }
            />
            <Route path="/blog"element={
                <Layout>
                    <Blog/>
                </Layout>
            }
            />
            <Route path="/store" element={
                <Layout>
                    <Store />
                </Layout>
            }
            />
             <Route path="/Cart" element={
                <Layout>
                    <Cart />
                </Layout>
            }
            />

            {/* <Route path="*" element={<Navigate to="/not-found"/>} /> */}
        </Routes>
    </div>
  )
}

export default Router