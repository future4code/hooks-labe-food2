import { BrowserRouter, Routes, Route } from "react-router-dom"
import AddressEdit from "../screens/AddressEdit"
import Cart from "../screens/Cart"
import Confirm from "../screens/Confirm"
import Feed from "../screens/Feed"
import HomePage from "../screens/HomePage"
import Login from "../screens/Login"
import Order from "../screens/Order"
import Profile from "../screens/Profile"
import ProfileEdit from "../screens/ProfileEdit"
import RegisterAddress from "../screens/RegisterAddress"
import Restaurant from "../screens/Restaurant"
import Search from "../screens/Search"
import SignUp from "../screens/SignUp"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="/adress" element={<AddressEdit />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/confirm" element={<Confirm />} />
                <Route path="/feed" element={<Feed />} />
                <Route path="/login" element={<Login />} />
                <Route path="/order" element={<Order />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/profileedit" element={<ProfileEdit />} />
                <Route path="/registeredit" element={<RegisterAddress />} />
                <Route path="/restaurante" element={<Restaurant />} />
                <Route path="/search" element={<Search />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router