import { Routes, Route} from 'react-router-dom'
import { Home } from './pages/home'
import { Shop } from './pages/shop'
import { Lookbook } from './pages/lookbook'
import { About } from './pages/about'
import { Contact } from './pages/contact'
import { Login } from './pages/login'

export const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/shop' element={<Shop />}/>
            <Route path='/lookbook' element={<Lookbook />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/contact' element={<Contact />}/>
            <Route path='/login' element={<Login />}/>
        </Routes>
    )
}