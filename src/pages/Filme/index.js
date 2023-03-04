import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from '../../Services/api'

import './style.css'

function Filme(){
    const { id } = useParams();
    const navigate = useNavigate();
    const [filme, setFilme] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        async function loadFilme(){
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: "ee4d24c554e6a7903843dafc36092514",
                    language: "pt-BR",
                }
            })
            .then((response)=>{
                setFilme(response.data);
                setLoading(false);
            })
            .catch(()=>{
                navigate("/", { replace: true })
                return;
            })
        }
        loadFilme()
    }, [navigate, id])

    function salvarFilme(){
        const lista = localStorage.getItem("@filme");

        let filmesSalvos = JSON.parse(lista) || [];

        const hasFilme = filmesSalvos.some( (filmesSalvo) => filmesSalvo.id === filme.id )

        if(hasFilme){
            toast.warn("Esse filme já está na lista!")
            return;
        }

        filmesSalvos.push(filme);
        localStorage.setItem("@filme", JSON.stringify(filmesSalvos));
        toast.success("Filme salvo com sucesso!")
    }

    if(loading){
        return(
            <div className="info">
                <h2>Carregando detalhes...</h2>
            </div>
         );
     }

    return(
        <div className="info">
            <h1>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />

            <h3>Sinopse:</h3>
            <span>{filme.overview}</span>

            <strong>Avaliação: {filme.vote_average.toFixed(1)}/10</strong>
            <strong>Avaliado por: {filme.vote_count} pessoas</strong>

            <div className="area-buttons">
                <button onClick={salvarFilme} className="btn">Salvar</button>
                <button className="btn1">
                    <a target="blank" rel="external" href={`https://www.youtube.com/results?search_query=${filme.title} trailer`}>
                        Trailer
                    </a>
                </button>
            </div>
        </div>
    );
}

export default Filme;