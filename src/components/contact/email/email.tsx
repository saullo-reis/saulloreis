import { FormEvent, useState } from "react";
import emailjs from '@emailjs/browser'

export const Email = () => {
    const [ name, setName ] = useState<string>('')
    const [ subject, setSubject] = useState<string>('')
    const [ email, setEmail] = useState<string>('')
    const [ message, setMessage ] = useState('')

    const handleSubmit = (event: FormEvent) => {
      event.preventDefault();

      if(name === '' || email === '' || message === '' || subject === ''){
        alert("Preencha todos os campos")
        return
      }

      const templateParams=  {
        from_name: name,
        message: message,
        email: email,
        subject: subject
      }

      emailjs.send("service_5g033kb", "template_2o74dsf", templateParams, "RIefpuuX1gJsuJKj-")
      .then((response) => {
        console.log("EMAIL ENVIADO", response.status, response.text)
        setName('')
        setEmail('')
        setMessage('')
        setSubject('')
      }, (err) => {
        console.log("ERRO", err)
      })
    };

    return (
      <form onSubmit={handleSubmit} className="contact-infos-inputs">
        <div>  
          <input
          type={"text"}
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <input
            type={"email"}
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <input
          type={"text"}
            placeholder="Assunto"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          ></input>
        </div>
        <textarea
          onChange={(e) => setMessage(e.target.value)}
          cols={43}
          rows={10}
          value={message}
          placeholder="Mensagem"
        >
        </textarea>
        <button className="contact-infos-inputs-button" type="submit">
          Enviar
        </button>
      </form>
    );
}