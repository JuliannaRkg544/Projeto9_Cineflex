import { BrowserRouter, Routes, Route } from "react-router-dom";
import Confirmation from "./Confirmation";
import Header from "./Header";
import Movie from "./Movie";
import MovieList from "./MovieList";
import MovieSeats from "./MovieSeats";


export default function App() {

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<MovieList />} ></Route>
                <Route path="/movie/:idMovie" element={<Movie />}></Route>
                <Route path="/seats/:idSeats" element={<MovieSeats />}></Route>
                <Route path="/confirmation" element={<Confirmation />}></Route>
            </Routes>
        </BrowserRouter>
    )
}