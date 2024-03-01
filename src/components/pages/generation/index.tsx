import { TApiResponse, useApiGet } from "../../../hook/useFetch"
import { NavLink } from "react-router-dom";

import styles from "./generation.module.css"

function Generation(props: {gen: number}) {

    type pokemon = {
        pokedex_id: number
        name : {
            fr: string;
        };
        sprites: {
            regular: string;
            shiny: string;
            gmax?: string;
        }
    }

    const data: TApiResponse = useApiGet("https://tyradex.vercel.app/api/v1/gen/" + props.gen);

    if (!data.loading) console.log(data)

    return (
        <section className={styles.generation}>
            <h2>Pokemon de la génération {props.gen}</h2>

            {(!data.loading) ? 
                (data.data.map((datas: pokemon) =>
                <NavLink to={"/pokemon/" + datas.pokedex_id} className={styles.pokemon}>
                    <article>                        
                        <h3>{datas.name.fr}</h3>
                        <img src={datas.sprites.regular} alt="pokemon" />                                            
                    </article>
                </NavLink>
                ))
                :<p>En chargement</p>
            }
        </section>
    )
}

export default Generation;