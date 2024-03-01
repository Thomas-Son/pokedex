import { NavLink } from "react-router-dom";

import styles from "./header.module.css"

function Header () {
    return (
        <header className={styles.header}>
            <h1>Pokedex</h1>
            <div className={styles.navigation}>
                <nav>
                    <NavLink to="/gen1">Gen 1</NavLink>
                    <NavLink to="/gen2">Gen 2</NavLink>
                    <NavLink to="/gen3">Gen 3</NavLink>
                    <NavLink to="/gen4">Gen 4</NavLink>
                    <NavLink to="/gen5">Gen 5</NavLink>
                    <NavLink to="/gen6">Gen 6</NavLink>
                    <NavLink to="/gen7">Gen 7</NavLink>
                    <NavLink to="/gen8">Gen 8</NavLink>
                    <NavLink to="/gen9">Gen 9</NavLink>
                </nav>
                <form action="">
                    <input type="text" />
                    <button></button>
                </form>
            </div>
        </header>
    )
}

export default Header;