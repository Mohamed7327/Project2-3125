import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
    const { t, i18n } = useTranslation();

    // Load the saved language from localStorage when the component mounts
    useEffect(() => {
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage) {
            i18n.changeLanguage(savedLanguage);
        }
    }, [i18n]);

    const handleLanguageChange = (event) => {
        const newLanguage = event.target.value;
        i18n.changeLanguage(newLanguage);
        localStorage.setItem('language', newLanguage); // Save the selected language to localStorage
    };

    return (
        <nav className="navbar">
            <h1>VNURent</h1>
            <div className="links">
                <a href="/project2-3125">{t('navbar.home')}</a>
                <a href="/findvenue">{t('navbar.findVenue')}</a>
                <a href="/contactus">{t('navbar.contactUs')}</a>
                <a href="/faq">{t('navbar.faq')}</a>
                <select className="language" onChange={handleLanguageChange} value={i18n.language}>
                    <option value="en">EN</option>
                    <option value="fr">FR</option>
                </select>
            </div>
        </nav>
    );
};

export default Navbar;
