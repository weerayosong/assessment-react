import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header className="w-full flex justify-end gap-6 px-10 py-6 border-b border-slate-300">
            <Link
                to="/"
                className="font-bold text-lg hover:text-slate-600 transition-colors"
            >
                Home
            </Link>
            <Link
                to="/owner"
                className="font-bold text-lg hover:text-slate-600 transition-colors"
            >
                Owner
            </Link>
        </header>
    )
}
