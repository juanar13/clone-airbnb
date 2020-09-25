import React, { useEffect, useState } from 'react'
import { Card } from './Card'
import { requestHttp } from '../../../config/HttpRequest'

export const Ranking = () => {
    const [top5, setTop5] = useState([])

    useEffect(() => {
        //HTTP Request
        getTop5()
    }, [])

    const getTop5 = async () => {
        try {
            const response = await requestHttp('get', '/experiences/top5')
            setTop5(response.top5)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <section className="ranking">
            {
                top5.map((el, key) => <Card key={el._id} _id={el._id} {...el} />)
            }
            {
                //top5.map((el, key) => <Card key={key} id={el._id} image={el.image} description={el.description} place={el.place} />)
            }
        </section>
    )

}

