import React from 'react'
import { Score } from '../../../components/Score'
import { Link } from 'react-router-dom'

export const Places = ({ _id, score, users, description, image, place }) => (
    <Link to={`/detail/${_id}`}>
        <section className="places">
            <img width="200" alt="place" src={image} />
            <div>
                <h2>{description}</h2>
                <h4>{place}</h4>
                <Score score={score} users={users} />
            </div>
        </section>
    </Link>
)