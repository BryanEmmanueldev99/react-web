import React from 'react'
import Picture from './Picture'
import Lampara from '../../public/mariposa.webp'
import Button  from './Button'
import ReactImageMagnify from 'react-image-magnify'

const ContainerCustomer = () => {

  return (
    <div className='container mt-5 shadow-sm bg-white p-4 rounded mb-5'>
        <div className="container d-flex contenedor">
            <div className="picture-box">
                <ReactImageMagnify className='img-fluid shadow-sm patito'
                    {...{
                      smallImage: {
                        alt: 'Wristwatch by Ted Baker London',
                        isFluidWidth: true,
                        src: Lampara
                    },
                    largeImage: {
                        src: Lampara,
                        width: 1000,
                        height: 1000
                      }
                    }}
                 />
            </div>
            <div className="summary">
                  <div className="container info-product m-0">
                    <h2 className="title text-formal-title mb-3">Lámpara de PVC</h2>
                    <p className='text-formal m-0'>SKU: 750025737355</p>
                    <p className='text-formal m-0'>Item: 70730007</p>

                    <div className="price_discount mt-3">
                         <p className='text-formal-title fs-4'><span className='text-danger'>-14%</span> <b> $3536.32</b> <span className='discount'>$4,112.56</span></p>    
                    </div>

                    <div className="container btns d-flex">
                        <Button type="button" clase="btn btn-cart" value="Agregar al carrito"/>
                        <Button type="button" clase="btn btn-shop" value="Comprar ahora"/>
                    </div>

                    <div className="informacion text-formal">
                        <h3>Información del producto</h3>
                        <li className='mt-3 mb-3'>
                        luces de la noche tiene una ronda, guisante como el cuerpo, suelas de color naranja con dibujos de corazón, y una boca que sobresale, haciendo una luz linda! La luz hasta el pato (pollo) diseño de manos abiertas, como un bebé niños en busca de un abrazo de amor de su madre. Esta luz pato tamaño de la mano perfecta, no sólo es una lámpara de animales junto a la cama práctica, un dormitorio kawaii, aula de la universidad o la decoración de la habitación de escritorio dormitorio estética, sino también un juguete squishy muy descomprimido. Qué novedad cosas y accesorios.
                        </li>

                        <li>
                        Lámparas regulables Duck Cute : Puede tocar las luces nocturnas ducky encantador con 20 minutos temporizador elección, no hay necesidad de apagarlo manualmente. 2 niveles diferentes de brillo: Puede tocar el cuerpo del pato dodo para ajustar el brillo de estas lindas luces en la marcha débil y normal. Iluminación cálida y suave, le permiten dormir fácilmente en un ambiente cálido y acogedor. Por supuesto, también se puede utilizar durante el día como una lámpara de luz de noche lindo o una luz decorativa para su habitación.
                        </li>
                    </div>
                  </div>
            </div>
        </div>
    </div>
  )
}

export default ContainerCustomer
