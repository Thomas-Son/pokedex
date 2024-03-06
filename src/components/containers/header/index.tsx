import { NavLink } from "react-router-dom";

import styles from "./header.module.css"

function Header () {
    return (
        <header className={styles.header}>
            <NavLink to="/" className={styles.title}>
                <h1>Pokedex</h1>
            </NavLink>
            <div className={styles.navigation}>
                <nav>
                    <NavLink to="/gen/1">Gen 1</NavLink>
                    <NavLink to="/gen/2">Gen 2</NavLink>
                    <NavLink to="/gen/3">Gen 3</NavLink>
                    <NavLink to="/gen/4">Gen 4</NavLink>
                    <NavLink to="/gen/5">Gen 5</NavLink>
                    <NavLink to="/gen/6">Gen 6</NavLink>
                    <NavLink to="/gen/7">Gen 7</NavLink>
                    <NavLink to="/gen/8">Gen 8</NavLink>
                    <NavLink to="/gen/9">Gen 9</NavLink>
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