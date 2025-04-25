
import React from 'react';

interface StatCardProps {
  value: string;
  label: string;
}

const StatCard: React.FC<StatCardProps> = ({ value, label }) => {
  return (
    <div className="text-center p-6 bg-gradient-to-b from-purple-900/20 to-background rounded-lg border border-purple-500/20">
      <div className="text-3xl font-bold text-gradient mb-2">{value}</div>
      <div className="text-muted-foreground">{label}</div>
    </div>
  );
};

export default StatCard;
