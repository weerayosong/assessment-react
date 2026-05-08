import { useState, useEffect } from 'react'
import SectionContent from '../components/SectionContent'

export default function User() {
    const [members, setMembers] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchMembers = async () => {
            try {
                const response = await fetch(
                    'https://67eca027aa794fb3222e43e2.mockapi.io/members',
                )
                if (!response.ok) {
                    throw new Error(`Crap! I'can't fetch`)
                }
                const data = await response.json()
                setMembers(data)
            } catch (err) {
                setError(err.message)
            } finally {
                setIsLoading(false)
            }
        }

        fetchMembers()
    }, [])

    return (
        <div className="w-full flex flex-col items-center pb-16">
            <SectionContent title="🥝 User Section 🥝" />

            <div className="w-full max-w-4xl px-6 mt-10">
                {isLoading ? (
                    <div className="text-center font-bold text-slate-500 animate-pulse">
                        Now Loading...
                    </div>
                ) : error ? (
                    <div className="text-center font-bold text-red-500">
                        Error: {error}
                    </div>
                ) : (
                    <div className="bg-white rounded-sm shadow-sm border-slate-200 overflow-hidden">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-100 border-b border-slate-300">
                                    <th className="p-4 font-bold text-slate-700">
                                        Name
                                    </th>
                                    <th className="p-4 font-bold text-slate-700">
                                        Last Name
                                    </th>
                                    <th className="p-4 font-bold text-slate-700">
                                        Position
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {members.map((member) => (
                                    <tr
                                        key={member.id}
                                        className="border-b border-slate-200 text-sm"
                                    >
                                        <td className="p-4 text-slate-600">
                                            {member.name}
                                        </td>

                                        <td className="p-4 text-slate-600">
                                            {member.lastName}
                                        </td>
                                        <td className="p-4 text-slate-600">
                                            {member.position}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    )
}
