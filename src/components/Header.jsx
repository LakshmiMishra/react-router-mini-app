import { NavLink } from "react-router-dom";


export const Header = () => {
  return (
    <header>
     
      <nav className="navigation">
        <NavLink to="/" className="link" end>Home</NavLink>
        <NavLink to="/products" className="link">Products</NavLink>
        <NavLink to="/contact" className="link">Contact</NavLink>
      </nav>
    </header>
  )
}