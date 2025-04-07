'use client';

import React from 'react';

interface ToggleSwitchProps {
  checked: boolean;
  onChange: () => void;
}

export const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ checked, onChange }) => {
  return (
    <button
      onClick={onChange}
      className={`w-10 h-6 flex items-center rounded-full p-1 transition duration-300 ${
        checked ? 'bg-black' : 'bg-gray-300'
      }`}
    >
      <div
        className={`bg-white w-4 h-4 rounded-full shadow-md transform transition ${
          checked ? 'translate-x-4' : ''
        }`}
      />
    </button>
  );
};
