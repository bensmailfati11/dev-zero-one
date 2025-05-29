const API_URL = 'http://localhost:5000';

const fetchCities = async () => {
  try {
    const response = await fetch(`${API_URL}/cities`);
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des villes');
    }
    return await response.json();
  } catch (error) {
    console.error('Erreur API:', error);
    throw error;
  }
};

export default fetchCities