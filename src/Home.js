import React from 'react';
import { useTranslation } from 'react-i18next';
import FindVenue from "./FindVenue";
import mainPage1 from "./img/mainPage1.png";
import mainPage2 from "./img/mainPage2.png";
import mainPage3 from "./img/mainPage3.png";
import mainPage4 from "./img/mainPage4.png";
import mainPage5 from "./img/mainPage5.png";

const Home = () => {
    const { t } = useTranslation();

    return (
        <div className="home" id="home">
            <div className="headline">
                <h2>{t('home.headline')}</h2>
                <a href="/findVenue" element={<FindVenue />}>{t('home.findVenueButton')}</a>                
            </div>
            <div className="homeContent">
                <div className="row">
                    <div className="col col-6">
                        <img src={mainPage1} alt="" className="homeImage" />
                    </div>
                    <div className="col col-6">
                        <div>
                            <h2>{t('home.findVenueTitle')}</h2>
                            <p>{t('home.findVenueDescription')}</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-6">
                        <div>
                            <h2>{t('home.trustedByCompaniesTitle')}</h2>
                            <p>{t('home.trustedByCompaniesDescription')}</p>
                        </div>
                    </div>
                    <div className="col col-6">
                        <img src={mainPage2} alt="" className="homeImage" />
                    </div>
                </div>
                <div className="row" style={{paddingTop:"20px", border:"none"}}>
                    <h2>{t('home.checkOutVenuesTitle')}</h2>
                    <p style={{paddingBottom:"20px", paddingLeft:"80px", paddingRight:"80px"}}>{t('home.checkOutVenuesDescription')}</p>
                </div>
                <div className="row" id="rowLast">
                    <div className="col col-4">
                        <img src={mainPage3} alt="" className="homeImage" id="beauty"/>
                    </div>
                    <div className="col col-4">
                        <img src={mainPage4} alt="" className="homeImage" id="beauty"/>
                    </div>
                    <div className="col col-4">
                        <img src={mainPage5} alt="" className="homeImage" id="beauty"/>
                    </div>
                </div>
                <div className="row" id="rowLast" style={{margin:"auto"}}>
                    <div className="col col-4">
                        <h4>{t('home.weddingVenue')}</h4>
                    </div>
                    <div className="col col-4">
                        <h4>{t('home.officeVenue')}</h4>
                    </div>
                    <div className="col col-4">
                        <h4>{t('home.concertVenue')}</h4>
                    </div>
                </div>
            </div>
            <a href="/findVenue" element={<FindVenue />} style={{justifyContent:"center"}}>{t('home.findVenueFooter')}</a>                
        </div>
    );
};

export default Home;
