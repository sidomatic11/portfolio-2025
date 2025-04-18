import React from 'react';

const EndOfPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-32">
      <div className="flex space-x-8">
        <div className="w-1 h-1 bg-gray-400 rotate-45" />
        <div className="w-1 h-1 bg-gray-400 rotate-45" />
        <div className="w-1 h-1 bg-gray-400 rotate-45" />
      </div>
    </div>
  );
};

export default EndOfPage;
