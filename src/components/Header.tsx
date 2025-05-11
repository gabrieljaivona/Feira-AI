import { Link } from "react-router-dom";


function Header() {
  return (
    <nav>
        <div className="flex">
            <a href="#">Feira Aí</a>
            <div>
              <Link to="/Home">Início</Link>
              <Link to="/Products">Produtos</Link>
              <Link to="/MyOrders">Meus Pedidos</Link>
              <Link to="/Contact">Contato / Ajuda</Link>
              <Link to="/Auth">
                <button type="button">Entrar / Cadastrar</button>
              </Link>
            </div>
        </div>
    </nav>
  )
}

export default Header;