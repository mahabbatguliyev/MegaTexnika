import React, { useEffect, useState } from 'react';
import './style.css';
import { useTranslation } from 'react-i18next';
import Aos from 'aos';
import 'aos/dist/aos.css';

const ContactSection = () => {
    const { t } = useTranslation('contact');
    const { t: t2 } = useTranslation('hero');

    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        companyName: '',
        phone: ''
    });
    const [formErrors, setFormErrors] = useState({});
    const [showThankYouMessage, setShowThankYouMessage] = useState(false);

    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            setIsFormSubmitted(true);
            setShowThankYouMessage(true);
            setFormData({
                fullName: '',
                email: '',
                companyName: '',
                phone: ''
            });
            setFormErrors({});
            setTimeout(() => {
                setShowThankYouMessage(false);
            }, 5000);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        if (value !== '') {
            setFormErrors({ ...formErrors, [name]: '' });
        } else if (!formErrors[name]) {
            setFormErrors({ ...formErrors, [name]: t(`please enter your ${name}`) });
        }
    };

    const validateForm = () => {
        let errors = {};
        let isValid = true;
        if (!formData.fullName) {
            errors.fullName = t('please enter your full name');
            isValid = false;
        }

        if (!formData.email) {
            errors.email = t('please enter your email');
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = t('please enter your email');
            isValid = false;
        }

        if (!formData.companyName) {
            errors.companyName = t('please enter your company name');
            isValid = false;
        }

        if (!formData.phone) {
            errors.phone = t('please enter your phone number');
            isValid = false;
        }

        setFormErrors(errors);
        return isValid;
    };

    return (
        <section id='contact'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-md-3">
                        <div className="contact-text" data-aos="fade-right">
                            <h5>{t('contact us !')}</h5>
                            <p>{t2("lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled")}</p>
                            <form onSubmit={handleSubmit}>
                                {formErrors.fullName && <p className="error-message-cs error-name-cs">{formErrors.fullName}</p>}
                                <div className="form-top d-flex">
                                    <input type="text"
                                        name="fullName"
                                        placeholder={t('first name and last name')}
                                        value={formData.fullName}
                                        onChange={handleChange}
                                    />
                                    <input type="text"
                                        name="companyName"
                                        placeholder={t('company name')}
                                        value={formData.companyName}
                                        onChange={handleChange}
                                    />
                                    {formErrors.companyName && <p className="error-message-cs error-company-cs">{formErrors.companyName}</p>}

                                </div>
                                {formErrors.email && <p className="error-message-cs error-email-cs">{formErrors.email}</p>}
                                <div className="form-bottom d-flex">
                                    <input type="text"
                                        name="email"
                                        placeholder={t('e-mail')}
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                    <input type="text"
                                        placeholder={t('phone')}
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        pattern="[0-9]{10}"
                                    />
                                    {formErrors.phone && <p className="error-message-cs error-phone-cs">{formErrors.phone}</p>}
                                </div>
                                {showThankYouMessage && (
                                    <p style={{ color: 'green' }}>{t('thank you for contacting us. We will contact you as soon as possible.')}</p>
                                )}
                                <button type='submit'>{t('send')}</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-9" data-aos="fade-left">
                        <div className="contact-img">
                            <img src="./src/assets/img/image 22.svg" alt="Contact img" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
