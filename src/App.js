import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import StudentProvider from "./components/StudentContext";
import StudentList from "./components/StudentList";
import Favourites from "./components/Favourites";


export default function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans antialiased">
      <StudentProvider>
        <BrowserRouter>
          <nav className="flex items-center justify-center gap-8 h-16 bg-white border-b border-zinc-100 ">
            <Link to="/" className="text-xl font-medium text-zinc-500 hover:text-zinc-900 transition-colors">Students</Link>
            <Link to="/favourite" className="text-xl font-medium text-zinc-500 hover:text-zinc-900 transition-colors">Favourites</Link>
          </nav>

          <Routes>
            <Route path="/" element={<StudentList />} />
            <Route path="/favourite" element={<Favourites />} />
          </Routes>
        </BrowserRouter>
      </StudentProvider>
    </div>
  );
}