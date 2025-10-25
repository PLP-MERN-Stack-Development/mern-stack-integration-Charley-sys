import React from 'react';

const DebugTest = () => {
  console.log('DebugTest component is rendering!');
  return (
    <div className="p-8 bg-green-100 border border-green-400">
      <h1 className="text-2xl font-bold text-green-800">✅ Debug Test - React is Working!</h1>
      <p className="text-green-700">If you can see this, your React app is running correctly.</p>
    </div>
  );
};

export default DebugTest;