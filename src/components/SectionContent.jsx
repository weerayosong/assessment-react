import { useNavigate } from 'react-router-dom'
export default function SectionContent({ title }) {
    const navigate = useNavigate()
    return (
        <div className="flex flex-col items-center w-full">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 leading-tight">
                Generation Thailand
                <br />
                {title}
            </h1>

            <div className="flex gap-12 md:gap-24">
                <button
                    className="bg-white px-6 py-3 rounded shadow-sm font-bold hover:bg-slate-50 transition-colors"
                    onClick={() => navigate('/user')}
                >
                    User Section
                </button>
                <button
                    className="bg-white px-6 py-3 rounded shadow-sm font-bold hover:bg-slate-50 transition-colors"
                    onClick={() => navigate('/admin')}
                >
                    Admin Section
                </button>
            </div>
        </div>
    )
}
