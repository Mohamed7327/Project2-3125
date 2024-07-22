import React from 'react';
import { useTranslation } from 'react-i18next';
import ContactUs from './ContactUs';

const FAQ = () => {
  const { t } = useTranslation();

  return (
    <div className="container faq">
        <div className="row" id="row">
            <div className="col" id="col">
                <p>
                    <h2 className="question">{t('faq.question1')}</h2>
                    <p className="answer">{t('faq.answer1')}</p>
                </p>

                <p>
                    <h2 className="question">{t('faq.question2')}</h2>
                    <p className="answer">{t('faq.answer2')}</p>
                </p>
                
                <p>
                    <h2 className="question">{t('faq.question3')}</h2>
                    <p className="answer">{t('faq.answer3')}</p>
                </p>
            </div>
        </div>

        <p style={{fontWeight:"bold"}}>
            {t('faq.contactText')} <a href="/contactus" element={<ContactUs />}>{t('faq.contactLink')}</a>
        </p>
    </div>
  );
}

export default FAQ;
