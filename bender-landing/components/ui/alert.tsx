import React from 'react';

export const Alert = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={`border border-gray-300 rounded-lg p-4 ${className}`}>
      {children}
    </div>
  );
};

export const AlertDescription = ({ children }: { children: React.ReactNode }) => {
  return <div className="text-sm text-gray-600">{children}</div>;
};