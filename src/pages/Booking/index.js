import React, { useState, useEffect } from 'react'
import { FramePage } from '../FramePage'
import { Button } from './../../components/Button'
import { useParams } from 'react-router-dom'
import { requestHttp } from '../../config/HttpRequest'

export const BookingPage = () => {

    const { id } = useParams([])

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [booking_date, setBookingDate] = useState('')
    const [isValidForm, setIsValidForm] = useState(false)

    const bookingHandler = (e) => {
        e.preventDefault()
        requestBooking()
    }

    const requestBooking = () => {
        const body = {
            name,
            phone,
            email,
            booking_date,
            experience_id: id
        }
        saveBooking(body)
        console.log('body', body)
    }

    useEffect(() => {
        //HTTP Request
        saveBooking()
    }, [])

    const saveBooking = async (body) => {
        try {
            await requestHttp('post', `/booking`, body)
            console.log('petición guardada')
        } catch (error) {
            console.error(error)
        }
    }


    useEffect(() => {
        setIsValidForm(name !== ''
            && phone !== ''
            && email !== ''
            && booking_date !== ''
        )
    }, [name, phone, email, booking_date])

    return (
        <FramePage>
            <form onSubmit={bookingHandler} className="booking-form">
                <div>
                    <label>Nombre:</label>
                    <input value={name} type="text" onChange={e => setName(e.target.value)} />
                </div>
                <div>
                    <label>Teléfono:</label>
                    <input value={phone} type="tel" onChange={e => setPhone(e.target.value)} />
                </div>
                <div>
                    <label>Correo:</label>
                    <input value={email} type="email" onChange={e => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Fecha de reserva:</label>
                    <input value={booking_date} type="date" onChange={e => setBookingDate(e.target.value)} />
                </div>
                <Button disabled={!isValidForm} type="submit" label="Reservar ahora" />
            </form>
        </FramePage>
    )
}