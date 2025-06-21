import { useState } from "react"

const mensagem: string[] = ["Acesse sua conta para continuar.", "Crie sua conta e aproveite!"]

function BoxAuth() {

    const [loginView, setLoginView] = useState(true);

    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    const [registerName, setRegister] = useState('');
    const [registerEmail, setRegisterEmail] = useState('');

  return (
    <section className="bg-white flex flex-col justify-center gap-[5px] h-[508px] w-[40%] rounded-xl p-[32px]">
      <div className="text-center">
        <h2 className="text-[#4CAF50] font-bold text-4xl">Feira Aí</h2>
        <p className="text-[#6D4C41] font-light">{loginView ? mensagem[0] : mensagem[1]}</p>
      </div>

      <div className={`flex justify-between h-[54px] border-b-[2px] border-[#4CAF50] w-full`}>
        <button onClick={() => setLoginView(true)} className={`flex justify-center gap-[8px] pt-[12px] pb-[12px] h-[52px] w-full font-medium ransition-all duration-300 ease-in-out hover:text-[#FF9800] ${loginView ?"border-b-4 border-[#FF9800] text-[#FF9800]":"text-[#6d4c41dc]"}`}>
          <span>icon</span>
          <p>Entrar</p>
        </button>

        <button onClick={() => setLoginView(false)} className={`flex justify-center gap-[8px] pt-[12px] pb-[12px] h-[52px] w-full font-medium text-[#6d4c41dc] ransition-all duration-300 ease-in-out hover:text-[#FF9800] ${loginView ?"text-[#6d4c41dc]":"border-b-4 border-[#FF9800] text-[#FF9800]"}`}>
          <span>icon</span>
          <p>Cadastrar</p>
        </button>
      </div>

      {loginView ? (
        //Login
        <form className="flex flex-col gap-y-6 pt-4">
          <div className="flex flex-col text-center w-full">
            <label htmlFor="iemailLogin" className="text-[#6D4C41]">Email</label>
            <input type="email" name="emailLogin" id="iemailLogin" required placeholder="seuemail@exemplo.com" className="px-2 py-1 shadow-md rounded-[5px] border-[1px] border-[#E5E7EB] outline-none focus:border-[#FF9800]"/>
          </div>
          <div className="flex flex-col text-center w-full">
            <label htmlFor="ipasswordLogin" className="text-[#6D4C41]">Senha</label>
            <input type="password" name="passwordLogin" id="ipasswordLogin" required placeholder="Sua senha" className="px-2 py-1 shadow-md rounded-[5px] border-[1px] border-[#E5E7EB] outline-none focus:border-[#FF9800]"/>
          </div>

          <button type="submit" className="flex flex-row gap-2 justify-center h-[36px] w-full bg-[#4CAF50] py-2 px-4 rounded-md hover:bg-[#4caf4fd8] transition duration-300 ease-in-out">
            <span>icon</span>
            <p className="text-white font-semibold">Entrar agora</p>
          </button>
          <p className="mt-4 text-sm text-center text-[#6d4c41dc] font-light">Não tem uma conta?{" "}
            <button onClick={() => setLoginView(false)} className="font-medium text-[#FF9800] hover:underline">Cadastre-se aqui</button>
          </p>
        </form>
      ) : (
        //Register
        <form></form>
      )}
    </section>
  )
}

export default BoxAuth