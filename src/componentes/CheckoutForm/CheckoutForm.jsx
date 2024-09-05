import './CheckoutForm.css'
import { useState } from 'react'

const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const [error, setError] = useState('')

    const handleConfirm = (event) => {
        event.preventDefault()

        // Validación básica
        if (!name || !phone || !email) {
            setError('Por favor, complete todos los campos.')
            return
        }

        const userData = {
            name, phone, email
        }

        onConfirm(userData)
    }

    return (
        <div className='Container'>
            <form onSubmit={handleConfirm} className='Form'>
                <h2>Ingrese sus datos para registrar la compra</h2>

                {error && <p className="Error">{error}</p>}

                <label className='Label'>
                    Nombre
                    <input
                        className='Input'
                        type='text'
                        value={name}
                        onChange={({ target }) => setName(target.value)}
                        required
                    />
                </label>

                <label className='Label'>
                    Teléfono
                    <input
                        className='Input'
                        type='tel'
                        value={phone}
                        onChange={({ target }) => setPhone(target.value)}
                        required
                    />
                </label>

                <label className='Label'>
                    Email
                    <input
                        className='Input'
                        type='email'
                        value={email}
                        onChange={({ target }) => setEmail(target.value)}
                        required
                    />
                </label>

                <div className='ButtonContainer'>
                    <button type='submit' className='Button'>Crear Orden</button>
                </div>
            </form>
        </div>
    )
}

export default CheckoutForm
