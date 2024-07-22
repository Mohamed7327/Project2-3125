import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function Booking() {
  const { t } = useTranslation();
  const [venue, setVenue] = useState({});
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  useEffect(() => {
    const selectedVenue = JSON.parse(localStorage.getItem('selectedVenue'));
    if (selectedVenue) {
      setVenue(selectedVenue);
    }
  }, []);

  const submitBooking = () => {
    // Validation
    if (!name || !email || !address) {
      alert(t('booking.errorMessage'));
      return;
    }

    alert(`${t('booking.alertTitle')}
      \n${t('booking.name')}: ${name}
      \n${t('booking.email')}: ${email}
      \n${t('booking.address')}: ${address}
      \n${t('booking.venue')}: ${venue.title}
      \n${t('booking.location')}: ${venue.location}
      \n${t('booking.size')}: ${venue.size}
      \n${t('booking.price')}: ${venue.price}`);
  };

  return (
    <div className="booking-form" style={{ padding: "40px" }}>
      <h2 style={{ paddingBottom: "20px" }}>{t('booking.title')}</h2>
      <div className="booking-fields">
        <div className="col">
          <div className="form-group">
            <label htmlFor="venueName">{t('booking.venueName')}</label>
            <input type="text" id="venueName" value={venue.title} readOnly />
          </div>
          <div className="form-group">
            <label htmlFor="venueLocation">{t('booking.venueLocation')}</label>
            <input type="text" id="venueLocation" value={venue.location} readOnly />
          </div>
          <div className="form-group">
            <label htmlFor="venueSize">{t('booking.venueSize')}</label>
            <input type="text" id="venueSize" value={venue.size} readOnly />
          </div>
          <div className="form-group">
            <label htmlFor="venuePrice">{t('booking.venuePrice')}</label>
            <input type="text" id="venuePrice" value={venue.price} readOnly />
          </div>
        </div>
        <div className="col">
          <div className="form-group">
            <label htmlFor="name">{t('booking.yourName')}</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="email">{t('booking.yourEmail')}</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="address">{t('booking.yourAddress')}</label>
            <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} />
          </div>
        </div>
      </div>
      <div className="form-group">
        <button onClick={submitBooking}>{t('booking.submit')}</button>
      </div>
    </div>
  );
}

export default Booking;
