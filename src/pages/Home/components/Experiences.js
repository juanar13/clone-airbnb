import React, { useEffect, useState } from 'react'
import { Places } from './Places'
import { requestHttp } from '../../../config/HttpRequest'


export const Experiences = () => {

    const [experiences, setExperiences] = useState([])

    useEffect(()=> {
        //HTTP Request
        getAllExperiences()
    }, [])

    const getAllExperiences = async () => {
        try {
            const response = await requestHttp('get', '/experiences')
            setExperiences(response.experiences)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <section className="experiences">
            {
                experiences.map(el => <Places key={el.id} {...el} />)
            }
        </section>
    )
}