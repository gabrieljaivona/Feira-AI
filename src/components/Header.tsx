import { NavLink } from "react-router-dom";


function Header() {
  const baseLink = "text-[#6D4C41] hover:text-[#4CAF50] hover:ease-linear";
  const activeLink = "font-bold";

  return (
    <nav className="bg-[#FFF8E1] shadow">
        <div className="flex items-center justify-between max-w-7xl mx-auto px-4 py-3">
            <NavLink to="/Home" className="text-[#4CAF50] font-bold text-2xl">Feira Aí</NavLink>
            
            <div className="flex gap-5">
              <NavLink to="/Home" className={({ isActive }) =>
                `${baseLink} ${isActive ? activeLink : ""}`}>
                Inicío
              </NavLink>

              <NavLink to="/Products" className={({ isActive }) =>
                `${baseLink} ${isActive ? activeLink : ""}`}>
                Produtos
              </NavLink>

              <NavLink to="/MyOrders" className={({ isActive }) =>
                `${baseLink} ${isActive ? activeLink : ""}`}>
                Meus Pedidos
              </NavLink>

              <NavLink to="/Contact" className={({ isActive }) =>
              `${baseLink} ${isActive ? activeLink : ""}`}>
                Contato / Ajuda
                </NavLink>

              <NavLink to="/Auth" className={({ isActive }) =>
              `${baseLink} ${isActive ? activeLink : ""}`}>
                <button type="button">Entrar / Cadastrar</button>
              </NavLink>
            </div>
            <div>
              <button>
                
              </button>
            </div>
        </div>
    </nav>
  )
}

export default Header;