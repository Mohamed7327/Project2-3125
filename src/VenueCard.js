import React from 'react';
import { useTranslation } from 'react-i18next';

function VenueCard({ venue, onBookNow }) {
  const { t } = useTranslation();

  return (
    <div className="venue-card">
      <img src={venue.image} alt={venue.title} />
      <div className="venue-details">
        <h3>{venue.title}</h3>
        <p>{t('venueCard.size')}: {venue.size}</p>
        <p>{t('venueCard.price')}: {venue.price}</p>
        <p>{t('venueCard.location')}: {venue.location}</p>
        <button onClick={() => onBookNow(venue)}>{t('venueCard.bookNow')}</button>
      </div>
    </div>
  );
}

export default VenueCard;
