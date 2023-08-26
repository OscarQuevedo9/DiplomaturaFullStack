import '../../styles/components/layout/Nav.css';
import { NavLink } from "react-router-dom";

const Nav = (props) => {
    return (
        <nav>
            <div>
                <ul>
                    <li>
                        <NavLink to="/" className={({ isActive }) => isActive ? "activo" : undefined}>HomePage</NavLink>
                    </li>
                    <li>
                        <NavLink to="/nosotros" className={({ isActive }) => isActive ? "activo" : undefined}>Nosotros</NavLink>
                    </li>
                    <li>
                        <NavLink to="/servicios" className={({ isActive }) => isActive ? "activo" : undefined}>Servicios</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contacto" className={({ isActive }) => isActive ? "activo" : undefined}>Contacto</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;