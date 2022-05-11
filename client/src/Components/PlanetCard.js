import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

//change to each planet ID

function PlanetCard({ planet }) {

    const { id, image, about, name } = planet
    return (
        <div>
            <Link to={`/planets/${id}`}> 
                <img src={image} />
            </Link>
        </div>
    )
}

export default PlanetCard