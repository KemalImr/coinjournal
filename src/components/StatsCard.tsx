import React from 'react';

const StatsCard = ({ title, value }: { title: string, value: string }) => {
  return (
    <div className="bg-card shadow-md rounded-lg p-4">
      <h2 className="text-xl font-bold mb-2 text-card-foreground">{title}</h2>
      <p className="text-muted-foreground">{value}</p>
    </div>
  );
};

export default StatsCard;
