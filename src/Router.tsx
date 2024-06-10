import { Routes, Route} from 'react-router-dom'
import { Home } from './pages/home'
import { Shop } from './pages/shop'

export const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/shop' element={<Shop />}/>
        </Routes>
    )
}