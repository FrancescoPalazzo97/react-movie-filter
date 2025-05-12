import React, { use } from 'react'
import initialMovies from '../assets/movies.js'
import MovieList from './MovieList.jsx'
import SelectForm from './SelectForm.jsx'
import InputForm from './InputForm.jsx'
import { useState, useEffect } from 'react'

const Main = () => {

    const [movies, setMovies] = useState(initialMovies)

    const [filteredMovies, setFilteredMovies] = useState(initialMovies)

    const [selectedGenre, setSelectedGenre] = useState('');

    const [search, setSearch] = useState('');

    const handleSelect = (event) => {
        setSelectedGenre(event.target.value);
    };

    useEffect(() => {
        const filteredArray = movies.filter((movie) => {
            if (selectedGenre === '') {
                return true
            } else {
                return movie.genre === selectedGenre
            }
        })
        setFilteredMovies(filteredArray)
    }, [selectedGenre])

    useEffect(() => {
        const filteredArray = movies.filter((movie) => {
            return movie.title.toLowerCase().includes(search.toLowerCase());
        });
        setFilteredMovies(filteredArray);
    }, [search])

    return (
        <main className="py-3">
            <div className="container">
                <InputForm
                    setSearch={(e) => setSearch(e.target.value)}
                    search={search}
                />
                <MovieList
                    movies={filteredMovies}
                />
                <SelectForm
                    movies={initialMovies}
                    handleSelect={(e) => handleSelect(e)}
                    selectedGenre={selectedGenre}
                />
            </div>
        </main>
    )
}

export default Main
