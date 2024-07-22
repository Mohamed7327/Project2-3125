import React from 'react';

function VenueCard({ venue, onBookNow }) {
  return (
    <div className="venue-card">
      <img src={venue.image} alt={venue.title} />
      <div className="venue-details">
        <h3>{venue.title}</h3>
        <p>Size: {venue.size}</p>
        <p>Price: {venue.price}</p>
        <p>Location: {venue.location}</p>
        <button onClick={() => onBookNow(venue)}>Book Now</button>
      </div>
    </div>
  );
}

export default VenueCard;
