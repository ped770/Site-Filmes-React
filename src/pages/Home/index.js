import React from "react";
import { useState, useEffect } from 'react'
import api from "../../Services/api";
import { Link } from "react-router-dom";
import './style.css'

function Home(){

    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(()=>{
        async function loadFilmes(){
            const response = await api.get("/movie/now_playing", {
                params:{
                    api_key: "ee4d24c554e6a7903843dafc36092514",
                    language: "pt-BR",
                    page: 1,
                }
            })

          //  console.log(response.data.results.slice(0, 10))
          setFilmes(response.data.results.slice(0, 10));
          setLoading(false);
        }

        loadFilmes()
    })

    if(loading){
       return(
       <div className="loading">
            <h2>Carregando...</h2>
        </div>
        );
    }

    return(
        
        <div className="container">
            
            <div className="filmes">
                {filmes.map((filme)=>{
                    return(
                        <article key={filme.id}>
                            <strong>{filme.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title}/>
                            <Link to={`/Site-Filmes-React/filme/${filme.id}`}>Acessar</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    );
}

export default Home;