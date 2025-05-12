import { NavLink } from "react-router-dom";


function Header() {
  return (
    <nav>
        <div className="flex">
            <a href="#">Feira Aí</a>
            <div>
              <NavLink to="/Home">Início</NavLink>
              <NavLink to="/Products">Produtos</NavLink>
              <NavLink to="/MyOrders">Meus Pedidos</NavLink>
              <NavLink to="/Contact">Contato / Ajuda</NavLink>
              <NavLink to="/Auth">
                <button type="button">Entrar / Cadastrar</button>
              </NavLink>
            </div>
        </div>
    </nav>
  )
}

export default Header;