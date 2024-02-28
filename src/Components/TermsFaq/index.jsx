import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import './style.css'
import { useTranslation } from 'react-i18next';
const TermsFaq = () => {
    const { t } = useTranslation('termsFaq')
    return (
        <div className="container">
            <div className="terms-faq">
                <div className="terms-faq-header text-center">
                    <h3>{t('frequently asked questions')}</h3>
                </div>
                <div className="terms-faq">
                    <Accordion defaultActiveKey={null}>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>
                                {t('lorem Ipsum is simply dummy text of the printing and type?')}
                            </Accordion.Header>
                            <Accordion.Body>
                                {t("lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer")}
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>
                                {t('lorem Ipsum is simply dummy text of the printing and type?')}
                            </Accordion.Header>
                            <Accordion.Body>
                                {t("lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer")}
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <Accordion defaultActiveKey={null}>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header className='accordion-header'>
                                {t('lorem Ipsum is simply dummy text of the printing and type?')}
                            </Accordion.Header>
                            <Accordion.Body>
                                {t("lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer")}
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>
                                {t('lorem Ipsum is simply dummy text of the printing and type?')}
                            </Accordion.Header>
                            <Accordion.Body>
                                {t("lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer")}
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <Accordion defaultActiveKey={null}>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header className='accordion-header'>
                                {t('lorem Ipsum is simply dummy text of the printing and type?')}
                            </Accordion.Header>
                            <Accordion.Body>
                                {t("lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer")}
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>
                                {t('lorem Ipsum is simply dummy text of the printing and type?')}
                            </Accordion.Header>
                            <Accordion.Body>
                                {t("lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer")}
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
        </div>
    )
}

export default TermsFaq