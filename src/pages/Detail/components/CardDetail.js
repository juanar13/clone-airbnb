import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { requestHttp } from '../../../config/HttpRequest'
import { Title } from './../../../components/Title'

export const CardDetail = () => {

    const { id } = useParams([])

    const [detail, setDetail] = useState([])

    useEffect(() => {
        //HTTP Request
        getDetail()
    }, [])

    const getDetail = async () => {
        try {
            const response = await requestHttp('get', `/experiences/detail/${id}`)
            setDetail(response.experience)
        } catch (error) {
            console.error(error)
        }
    }

    return (

        <article className="card-detail">
            <Title label={detail.title}/>
            <img alt="detail" src={detail.image} />
            <p>
                {
                    detail.description
                }
            </p>
        </article>
    )
}