import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import './style.css'
const TermsFaq = () => {
    return (
        <div className="container">
            <div className="terms-faq">
                <div className="terms-faq-header text-center">
                    <h3>Tez-tez verilən suallar</h3>
                </div>
                <div className="terms-faq">
                    <Accordion defaultActiveKey={null}>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Lorem Ipsum is simply dummy text of the printing and type?
                            </Accordion.Header>
                            <Accordion.Body>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Lorem Ipsum is simply dummy text of the printing and type?</Accordion.Header>
                            <Accordion.Body>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <Accordion defaultActiveKey={null}>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header className='accordion-header'>Lorem Ipsum is simply dummy text of the printing and type?</Accordion.Header>
                            <Accordion.Body>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Lorem Ipsum is simply dummy text of the printing and type?</Accordion.Header>
                            <Accordion.Body>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <Accordion defaultActiveKey={null}>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header className='accordion-header'>Lorem Ipsum is simply dummy text of the printing and type?</Accordion.Header>
                            <Accordion.Body>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Lorem Ipsum is simply dummy text of the printing and type?</Accordion.Header>
                            <Accordion.Body>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
        </div>
    )
}

export default TermsFaq