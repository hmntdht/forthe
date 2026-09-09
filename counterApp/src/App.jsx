import React, { useState } from 'react';

const App = () => {
  const [value, setValue] = useState(0);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex items-center justify-center p-4">
      <div className="bg-slate-800 border border-slate-700 rounded-2xl shadow-xl p-8 max-w-sm w-full text-center space-y-6">
        
        {/* Title */}
        <h1 className="text-xl font-semibold text-slate-300 tracking-wide uppercase">
          Counter App
        </h1>

        {/* Display Value */}
        <div className="text-6xl font-extrabold text-indigo-400 py-4 bg-slate-900/50 rounded-xl border border-slate-700/50">
          {value}
        </div>

        {/* Increment / Decrement Controls */}
        <div className="grid grid-cols-2 gap-4">
          <button 
            onClick={() => setValue(value + 1)}
            className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white font-medium rounded-lg transition duration-150 shadow-md shadow-emerald-900/20"
          >
            Add
          </button>

          <button 
            onClick={() => (value > 0 ? setValue(value - 1) : setValue(0))}
            className="w-full py-3 px-4 bg-rose-600 hover:bg-rose-500 active:scale-95 text-white font-medium rounded-lg transition duration-150 shadow-md shadow-rose-900/20"
          >
            Subtract
          </button>
        </div>

        {/* Reset Control */}
        <button 
          onClick={() => setValue(0)}
          className="w-full py-2.5 px-4 bg-slate-700 hover:bg-slate-600 active:scale-95 text-slate-300 hover:text-white font-medium rounded-lg transition duration-150 border border-slate-600"
        >
          Reset
        </button>

      </div>
    </div>
  );
};

export default App;