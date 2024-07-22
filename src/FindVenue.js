import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import VenueCard from './VenueCard';
import wedding1 from './img/wedding1.jpg';
import wedding2 from './img/wedding2.jpg';
import birthday1 from './img/birthday1.jpg';
import birthday2 from './img/birthday2.jpg';
import concert1 from './img/concert1.jpg';
import concert2 from './img/concert2.jpg';

const venues = [
  { id: 1, category: 'Wedding', size: 'Large', price: 'High', location: 'Downtown Ottawa', image: wedding1, title: 'Glass Gallery' },
  { id: 2, category: 'Wedding', size: 'Medium', price: 'Medium', location: 'Château Laurier', image: wedding2, title: 'Veronica Gardens' },
  { id: 3, category: 'Birthday', size: 'Small', price: 'Low', location: "Dow's Lake", image: birthday1, title: 'Celebration Hall' },
  { id: 4, category: 'Birthday', size: 'Medium', price: 'Medium', location: 'Château Laurier', image: birthday2, title: 'Winter Wonderland' },
  { id: 5, category: 'Concert', size: 'Large', price: 'High', location: 'Downtown Ottawa', image: concert1, title: "God's Chosen Hall of Arts" },
  { id: 6, category: 'Concert', size: 'Small', price: 'Low', location: 'Downtown Ottawa', image: concert2, title: 'Communion Theatre' }
];

function FindVenue() {
  const { t } = useTranslation();
  const [filteredVenues, setFilteredVenues] = useState(venues);
  const [category, setCategory] = useState('all');
  const [size, setSize] = useState('all');
  const [price, setPrice] = useState('all');
  const [location, setLocation] = useState('all');

  useEffect(() => {
    filterVenues();
  }, [category, size, price, location]);

  const filterVenues = () => {
    const filtered = venues.filter(venue => {
      return (category === 'all' || venue.category === category) &&
        (size === 'all' || venue.size === size) &&
        (price === 'all' || venue.price === price) &&
        (location === 'all' || venue.location === location);
    });
    setFilteredVenues(filtered);
  };

  const handleBookNow = (venue) => {
    localStorage.setItem('selectedVenue', JSON.stringify(venue));
    window.location.href = '/booking';
  };

  return (
    <div className="FindVenue" style={{marginLeft:"40px", marginRight:"40px"}}>
      <h2 style={{paddingTop:"40px", paddingBottom:"20px"}}>{t('findVenue.title')}</h2>
      <div className="filters" style={{paddingBottom:"20px"}}>
        <span className="filter-label">{t('findVenue.category')}</span>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="all">{t('findVenue.all')}</option>
          <option value="Wedding">{t('findVenue.wedding')}</option>
          <option value="Birthday">{t('findVenue.birthday')}</option>
          <option value="Concert">{t('findVenue.concert')}</option>
        </select>
        <span className="filter-label">{t('findVenue.size')}</span>
        <select value={size} onChange={(e) => setSize(e.target.value)}>
          <option value="all">{t('findVenue.all')}</option>
          <option value="Small">{t('findVenue.small')}</option>
          <option value="Medium">{t('findVenue.medium')}</option>
          <option value="Large">{t('findVenue.large')}</option>
        </select>
        <span className="filter-label">{t('findVenue.price')}</span>
        <select value={price} onChange={(e) => setPrice(e.target.value)}>
          <option value="all">{t('findVenue.all')}</option>
          <option value="Low">{t('findVenue.low')}</option>
          <option value="Medium">{t('findVenue.medium')}</option>
          <option value="High">{t('findVenue.high')}</option>
        </select>
        <span className="filter-label">{t('findVenue.location')}</span>
        <select value={location} onChange={(e) => setLocation(e.target.value)}>
          <option value="all">{t('findVenue.all')}</option>
          <option value="Downtown Ottawa">{t('findVenue.downtownOttawa')}</option>
          <option value="Château Laurier">{t('findVenue.chateauLaurier')}</option>
          <option value="Dow's Lake">{t('findVenue.dowsLake')}</option>
        </select>
      </div>
      <div className="venue-container">
        {filteredVenues.map(venue => (
          <VenueCard key={venue.id} venue={venue} onBookNow={handleBookNow} />
        ))}
      </div>
    </div>
  );
}

export default FindVenue;
