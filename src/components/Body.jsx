import React from 'react'
import { useState } from 'react'
import Card from './Card'

export default function Body() {

    const [productosDestacados, setproductosDestacados] = useState([
        {
            id: 1,
            titulo: "Correa para perro Crag Leash",
            imagen: "https://cdn.shopify.com/s/files/1/0185/9786/products/Web-40404-Crag-Leash-Sunset.jpg?v=1619245217",
            descripcion: "La Correa Crag® Leash (antes conocida como Slackline® Leash) es una correa para perro de longitud ajustable que puede llevarse en la mano o en la cintura. Se extiende completamente hasta 1.8 metros para paseos relajados o más distancia mientras corre, también puedes acortar la correa hasta los 1 metro cuando se busca mantener a su cachorro cerca. Ajuste fácilmente la longitud sobre la marcha con el deslizador de metal."
        },
        {
            id: 2,
            titulo: "Paquete de 10 huesos para perro de talla mediana/grande",
            imagen: "https://m.media-amazon.com/images/I/91HzbZNycgL._AC_SY679_.jpg",
            descripcion: "Paquete de 10 huesos para morder de 21 cm. Los huesos de piel bovina prensada de Zolux son sanos y garantizan la higiene bucodental de su perro. ¡Le encantarán! "
        },
        {
            id: 3,
            titulo: "Rascador gimnasio para gatos",
            imagen: "https://http2.mlstatic.com/D_NQ_NP_995199-MLA41693718777_052020-O.jpg",
            descripcion: "Rascadores para Gatos ~ Edén Gatuno • el paraíso de tu mascota!"
        },
        {
            id: 4,
            titulo: "Collar para gatos personalizado",
            imagen: "https://m.media-amazon.com/images/I/71+0N0kDR3L._AC_SX466_.jpg",
            descripcion: "Personalizado con la información de tu gato: añade cualquier texto que desees, incluyendo el nombre de tu gato, tu número de teléfono, una dirección o sé creativo. No te preocupes por perderlo. El anillo D de acero inoxidable se puede colgar con una campana o una cuerda de tracción. "
        }
    ])

    return (
        <div>
            {
                productosDestacados.map(producto => 
                    <Card
                        key={producto.id}
                        titulo={producto.titulo}
                        imagen={producto.imagen}
                        descripcion={producto.descripcion}    
                    />
                )
            }
        </div>
    )
}
