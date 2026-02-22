import { useContext } from "react";
import { StudentContext } from "./StudentContext";

export default function Favourites() {
    const { favs, removeFav } = useContext(StudentContext);

    return (
        <div className="max-w-xl mx-auto py-12 px-6 text-center">
            <h2 className="text-xl font-semibold mb-6">Saved Favourites</h2>

            {favs.length === 0 ? (
                <div className="py-20 text-center border-2  border-zinc-100 rounded-2xl">
                    <p className="text-zinc-400 text-sm">No favourites yet.</p>
                </div>
            ) : (
                <div className="grid gap-2">
                    {
                        favs.map(function (s) {
                            return (
                                <div key={s.id} className="flex justify-between items-center p-4 border border-zinc-200 rounded-xl shadow-sm">
                                    <div>
                                        <p className="font-semibold text-zinc-800">{s.name}</p>
                                        <p className="text-xs text-zinc-400 uppercase">ID: {s.roll}</p>
                                    </div>
                                    <button
                                        onClick={function () { removeFav(s.id); }}
                                        className="text-zinc-400 hover:text-red-500 p-2 text-xs font-medium transition-colors">
                                        Remove
                                    </button>
                                </div>
                            );
                        })}
                </div>
            )}
        </div>
    );
}