import React from 'react';

export function Home() {
  return (
    <div className="h-[100vh] bg-gradient-to-br from-teal-700/50 to-sky-500/50 flex items-center justify-center p-sm">
      <div className="flex flex-col bg-white rounded-lg shadow-2xl p-sm">
        <h2 className="m-5 text-[#504e63] font-bold text-center">
          Im your new Tailwind Project
        </h2>
        <p className="text-[#504e63] text-center mb-10">
          Delete this and make something great
        </p>
      </div>
    </div>
  );
}
