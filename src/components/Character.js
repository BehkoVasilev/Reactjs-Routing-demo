import { useEffect, useState } from "react";
import { Link, Route, Routes, useNavigate, useParams } from "react-router-dom";
import { CharacterFilms } from "./CharacterFilms";
import { Navigation } from "./Navigation";
import styles from './Navigation.module.css';


const baseUrl = 'https://swapi.dev/api/people';

export const Character = () => {
    const { characterId } = useParams();
    const navigate = useNavigate();
    const [character, setCharacter] = useState({});


    useEffect(() => {
        fetch(`${baseUrl}/${characterId}`)
            .then(res => res.json())
            .then(data => {
                setCharacter(data)
            })
    }, [characterId]);

    const onBackClick = () => {
        navigate(-1);
        // navigate('/characters')
    };

    return (
        <>
            <h1>Character Page</h1>
            <div className={styles['div-info']}>
                <div className={styles['div-child']}>
                    <h2>{character.name}</h2>
                    <h3>Birth year: {character.birth_year}</h3>
                    <h3>Eye color: {character.eye_color}</h3>
                </div>
                <div className={styles['div-child']}>
                    <h3>Gender: {character.gender}</h3>
                    <h3>Hair: {character.hair_color}</h3>
                    <h3>Skin: {character.skin_color}</h3>
                </div>
            </div>
            <button onClick={onBackClick} >BACK</button>
            <Navigation>
                <li><Link to="films">Films</Link></li>
                <li><Link to="starships">Star Ships</Link></li>
                <li><Link to="species">Species</Link></li>
            </Navigation>

            <Routes>
                <Route path="/films" element={<CharacterFilms />} />
                <Route path="/starships" element={<h3>Starships</h3>} />
                <Route path="/species" element={<h3>Species</h3>} />
            </Routes>
        </>
    )
}