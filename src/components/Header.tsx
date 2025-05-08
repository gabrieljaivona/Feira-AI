function Header() {
  return (
    <nav>
        <div className="flex ">
            <a href="#">Feira Aí</a>
            <div>
            <a href="#inicio">Início</a>
            <a href="#produtos">Produtos</a>
            <a href="#pedidos">Meus Pedidos</a>
            <a href="#contato">Contato / Ajuda</a>
            <button type="button"></button>
            </div>
        </div>
    </nav>
  )
}

export default Header