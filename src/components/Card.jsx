import React from 'react'

export default function Card({ titulo, imagen, descripcion }) {
    return (
        <div>
            <img width="300px" src={ imagen } />
            <h2>{ titulo }</h2>
            <p>{ descripcion }</p>
        </div>
    )
}
