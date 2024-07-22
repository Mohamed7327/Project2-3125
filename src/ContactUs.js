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
                    <h3>John</h3>
                    <h4>{t('contactUs.johnDoe.position')}</h4>
                    <h4>someonesEmail@email.com</h4>
                </div>
                <div className="col">
                    <iframe width="600px" height="400px" frameborder="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22402.113473252903!2d-75.70700106523437!3d45.424175600000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce0506f9debc19%3A0xca4076927a053bbd!2s75%20Laurier%20Ave%20E%2C%20Ottawa%2C%20ON%20K1N%206N6!5e0!3m2!1sen!2sca!4v1717956193508!5m2!1sen!2sca" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    <h3>Our Office</h3>
                </div>
                <div className="col">
                    <img src={contactUsImg2} alt={t('contactUs.imgAlt2')} className="contactUsImg2" />
                    <h3>Jane Doe</h3>
                    <h4>{t('contactUs.janeDoe.position')}</h4>
                    <h4>helpDesk@email.com</h4>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
