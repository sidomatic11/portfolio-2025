import React from 'react';

const EndOfPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-32">
      <div className="flex space-x-2">
        <div className="w-2 h-2 rounded-full bg-gray-400" />
        <div className="w-2 h-2 rounded-full bg-gray-400" />
        <div className="w-2 h-2 rounded-full bg-gray-400" />
      </div>
    </div>
  );
};

export default EndOfPage;
