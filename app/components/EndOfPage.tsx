import React from 'react';

const EndOfPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-32">
      <div className="flex space-x-4">
        <div className="w-2 h-2 bg-gray-400 rotate-45" />
        <div className="w-2 h-2 bg-gray-400 rotate-45" />
        <div className="w-2 h-2 bg-gray-400 rotate-45" />
      </div>
    </div>
  );
};

export default EndOfPage;
