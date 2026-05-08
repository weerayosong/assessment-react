import { Outlet } from 'react-router-dom'
import Header from './Header'

export default function MainLayout() {
    return (
        <div className="container mx-auto min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 flex flex-col items-center pt-24">
                <Outlet />
            </main>
        </div>
    )
}
