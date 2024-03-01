import { TApiResponse, useApiGet } from "../../../hook/useFetch"
import { useParams } from "react-router-dom"

import styles from "./card.module.css"

function Generation() {

    const params = useParams()

    type pokemonCard = {
        pokedex_id: number;
        name: {
            fr: string;
        };
        sprites: {
            regular: string;
            shiny: string;
            gmax?: string;
        }
    }

    type pokemonType = {
        name: string,
        image: string
    }

    const data: TApiResponse = useApiGet("https://tyradex.vercel.app/api/v1/pokemon/" + params.id);

    if (!data.loading) console.log(data.data.name.fr)

    return (
        <>
            {(!data.loading) ?
                (<section className={styles.pokemonCard}>
                    <h2>Pokemon #{data.data.pokedex_id}</h2>
                    <p className={styles.pokemonName}>{data.data.name.fr}</p>

                    <article className={styles.pokemonRegular}>
                        <h3>Forme de base</h3>
                        <img src={data.data.sprites.regular} alt="pokemon" />
                    </article>

                    <article className={styles.pokemonShiny}>
                        <h3>Forme shiny</h3>
                        <img src={data.data.sprites.shiny} alt="pokemon" />
                    </article>

                    <article className={styles.pokemonType}>
                        <h3>Type(s)</h3>
                        {(data.data.types.lenght === 1) ?
                            <div>
                                <img src={data.data.types.image} alt="type" />
                                <p>{data.data.types.name}</p>
                            </div>
                            :
                            (data.data.types.map((types: pokemonType) =>
                                <div>
                                    <img src={types.image} alt="type" />
                                    <p>{types.name}</p>
                                </div>
                            ))
                        }
                    </article>

                    <article className={styles.pokemonDetail}>
                        <h3>Détails</h3>
                        <p>Catégorie : {data.data.category}</p>
                        <p>Taille : {data.data.height}</p>
                        <p>Poids : {data.data.weight}</p>
                    </article>

                    <article className={styles.pokemonStat}>
                        <h3>Statistiques</h3>
                        <div>
                            <p>Pv : </p>
                            <p>{data.data.stats.hp}</p>
                        </div>
                        <div>
                            <p>Attaque : </p>
                            <p>{data.data.stats.atk}</p>
                        </div>
                        <div>
                            <p>Défense : </p>
                            <p>{data.data.stats.def}</p>
                        </div>
                        <div>
                            <p>Attaque Spé. : </p>
                            <p>{data.data.stats.spe_atk}</p>
                        </div>
                        <div>
                            <p>Défense Spé. : </p>
                            <p>{data.data.stats.spe_def}</p>
                        </div>
                        <div>
                            <p>Vitesse : </p>
                            <p>{data.data.stats.vit}</p>
                        </div>
                    </article>
                </section>)
                : <p>En chargement</p>
            }
        </>
    )
}

export default Generation;