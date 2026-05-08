import { useState, useEffect } from 'react'
import SectionContent from '../components/SectionContent'

export default function Admin() {
    const [members, setMembers] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [position, setPosition] = useState('')

    const [refreshTrigger, setRefreshTrigger] = useState(0) // add another useState to clear cascadeing render

    const API_URL = 'https://67eca027aa794fb3222e43e2.mockapi.io/members'
    // get
    useEffect(() => {
        const fetchMembers = async () => {
            try {
                const response = await fetch(API_URL)
                if (!response.ok) throw new Error(`Crap! I'can't fetch`)
                const data = await response.json()
                setMembers(data)
            } catch (err) {
                setError(err.message)
            } finally {
                setIsLoading(false)
            }
        }

        fetchMembers()
    }, [refreshTrigger])

    // delete
    const handleDelete = async (id) => {
        if (!window.confirm('del, are you sure?')) return

        try {
            const response = await fetch(`${API_URL}/${id}`, {
                method: 'DELETE',
            })
            if (response.ok) {
                alert('del, done!')
                setRefreshTrigger((prev) => prev + 1)
            }
        } catch (err) {
            alert('Error: ' + err.message)
        }
    }

    return (
        <div className="w-full flex flex-col items-center pb-16">
            <SectionContent title="🍑 Admin Section 🍑" />

            <div className="w-full max-w-4xl px-6 mt-10">
                <div className="mb-10">
                    <h2 className="text-xl font-bold mb-4">Create Member</h2>
                    <form className="flex flex-col md:flex-row gap-4 items-center">
                        <input
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-2 bg-white border border-slate-300 rounded focus:outline-none focus:border-slate-500"
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className="w-full px-4 py-2 bg-white border border-slate-300 rounded focus:outline-none focus:border-slate-500"
                        />
                        <input
                            type="text"
                            placeholder="Position"
                            value={position}
                            onChange={(e) => setPosition(e.target.value)}
                            className="w-full px-4 py-2 bg-white border border-slate-300 rounded focus:outline-none focus:border-slate-500"
                        />
                        <button
                            type="submit"
                            className="w-full md:w-auto px-8 py-2 bg-slate-400 text-white font-bold rounded hover:bg-slate-500 transition-colors  cursor-pointer"
                        >
                            Save
                        </button>
                    </form>
                </div>

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
                        <table className="w-full text-left border-collapse ">
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
                                    <th className="p-4 font-bold text-slate-700 text-center">
                                        ⚙️
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
                                        <td className="p-4 text-center text-xs">
                                            <button assName="mx-1 font-bold text-slate-500 hover:text-slate-300 transition-colors cursor-pointer">
                                                Edit
                                            </button>{' '}
                                            /
                                            <button
                                                onClick={() =>
                                                    handleDelete(member.id)
                                                }
                                                className="mx-1 font-bold text-red-500 hover:text-red-300 transition-colors cursor-pointer"
                                            >
                                                Delete
                                            </button>
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
