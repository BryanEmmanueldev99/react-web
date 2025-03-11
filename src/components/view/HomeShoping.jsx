import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ProductosList from "../ProductosList";
import { useState } from "react";
import Mariposa from "../../../public/mariposa.webp";
import HelloKitty from "../../../public/hello_kitty.webp";
import Buho from "../../../public/buho.jpg";
import { Link } from "react-router-dom";

const HomeShoping = () => {
  const [produtos, setProductos] = useState([
    {
      id: 1,
      nombre_producto: "Lampara Hello Kitty PVC",
      precio: 4500,
      img: HelloKitty,
      sku: 750025737355,
      item: 70730007,
      discount: 3000,
      infoOne:
        "luces de la noche tiene una ronda, guisante como el cuerpo, suelas de color naranja con dibujos de corazón, y una boca que sobresale, haciendo una luz linda! La luz hasta el pato (pollo) diseño de manos abiertas, como un bebé niños en busca de un abrazo de amor de su madre. Esta luz pato tamaño de la mano perfecta, no sólo es una lámpara de animales junto a la cama práctica, un dormitorio kawaii, aula de la universidad o la decoración de la habitación de escritorio dormitorio estética, sino también un juguete squishy muy descomprimido. Qué novedad cosas y accesorios.",
      infoTwo:
        "Lámparas regulables Duck Cute : Puede tocar las luces nocturnas ducky encantador con 20 minutos temporizador elección, no hay necesidad de apagarlo manualmente. 2 niveles diferentes de brillo: Puede tocar el cuerpo del pato dodo para ajustar el brillo de estas lindas luces en la marcha débil y normal. Iluminación cálida y suave, le permiten dormir fácilmente en un ambiente cálido y acogedor. Por supuesto, también se puede utilizar durante el día como una lámpara de luz de noche lindo o una luz decorativa para su habitación.",
    },
    {
      id: 2,
      nombre_producto: "Lampara Mariposa PVC",
      precio: 4200,
      img: Mariposa,
      sku: 750025737355,
      item: 70730007,
      discount: 3000,
      infoOne:
        "luces de la noche tiene una ronda, guisante como el cuerpo, suelas de color naranja con dibujos de corazón, y una boca que sobresale, haciendo una luz linda! La luz hasta el pato (pollo) diseño de manos abiertas, como un bebé niños en busca de un abrazo de amor de su madre. Esta luz pato tamaño de la mano perfecta, no sólo es una lámpara de animales junto a la cama práctica, un dormitorio kawaii, aula de la universidad o la decoración de la habitación de escritorio dormitorio estética, sino también un juguete squishy muy descomprimido. Qué novedad cosas y accesorios.",
      infoTwo:
        "Lámparas regulables Duck Cute : Puede tocar las luces nocturnas ducky encantador con 20 minutos temporizador elección, no hay necesidad de apagarlo manualmente. 2 niveles diferentes de brillo: Puede tocar el cuerpo del pato dodo para ajustar el brillo de estas lindas luces en la marcha débil y normal. Iluminación cálida y suave, le permiten dormir fácilmente en un ambiente cálido y acogedor. Por supuesto, también se puede utilizar durante el día como una lámpara de luz de noche lindo o una luz decorativa para su habitación.",
    },
    {
      id: 3,
      nombre_producto: "Lampara Buho PVC",
      precio: 4700,
      img: Buho,
      sku: 750025737355,
      item: 70730007,
      discount: 3000,
      infoOne:
        "luces de la noche tiene una ronda, guisante como el cuerpo, suelas de color naranja con dibujos de corazón, y una boca que sobresale, haciendo una luz linda! La luz hasta el pato (pollo) diseño de manos abiertas, como un bebé niños en busca de un abrazo de amor de su madre. Esta luz pato tamaño de la mano perfecta, no sólo es una lámpara de animales junto a la cama práctica, un dormitorio kawaii, aula de la universidad o la decoración de la habitación de escritorio dormitorio estética, sino también un juguete squishy muy descomprimido. Qué novedad cosas y accesorios.",
      infoTwo:
        "Lámparas regulables Duck Cute : Puede tocar las luces nocturnas ducky encantador con 20 minutos temporizador elección, no hay necesidad de apagarlo manualmente. 2 niveles diferentes de brillo: Puede tocar el cuerpo del pato dodo para ajustar el brillo de estas lindas luces en la marcha débil y normal. Iluminación cálida y suave, le permiten dormir fácilmente en un ambiente cálido y acogedor. Por supuesto, también se puede utilizar durante el día como una lámpara de luz de noche lindo o una luz decorativa para su habitación.",
    },
  ]);

  return (
    <div>
      <Navbar></Navbar>
      <div className="container mb-5">
        <div className="mb-5 mt-5">
          <h2 className="text-center">Lo que a nuestros clientes les gusta</h2>
        </div>

        <div className="mb-5 mt-5 listado-productos">
          {produtos.map((produto) => {
            return (
              <Link className="btn" to={`/react-app/detalles-producto/${produto.id}`}>
                  <div class="card shadow">
                <div className="container-foto m-0 p-0">
                <img
                  class="card-img-top img-fluid"
                  src={produto.img}
                  alt={produto.nombre_producto}
                />
                </div>
                <div class="card-body">
                  <h4 class="card-title">{produto.nombre_producto}</h4>
                  <p>SKU: {produto.sku}</p>
                  <p>Item: {produto.item}</p>
                  <span class="card-text"><b>${produto.precio}</b></span>
                </div>
              </div>
              </Link>
            );
          })}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default HomeShoping;
