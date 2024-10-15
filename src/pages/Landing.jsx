import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <>
      <Container className='d-flex justify-content-center align-items-center py-5 px-4'>
        <Row className='mt-5 d-flex justify-content-center align-items-center'>

          <Col md={6}>
            <h2 className='mt-md-5'>Welcome to <span className='text-warning'>Media Player</span></h2>
            <p style={{ textAlign: 'justify' }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam fuga numquam ratione nobis reiciendis tenetur explicabo praesentium, eligendi voluptatibus laboriosam deserunt esse eaque? Ex nesciunt libero iusto totam sapiente sequi? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi deleniti tenetur veniam, nihil est quo beatae praesentium saepe amet alias, sunt quae excepturi pariatur quas maiores repudiandae, totam iure vero!</p>

           <Link to={'/home'}> <button className='btn btn-warning mt-5'>Get Started</button></Link>

          </Col>
          <Col md={1}></Col>
          <Col md={5} className='d-flex justify-content-center mt-5 mt-md-0'>
            <img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="no image" className='w-75' />
          </Col>
        </Row>
      </Container>


      <Container className='my-5'>
        <h2 className='text-center'>Features</h2>
        <Row>
          <Col md={1}></Col>
          <Col md={10}>
            <Row className='mt-5 d-flex justify-content-center align-items-center'>
              <Col md={4} className='p-3'>
                <Card style={{ width: '100%' }} className='p-3'>
                  <Card.Img variant="top" src="https://i.pinimg.com/originals/48/c6/12/48c61262980bb7dbf2557940d41c7d0b.gif" className='w-100%' height={'300px'} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>

                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} className='p-3'>
                <Card style={{ width: '100%' }} className='p-3'>
                  <Card.Img variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" className='w-100' height={'300px'} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>

                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} className='p-3'>
                <Card style={{ width: '100%' }} className='p-3'>
                  <Card.Img variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" className='w-100' height={'300px'} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>

                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col md={1} ></Col>
        </Row>
      </Container>

      <div className="container">
        <div className="row p-md-5 p-3">
         
          <div className="col border border-secondary border-2 rounded p-md-5 p-4">
              <div className="row">
                <div className="col-md-6">
                  <h2 className='text-warning'>Simple fast and PowerFul</h2>
                  <p><span className='fs-4'>Play Everything</span> : Amet consectetur adipisicing elit. Autem veritatis totam tempore expedita! Quae quam, commodi dolorum iste unde atque alias debitis voluptates nesciunt</p>
                  <p className='mt-2'><span className='fs-4'>Play Everything</span> : Amet consectetur adipisicing elit. Autem veritatis totam tempore expedita! Quae quam, commodi dolorum iste unde atque alias debitis voluptates nesciunt</p>
                  <p className='mt-2'><span className='fs-4'>Play Everything</span> : Amet consectetur adipisicing elit. Autem veritatis totam tempore expedita! Quae quam, commodi dolorum iste unde atque alias debitis voluptates nesciunt</p>
                </div>
                <div className="col-md-6">
                <iframe width="100%" height="414" src="https://www.youtube.com/embed/roz9sXFkTuE" title="Aaj Ki Raat | Stree 2 | Tamannaah Bhatia | Sachin-Jigar | Madhubanti | Divya | Amitabh | 15th August" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
              </div>
          </div>
          
        </div>
      </div>

    </>
  )
}

export default Landing