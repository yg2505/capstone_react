
import { useEffect, useState } from 'react';
import { database } from '../auth/firebaseConfig';
import { ref, onValue } from 'firebase/database';
import ImpactChart from './impchart';

export default function ImpactPage() {
  const [impactData, setImpactData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const impactRef = ref(database, 'impacts');
    onValue(impactRef, (snapshot) => {
      const rawData = snapshot.val();
  
      try {
        let parsed = [];
    
        if (typeof rawData === 'string') {
          parsed = JSON.parse(rawData);
        }
  
        else if (Array.isArray(rawData)) {
          parsed = rawData.filter(Boolean);
        } else if (typeof rawData === 'object' && rawData !== null) {
          parsed = Object.values(rawData);
        }

        setImpactData(parsed);
      } catch (err) {
        console.error("Failed to parse impact data:", err);
      }
    
      setLoading(false);
    });
    
  }, []);

  return (
    <div style={{ padding: '2rem' ,  backgroundColor: '#f0f6ff', color:"#1e3a8a"}}>
      <h1>Donation Impact </h1>
      {loading ? (
        <p>Loading...</p>
      ) : impactData && impactData.length > 0 ? (
        <ImpactChart data={impactData} />
      ) : (
        <p>No data to display</p>
      )}
    </div>
  );
}