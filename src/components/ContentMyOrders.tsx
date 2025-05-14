
const idPedido = "#ORD-12345"
const total = "45.50"
const statusPedido = ["Pronto para Retirada", "Concluído", "Em Preparo"]

function ContentMyOrders() {
  return (
    <div className="flex flex-col gap-5">
        <div className="bg-white w-250 p-4 m-auto shadow-2xl rounded-md">
            <div className="w-full flex flex-row justify-between border-b-1 border-[#E5E7EB]">
                <div className="flex flex-col">
                    <h1 className="text-[#6D4C41] font-semibold">Pedido {idPedido}</h1>
                    <p className="text-[#6D4C41] font-extralight">Realizado em: 04/05/2025</p>
                </div>
                <div>{statusPedido[1]}</div>
            </div>


            <div className="text-[#6D4C41] w-full flex flex-col justify-center items-center pt-8 pb-2">
                <p className="font-extralight">Local de Retirada: <span className="font-semibold">Feira do Bairro Novo (Curitiba - PR)</span></p>
                <h4>Itens: </h4>
                <ul>
                    <li>2x Maça Gala Fresca</li>
                    <li>1x Banana Prata</li>
                </ul>
                <p className="w-full text-right mt-2">{total}</p>
            </div>
        </div>
    </div>
  )
}

export default ContentMyOrders