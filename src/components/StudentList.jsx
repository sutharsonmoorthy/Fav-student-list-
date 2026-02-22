import { useContext, useState } from "react";
import { StudentContext } from "./StudentContext";

export default function StudentList() {
    const { students, favs, addFav, addStudent } = useContext(StudentContext);
    const [name, setName] = useState("");
    const [roll, setRoll] = useState("");

    function handleAdd() {
        if (name.trim() !== "" && roll.trim() !== "") {
            addStudent(name, roll);
            setName("");
            setRoll("");
        }
    }

    return (
        <div className="max-w-xl mx-auto py-12 px-6">
            <div className="mb-10 text-center">
                <h1 className="text-2xl font-semibold tracking-tight mb-1">Student Directory</h1>
                <p className="text-zinc-500 text-sm">Manage your student records and selections.</p>
            </div>

            <div className="flex gap-2 mb-8 p-1 bg-zinc-50 border border-zinc-200 rounded-xl">
                <input
                    value={name}
                    onChange={function (e) { setName(e.target.value); }}
                    className="flex-1 bg-transparent p-2 text-sm outline-none placeholder-zinc-400"
                    placeholder="Full name" />
                <input
                    value={roll}
                    onChange={function (e) { setRoll(e.target.value); }}
                    className="w-20 bg-transparent p-2 text-sm outline-none border-l border-zinc-200 placeholder-zinc-400"
                    placeholder="ID" />
                <button onClick={handleAdd}
                    className="bg-zinc-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-zinc-800 transition-all active:scale-95">
                    Add
                </button>
            </div>

            <div className="space-y-2">
                {students.map(function (s) {
                    const isFav = favs.some(function (f) { return f.id === s.id; });
                    return (
                        <div key={s.id}
                            className="group flex justify-between items-center p-4 border border-zinc-100 rounded-xl hover:border-zinc-300 hover:bg-zinc-50/50 transition-all">
                            <div>
                                <p className="font-medium text-zinc-900">{s.name}</p>
                                <p className="text-xs text-zinc-400 font-medium">#{s.roll}</p>
                            </div>
                            <button
                                disabled={isFav}
                                onClick={function () { addFav(s); }}
                                className=
                                {
                                    "px-3 py-1.5 rounded-lg text-xs font-semibold transition-all"
                                    + (isFav ? 'text-zinc-300 bg-zinc-50' : 'text-violet-600 bg-violet-50 hover:bg-violet-600 hover:text-white')
                                } >
                                {
                                    isFav ? "Saved" : "Favourite"
                                }
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}