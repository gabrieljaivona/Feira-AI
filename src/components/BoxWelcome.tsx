import { Link } from "react-router-dom"

function BoxWelcome() {
  return (
    <div className="flex flex-col justify-center items-center bg-[#E5EECE] w-3xl p-12 gap-3 rounded-2xl">
        <div className="flex flex-col items-center">
            <h1 className=" text-[#6D4C41] text-4xl font-bold">Bem-vindo à Feira Aí!</h1>
            <p className="text-center text-[#6D4C41]">Produtos frescos da feira, direto do produtor para sua mesa. Faça seu pedido online e retire na feira mais próxima.</p>
        </div>
        <div>
            <button>
                <Link to="/Products" className="text-white bg-[#FF9800] p-1.5 rounded-sm">Comece a Comprar</Link>
            </button>
        </div>
    </div>
  )
}

export default BoxWelcome