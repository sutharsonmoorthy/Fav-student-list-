import { createContext, useState } from "react";

export const StudentContext = createContext();

export default function StudentProvider(props) {
    const [students, setStudents] = useState(
        [
            { id: 1, name: "Sutharson Moorthy", roll: "101" },
            { id: 2, name: "Nikita Sutharson", roll: "102" },
            { id: 3, name: "Yaalini Sutharson", roll: "103" }
        ]
    );
    const [favs, setFavs] = useState([]);

    function addStudent(name, roll) {
        setStudents([...students, { id: Date.now(), name: name, roll: roll }]);
    }

    function addFav(student) {
        const exists = favs.some(function (f) { return f.id === student.id; });
        if (!exists) {
            setFavs([...favs, student]);
        }
    }

    function removeFav(id) {
        const filtered = favs.filter(function (f) { return f.id !== id; });
        setFavs(filtered);
    }

    return (
        <StudentContext.Provider value={{ students, favs, addFav, removeFav, addStudent }}>
            {props.children}
        </StudentContext.Provider>
    );
}