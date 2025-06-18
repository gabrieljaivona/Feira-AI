import { useState } from "react"

interface Contact {
  telefone: string;
  email: string;
}
interface FAQ {
  question: string
  answer: string
}

const contact: Contact = {
  telefone: "(XX) 9XXXX-XXXX",
  email: "contato@feiraai.com.br"
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
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const toggle = (index: number) => {
    setFaqOpen(faqOpen === index ? null : index); 
  }

  return (
    <section className="flex flex-row items-center justify-center gap-4 p-10">
        <div className="bg-white w-150 h-80 p-5 text-[#6D4C41] flex flex-col gap-4 border-[#E5E7EB] border-1 shadow-xl">
            <div className="flex flex-row gap-2 font-bold text-xl">
              <span>Icon</span>
              <h4>Entre em Contato</h4>
            </div>
            <div>
              <p className="text-center pl-4 pr-4 font-light">Tem alguma dúvida ou precisa de ajuda com seu pedido?<br /> Fale conosco!</p>
            </div>
            <div className="flex flex-row gap-2">
              <span>icon</span>
              <p>{contact.telefone}</p>
            </div>
            <div className="flex flex-row gap-2">
              <span>icon</span>
              <p>{contact.email}</p>
            </div>
            <button className="flex flex-row gap-2 bg-[#4CAF50] p-2 w-full justify-center rounded-md text-white hover:bg-[#4caf4fbb] transition-colors duration-600 ">
              <span>icon</span><p>Falar no WhatsApp</p>
            </button>
        </div>

        <div className="bg-white w-150 h-80 p-5 text-[#6D4C41] flex flex-col gap-4 border-[#E5E7EB] border-1 shadow-xl ">
            <div className="font-bold text-xl">
              <h4>Dúvidas Frequentes (FAQ)</h4>
            </div>

            {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 pb-2">
            <button
              className="flex flex-row justify-between w-full font-medium hover:text-green-600"
              onClick={() => toggle(index)}
            >
              <p>{faq.question}</p>
              <span>{faqOpen === index ? "▲" : "▼"}</span>
            </button>

            {faqOpen === index && (
              <p className="mt-2 text-sm text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
            
        </div>
    </section>
  )
}

export default BoxContact