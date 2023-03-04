import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";
import './style.css'

function Favoritos(){
    const [filmes, setFilmes] = useState([])

    useEffect(()=>{
        const lista = localStorage.getItem("@filme")

        setFilmes(JSON.parse(lista) || [])
    }, [])

    function excluirFilme(id) {
        let filtroFilme = filmes.filter((item) => {
            return (item.id !== id);
        })
        setFilmes(filtroFilme);
        localStorage.setItem("@filme", JSON.stringify(filtroFilme))
        toast.success("Filme excluido com sucesso!")
    }

    return(
        <div className='meus-filmes'>
            <h1>Meus filmes</h1>

            {filmes.length === 0 && <h3>Você não possui nenhum filme salvo</h3>}

            <ul>
                {filmes.map((item) => {
                    return(
                        <li key={item.id}>
                            <span>{item.title}</span>
                            <div>
                                <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                                <button onClick={() => excluirFilme(item.id)}>Excluir</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}


export default Favoritos;