import { useState } from "react"


function BoxAuth() {

    const [loginView, setLoginView] = useState(true);

    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    const [registerName, setRegister] = useState('');
    const [registerEmail, setRegisterEmail] = useState('');

  return (
    <section>box</section>
  )
}

export default BoxAuth