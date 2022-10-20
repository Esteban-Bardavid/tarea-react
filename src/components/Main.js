import "./Main.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';




function Main() {
  return (
    <main>
      <section>
        <article className="cards">
          <Card className="card-body" style={{ width: '16rem' }}>
            <Card.Img variant="top" src="https://i0.wp.com/eltallerdehector.com/wp-content/uploads/2022/06/cd939-logo-instagram-png.png?fit=512%2C512&ssl=1" />
            <Card.Body>
              <Card.Title>Instagram</Card.Title>
              <Card.Text>
                Instagram ​ es una aplicación y red social de origen estadounidense, propiedad de Meta. Creada por Kevin Systrom y Mike Krieger, fue lanzada el 6 de octubre de 2010.
              </Card.Text>
              <a href="https://www.instagram.com/" target="_blank"><Button variant="primary">Abrir Instagram</Button></a>
            </Card.Body>
          </Card>
          <Card className="card-body" style={{ width: '16rem' }}>
            <Card.Img variant="top" src="https://cdn.icon-icons.com/icons2/1826/PNG/512/4202110facebooklogosocialsocialmedia-115707_115594.png" />
            <Card.Body>
              <Card.Title>Facebook</Card.Title>
              <Card.Text>
                Facebook es un servicio de redes y medios sociales en línea estadounidense con sede en Menlo Park, California. Su sitio web fue lanzado el 4 de febrero de 2004 por Mark Zuckerberg
              </Card.Text>
              <a href="https://es-la.facebook.com/" target="_blank"><Button variant="primary">Abrir Facebook</Button></a>
            </Card.Body>
          </Card>


          <Card className="card-body" style={{ width: '16rem' }}>
            <Card.Img variant="top" src="https://freepngimg.com/save/19531-youtube-png-clipart/512x512" />
            <Card.Body>
              <Card.Title>Youtube</Card.Title>
              <Card.Text>
                YouTube es un sitio web de origen estadounidense dedicado a compartir videos. Fue creado por tres antiguos empleados de PayPal en febrero de 2005 y, en  2006 fue adquirido por Google Inc.
              </Card.Text>
              <a href="https://www.youtube.com/" target="_blank"><Button variant="primary">Abrir YouTube</Button></a>
            </Card.Body>
          </Card>
          <Card className="card-body" style={{ width: '16rem' }}>
            <Card.Img variant="top" src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/345_Twitter_logo-512.png" />
            <Card.Body>
              <Card.Title>twitter</Card.Title>
              <Card.Text>
                Twitter es un servicio de microblogueo, con sede en San Francisco, California, Twitter, Inc. fue creado originalmente en California, pero está bajo la jurisdicción de Delaware desde 2007.
              </Card.Text>
              <a href="https://twitter.com" target="_blank"><Button variant="primary">Abrir Twitter</Button></a>
            </Card.Body>
          </Card>
        </article>
        <article>
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2020/06/30/14/37/facebook-5356593_960_720.png"
          alt="First slide"
        />
        <Carousel.Caption  className="carousel-items">
          <h3 className="h3-carousel">First slide label</h3>
          <p className="p-carousel">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2020/06/30/14/37/facebook-5356593_960_720.png"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className="h3-carousel">Second slide label</h3>
          <p className="p-carousel">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2020/06/30/14/37/facebook-5356593_960_720.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className="h3-carousel">Third slide label</h3>
          <p className="p-carousel">
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  

        </article>
      </section>

      <aside>
        <section>
        <iframe width="540" height="300" src="https://www.youtube.com/embed/1VDM4G15DQk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </section> 
        <section >
        <img className="asideImage" src="https://64.media.tumblr.com/af19e946da2e294303621aa572a00cf0/449a5d2cf27a635d-5c/s1280x1920/6eb3dbfd1e1ec1c941e6c9ec11484d1aec651f47.jpg" alt=" "></img>
        </section>
        <section>
        <img className="asideImage2" src="https://blog.facialix.com/wp-content/uploads/2021/11/reactjs.jpg" alt=" "></img>
        </section>
      </aside>

    </main>

  );

}

export default Main;