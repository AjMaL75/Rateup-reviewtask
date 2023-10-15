
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
        <Row>
            <Col lg={6} style={{padding:'150px 60px 60px 60px '}} >
                <div>
                    <h2 style={{color:'purple'}}>Feedback</h2>
                    <p>We are honestly requested to you take a survey review about our app for improving some kind of changes.Feel Free to answer the questions we are assigned to you based on your own experience and opinion.Every answer would be very appreciated.Thank you for your time.</p>
                    <Link to={'/addreview'}><button className='btn btn-light text-white' style={{backgroundColor:'purple'}}>Take a Survey for us</button></Link>
                </div>
            </Col>
            <Col lg={6}><img src="https://i.postimg.cc/W1sbktjY/organic-flat-feedback.jpg" alt="" width={100} height={100} style={{width:'100%' ,height:'100%'}} /></Col>
        </Row>
    </>
  )
}

export default Home