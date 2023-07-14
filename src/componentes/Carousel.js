import { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {setIndex(selectedIndex);};
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>

      <Carousel.Item>
        <img className="d-block w-100" alt="First slide" src="https://www.maratonacapulco.mx/wp-content/uploads/2017/10/BANNER-BAR-2.png"/>
        <Carousel.Caption>
          <h3>Promoção: caipirinha dupla!</h3>
          <p>Peça 2 e pague 1 caipirinha.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" alt="Second slide" src="https://iachettis.com/wp-content/themes/CabralPro/assets/img/inner-banner.jpg"/>
        <Carousel.Caption>
          <h3>Comida típica</h3>
          <p>Venha provar o delicioso caldo de mocotó.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" alt="Third slide" src="https://www.rathiga.co.uk/wp-content/uploads/2023/06/banner.jpg"/>
        <Carousel.Caption>
          <h3>Refeição</h3>
          <p>Pratos deliciosos e bem servidos.</p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
}

export default ControlledCarousel;