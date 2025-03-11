import React, { useState } from "react";
import Picture from "./Picture";

import Button from "./Button";
import ReactImageMagnify from "react-image-magnify";
import { Link, useParams } from "react-router-dom";
import Mariposa from "../../public/mariposa.webp";
import HelloKitty from "../../public/hello_kitty.webp";
import Buho from "../../public/buho.jpg";

const ContainerCustomer = () => {
  let params = useParams();

  let idUrl = params.id;

  //console.log(params.id);

  const car = { type: "Fiat", model: "500", color: "white" };

  const KittyPvc = {
    id: 1,
    nombre_producto: "Lampara Hello Kitty PVC",
    precio: 4500,
    img: HelloKitty,
    sku: 750025737355,
    item: 70730007,
    discount: 3825,
    oferta: 15,
    infoOne:
      "luces de la noche tiene una ronda, guisante como el cuerpo, suelas de color naranja con dibujos de corazón, y una boca que sobresale, haciendo una luz linda! La luz hasta el pato (pollo) diseño de manos abiertas, como un bebé niños en busca de un abrazo de amor de su madre. Esta luz pato tamaño de la mano perfecta, no sólo es una lámpara de animales junto a la cama práctica, un dormitorio kawaii, aula de la universidad o la decoración de la habitación de escritorio dormitorio estética, sino también un juguete squishy muy descomprimido. Qué novedad cosas y accesorios.",
    infoTwo:
      "Lámparas regulables Duck Cute : Puede tocar las luces nocturnas ducky encantador con 20 minutos temporizador elección, no hay necesidad de apagarlo manualmente. 2 niveles diferentes de brillo: Puede tocar el cuerpo del pato dodo para ajustar el brillo de estas lindas luces en la marcha débil y normal. Iluminación cálida y suave, le permiten dormir fácilmente en un ambiente cálido y acogedor. Por supuesto, también se puede utilizar durante el día como una lámpara de luz de noche lindo o una luz decorativa para su habitación.",
  };

  let matrizBidimensional = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  // console.log(matrizBidimensional[0][2])

  const MariposaPvc = {
    id: 2,
    nombre_producto: "Lampara Mariposa PVC",
    precio: 4200,
    img: Mariposa,
    sku: 8885737355,
    item: 374859,
    discount: 3360,
    oferta: 20,
    infoOne:
      "luces de la noche tiene una ronda, guisante como el cuerpo, suelas de color naranja con dibujos de corazón, y una boca que sobresale, haciendo una luz linda! La luz hasta el pato (pollo) diseño de manos abiertas, como un bebé niños en busca de un abrazo de amor de su madre. Esta luz pato tamaño de la mano perfecta, no sólo es una lámpara de animales junto a la cama práctica, un dormitorio kawaii, aula de la universidad o la decoración de la habitación de escritorio dormitorio estética, sino también un juguete squishy muy descomprimido. Qué novedad cosas y accesorios.",
    infoTwo:
      "Lámparas regulables Duck Cute : Puede tocar las luces nocturnas ducky encantador con 20 minutos temporizador elección, no hay necesidad de apagarlo manualmente. 2 niveles diferentes de brillo: Puede tocar el cuerpo del pato dodo para ajustar el brillo de estas lindas luces en la marcha débil y normal. Iluminación cálida y suave, le permiten dormir fácilmente en un ambiente cálido y acogedor. Por supuesto, también se puede utilizar durante el día como una lámpara de luz de noche lindo o una luz decorativa para su habitación.",
  };

  const BuhoPvc = {
    id: 3,
    nombre_producto: "Lampara Buho PVC",
    precio: 4700,
    img: Buho,
    sku: 6839395737355,
    item: 7102399,
    discount: 3901,
    oferta: 17,
    infoOne:
      "luces de la noche tiene una ronda, guisante como el cuerpo, suelas de color naranja con dibujos de corazón, y una boca que sobresale, haciendo una luz linda! La luz hasta el pato (pollo) diseño de manos abiertas, como un bebé niños en busca de un abrazo de amor de su madre. Esta luz pato tamaño de la mano perfecta, no sólo es una lámpara de animales junto a la cama práctica, un dormitorio kawaii, aula de la universidad o la decoración de la habitación de escritorio dormitorio estética, sino también un juguete squishy muy descomprimido. Qué novedad cosas y accesorios.",
    infoTwo:
      "Lámparas regulables Duck Cute : Puede tocar las luces nocturnas ducky encantador con 20 minutos temporizador elección, no hay necesidad de apagarlo manualmente. 2 niveles diferentes de brillo: Puede tocar el cuerpo del pato dodo para ajustar el brillo de estas lindas luces en la marcha débil y normal. Iluminación cálida y suave, le permiten dormir fácilmente en un ambiente cálido y acogedor. Por supuesto, también se puede utilizar durante el día como una lámpara de luz de noche lindo o una luz decorativa para su habitación.",
  };

  return (
    <div className="container mt-5 shadow-sm bg-white p-4 rounded mb-5">
      <div className="container d-flex contenedor">
        <div className="picture-box">
          {idUrl == 1 ? (
            <ReactImageMagnify
              className="img-fluid shadow-sm patito"
              {...{
                smallImage: {
                  alt: KittyPvc.nombre_producto,
                  isFluidWidth: true,
                  src: KittyPvc.img,
                },
                largeImage: {
                  src: KittyPvc.img,
                  width: 1000,
                  height: 1000,
                },
              }}
            />
          ) : null}

          {idUrl == 2 ? (
            <ReactImageMagnify
              className="img-fluid shadow-sm patito"
              {...{
                smallImage: {
                  alt: MariposaPvc.nombre_producto,
                  isFluidWidth: true,
                  src: MariposaPvc.img,
                },
                largeImage: {
                  src: MariposaPvc.img,
                  width: 1000,
                  height: 1000,
                },
              }}
            />
          ) : null}

          {idUrl == 3 ? (
            <ReactImageMagnify
              className="img-fluid shadow-sm patito"
              {...{
                smallImage: {
                  alt: BuhoPvc.nombre_producto,
                  isFluidWidth: true,
                  src: BuhoPvc.img,
                },
                largeImage: {
                  src: BuhoPvc.img,
                  width: 1000,
                  height: 1000,
                },
              }}
            />
          ) : null}
        </div>
        <div className="summary">
          <div className="container info-product m-0">
            <h2 className="title text-formal-title mb-3">
              {idUrl == 1 ? KittyPvc.nombre_producto : null}
              {idUrl == 2 ? MariposaPvc.nombre_producto : null}
              {idUrl == 3 ? BuhoPvc.nombre_producto : null}
            </h2>
            <p className="text-formal m-0">
              SKU:
              {idUrl == 1 ? KittyPvc.sku : null}
              {idUrl == 2 ? MariposaPvc.sku : null}
              {idUrl == 3 ? BuhoPvc.sku : null}
            </p>
            <p className="text-formal m-0">
              Item:
              {idUrl == 1 ? KittyPvc.item : null}
              {idUrl == 2 ? MariposaPvc.item : null}
              {idUrl == 3 ? BuhoPvc.item : null}
            </p>

            <div className="price_discount mt-3">
              <p className="text-formal-title fs-4">
                <span className="text-danger">
                  -{idUrl == 1 ? KittyPvc.oferta : null}
                  {idUrl == 2 ? MariposaPvc.oferta : null}
                  {idUrl == 3 ? BuhoPvc.oferta : null}%{" "}
                </span>
                <b>
                  ${idUrl == 1 ? KittyPvc.discount : null}
                  {idUrl == 2 ? MariposaPvc.discount : null}
                  {idUrl == 3 ? BuhoPvc.discount : null}
                </b>{" "}
                <span className="discount">
                  ${idUrl == 1 ? KittyPvc.precio : null}
                  {idUrl == 2 ? MariposaPvc.precio : null}
                  {idUrl == 3 ? BuhoPvc.precio : null}
                </span>
              </p>
            </div>

            <div className="container btns d-flex">
              <Button
                type="button"
                clase="btn btn-cart"
                value="Agregar al carrito"
              />
              <Button
                type="button"
                clase="btn btn-shop"
                value="Comprar ahora"
              />
            </div>

            <div className="informacion text-formal">
              <h3>Información del producto</h3>
              <li className="mt-3 mb-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur aut voluptatibus fuga accusantium maiores assumenda
                quaerat molestias asperiores unde enim labore ex magni facere
                neque autem cum modi recusandae mollitia ratione ducimus porro
                iure, sequi possimus. Aut iste ut debitis maxime expedita
                accusamus dolor, ipsum, corrupti delectus possimus, dolore
                cumque.
              </li>

              <li>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Asperiores nesciunt qui eligendi soluta libero suscipit
                deleniti, accusamus molestiae error possimus praesentium natus
                provident perferendis beatae est nemo animi a, totam hic?
                Inventore ipsam modi, doloremque voluptatum neque placeat
                delectus nesciunt libero, tempore exercitationem blanditiis
                harum praesentium optio nostrum quasi, saepe rem dignissimos
                aliquam laudantium voluptatibus cumque consequatur veritatis.
                Iusto officiis ea veritatis temporibus quas, tenetur rem hic
                ipsum, dicta voluptatem doloremque rerum corrupti provident!
                Minima eos asperiores dolorem omnis quisquam.
              </li>
            </div>
          </div>

          <div className="container">
            <Link to="/react-app" className="btn btn-primary mb-3 mt-3">
              Regresar al inicio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerCustomer;
