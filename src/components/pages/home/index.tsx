import styles from "./home.module.css"

function Home() {
    return (
        <main className={styles.home}>
            <h2>Bienvenue sur mon Pokedex.</h2>
            <p>Le projet Pokedex est un petit projet personnel que j'ai commencé afin de tester mes nouvelles connaissances en tant que développeur.</p>
        </main>
    )
}

export default Home;