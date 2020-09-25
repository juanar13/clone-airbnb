import React from 'react'
import { CardDetail } from './components/CardDetail'
import { Button } from '../../components/Button'
import { FramePage } from '../FramePage'
import { useParams } from 'react-router-dom'

const buttonStyle = {
    backgroundColor: '#FC642D',
    borderColor: '#fe530c'
}

// hook

export const DetailPage = () => {

    const { id } = useParams()
    
    return ( 
    <FramePage>
        <CardDetail />
        <Button isLink={true} linkTo={`/booking/${id}`} style={buttonStyle} label="¡Reserva ahora!" />
    </FramePage>
    )
}