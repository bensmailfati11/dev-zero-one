import React, { useEffect, useState } from 'react';
import fetchCities from "../../services/api";

const HomePage = () => {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCities();
        setCities(data);
        setError(null);
      } catch (err) {
        console.error("Error fetching cities:", err);
        setError("Failed to load cities. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Ajout du tableau de dépendances vide pour exécuter une seule fois

  if (loading) {
    return (
      <div className="loading">
        <p>Loading cities...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <div className="hero">
        <div className="hero-content">
          <h1>Discover the Magic of Morocco</h1>
          <p>Explore ancient medinas, majestic mountains, and golden deserts in one of North Africa's most captivating countries</p>
          <div>
            <a href="#" className="btn">Plan Your Trip</a>
            <a href="#" className="btn btn-outline">Virtual Tour</a>
          </div>
        </div>
      </div>
      
      {/* Cities Grid */}
      <section className="cities-section">
        <h2 className="section-title">Explore Moroccan Cities</h2>
        
        <div className="cities-grid">
          {cities.map(city => (
            <div key={city._id || city.id} className="city-card"> {/* Utilisation de _id ou id */}
              <div className="city-image">
                {city.name} Image
              </div>
              <div className="city-info">
                <h3 className="city-name">{city.name}</h3>
                <p className="city-description">{city.description}</p>
                <div className="city-highlights">
                  <p><strong>Must-See Highlights:</strong></p>
                  <ul>
                    {city.highlights?.map((highlight, index) => ( // Sécurité avec ?.
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* History Section */}
      <section className="history-section">
        <h2 className="section-title">History & Culture</h2>
        
        <div className="history-content">
          <div className="history-text">
            <p>
              Morocco, officially the Kingdom of Morocco, is a country located in the Maghreb region of North Africa. 
              It overlooks the Mediterranean Sea to the north and the Atlantic Ocean to the west.
            </p>
            <p>
              Morocco has a rich history spanning millennia, with influences from indigenous Berbers, Arabs, 
              and various European cultures. The country gained independence from France in 1956 and has since 
              developed a unique blend of tradition and modernity.
            </p>
            <p>
              Moroccan culture is a vibrant fusion of Arab, Berber, African, and European influences, 
              reflected in its architecture, cuisine, music, and traditions.
            </p>
          </div>
          
          <div className="history-features">
            <div className="feature-card">
              <h4 className="feature-title">Culture</h4>
              <p>Rich blend of Arab, Berber, African, and European influences</p>
            </div>
            <div className="feature-card">
              <h4 className="feature-title">Geography</h4>
              <p>Diverse landscapes from mountains to deserts to coastlines</p>
            </div>
            <div className="feature-card">
              <h4 className="feature-title">Cuisine</h4>
              <p>Famous for tagine, couscous, mint tea, and pastries</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;