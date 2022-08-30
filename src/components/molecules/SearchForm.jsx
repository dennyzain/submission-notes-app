import React, { useState } from 'react';
import { Search } from 'react-feather';

export default function SearchForm() {
  const [state, setState] = useState('');
  console.log(state, ' ini state');
  return (
    <div className="flex justify-center p-10">
      <input
        type="text"
        className="text-base border-2 bg-white border-black p-1"
        onChange={(e) => setState(e.currentTarget.value)}
      />
      <button className="py-1 px-3 border-2 border-l-0 border-black transition-all hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
        <Search size={20} />
      </button>
    </div>
  );
}
