
import React from 'react';

interface StatCardProps {
  value: string;
  label: string;
  icon?: React.ReactNode;
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({ value, label, icon, className = "" }) => {
  return (
    <div className={`text-center p-6 bg-gradient-to-b from-purple-900/30 to-background rounded-lg border border-purple-500/30 transition-all duration-300 hover:border-teal-500/40 hover:translate-y-[-5px] ${className}`}>
      {icon && <div className="flex justify-center mb-3 text-teal-500">{icon}</div>}
      <div className="text-3xl font-bold text-gradient mb-2">{value}</div>
      <div className="text-muted-foreground">{label}</div>
    </div>
  );
};

export default StatCard;
