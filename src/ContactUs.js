import React from 'react';
import { useTranslation } from 'react-i18next';
import contactUsImg1 from './img/contactUsImg1.png';
import contactUsImg2 from './img/contactUsImg2.png';

const ContactUs = () => {
    const { t } = useTranslation();

    return (
        <div className="contactUs" id="contactUs">
            <h2>{t('contactUs.title')}</h2>
            <div className="row">
                <div className="col">
                    <img src={contactUsImg1} alt={t('contactUs.imgAlt1')} className="contactUsImg1" />
                </div>
                <div className="col">
                    <img src={contactUsImg2} alt={t('contactUs.imgAlt2')} className="contactUsImg2" />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h3>John</h3>
                    <h4>{t('contactUs.johnDoe.position')}</h4>
                    <h4>someonesEmail@email.com</h4>
                </div>
                <div className="col">
                    <h3>Jane Doe</h3>
                    <h4>{t('contactUs.janeDoe.position')}</h4>
                    <h4>helpDesk@email.com</h4>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
