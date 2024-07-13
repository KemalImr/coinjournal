import React, { useEffect, useState } from 'react';
import Position from './Position';

const PositionsList: React.FC = () => {
  const [positions, setPositions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | any>(null);

  useEffect(() => {
    const fetchPositions = async () => {
      try {
        const response = await fetch('/api/bybit/positions');
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        const data = await response.json();
        setPositions(data.positions || []);
      } catch (error) {
        setError(error);
        console.error('Error fetching positions:', error);
      } finally {
        setLoading(false);
        console.log('Positions:', positions);
      }
    };

    fetchPositions();
  }, []);

  if (loading) {
    return <p>Loading positions...</p>;
  }

  if (error) {
    return <p>Error loading positions: {error.message}</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Positions</h1>
      {positions.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {positions.map((position, index) => (
            position && <Position key={index} position={position} />
          ))}
        </div>
      ) : (
        <p>No positions data available.</p>
      )}
    </div>
  );
};

export default PositionsList;
