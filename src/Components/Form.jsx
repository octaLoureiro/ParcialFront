import React, { useState } from 'react'
import Card from './Card'

const Form = () => {
    const [user, setUser] = useState({
        nombre: '',
        artista: '',
        tema: ''
    })
    const [show, setShow] = useState(false)
    const [err, setErr] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        if(user.nombre.length < 3 && user.artista < 6) {
            setShow(true)
            setErr(false)
        } else {
            setErr(true)
        }

    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Nombre Completo</label>
            <input type="text" value={user.nombre} onChange={(e) => setUser({...user, nombre: e.target.value})}/>
            <label>Artista Favorito</label>
            <input type="text" value={user.artista} onChange={(e) => setUser({...user, artista: e.target.value})}/>
            <label>Tema Favorito</label>
            <input type="text" value={user.tema} onChange={(e) => setUser({...user, tema: e.target.value})}/>
            <button>Enviar</button>
            {err && 'Por favor chequea que la información sea correcta'}
        </form>
        {show  && <Card nombre={user.nombre} artista={user.artista} tema={user.tema}/>}
       
    </div>
  )
}

export default Form