import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './components/MainLayout'
import Home from './pages/Home'
import Owner from './pages/Owner'
import User from './pages/User'
import Admin from './pages/Admin'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index={true} path="/" element={<Home />} />
                    <Route path="owner" element={<Owner />} />
                    <Route path="user" element={<User />} />
                    <Route path="admin" element={<Admin />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
