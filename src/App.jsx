import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './components/MainLayout'
import Home from './pages/Home'
import Owner from './pages/Owner'
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index={true} path="/" element={<Home />} />
                    <Route path="owner" element={<Owner />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
