import { useState } from "react"

interface FAQ {
  question: string
  answer: string
}

const faqs: FAQ[] = [
  {
    question: "Como faço um pedido?",
    answer: "Navegue pela seção 'Produtos', selecione a cidade e a feira desejada. Adicione os produtos ao seu carrinho e finalize o pedido. Você receberá uma confirmação e poderá retirar seus produtos no dia e local da feira."
  },
  {
    question: "Quais são as formas de pagamentos?",
    answer: "Atualmente, o pagamento é realizado diretamente ao feirante no momento da retirada do pedido. Aceitamos dinheiro e, dependendo do feirante, cartões de débito/crédito ou PIX."
  },
  {
    question: "Posso cancelar ou alterar meu pedido?",
    answer: "Para cancelar ou alterar seu pedido, entre em contato conosco o mais rápido possível através do WhatsApp ou e-mail informados abaixo, informando o número do seu pedido."
  },
  {
    question: "Como sei quando meu pedido está pronto para a retirada?",
    answer: "Você pode acompanhar o status do seu pedido na seção 'Meus Pedidos'. Quando o status for 'Pronto para Retirada', você já pode ir até a feira selecionada para buscar seus produtos."
  }
]

function BoxContact() {
  const [faqOpen, setFaqOpen] = useState(null);

  return (
    <section className="flex flex-row items-center justify-center gap-4">
        <div className="p-2 bg-white w-150 h-70 p-5 text-[#6D4C41] flex flex-col gap-4 border-[#E5E7EB] border-1 shadow-xl">
            <div className="flex flex-row gap-2 font-bold text-xl">
              <span>Icon</span>
              <h4>Entre em Contato</h4>
            </div>
            <div>
              <p className="text-center pl-4 pr-4 font-light">Tem alguma dúvida ou precisa de ajuda com seu pedido?<br /> Fale conosco!</p>
            </div>
            <div className="flex flex-row gap-2">
              <span>icon</span>
              <p>(XX) 9XXXX-XXXX (WhatsApp)</p>
            </div>
            <div className="flex flex-row gap-2">
              <span>icon</span>
              <p>contato@feiraai.com.br</p>
            </div>
            <button className="flex flex-row gap-2 bg-[#4CAF50] p-2 w-full flex justify-center rounded-md text-white hover:bg-[#4caf4fbb] transition-colors duration-600 ">
              <span>icon</span><p>Falar no WhatsApp</p>
            </button>
        </div>

        <div className="p-2 bg-white w-150 h-70 p-5 text-[#6D4C41] flex flex-col gap-4 border-[#E5E7EB] border-1 shadow-xl">
            <div className="font-bold text-xl">
              <h4>Dúvidas Frequentes (FAQ)</h4>
            </div>

            <div className="border-b-1">
              <button className="flex flex-row justify-between font-medium hover:text-green-600">
                <p>{faqs[0].question}</p>
                <span>icon</span>
              </button>
              
              <p>{faqs[0].answer}</p>
            </div>
            <div>
              <button className="flex flex-row justify-between font-medium hover:text-green-600">
                <p>{faqs[1].question}</p>
                <span>icon</span>
              </button>
              
              <p>{faqs[1].answer}</p>
            </div>
            <div>
              <button className="flex flex-row justify-between font-medium hover:text-green-600">
                <p>{faqs[2].question}</p>
                <span>icon</span>
              </button>
              
              <p>{faqs[2].answer}</p>
            </div>
            <div>
              <button className="flex flex-row justify-between font-medium hover:text-green-600">
                <p>{faqs[3].question}</p>
                <span>icon</span>
              </button>
              
              <p>{faqs[3].answer}</p>
            </div>
            
        </div>
    </section>
  )
}

export default BoxContact