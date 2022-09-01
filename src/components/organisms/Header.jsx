import React from 'react';

export default function Header({ handleArchivedList, isArchivedList }) {
  return (
    <header>
      <nav className="grid
    justify-center
    items-center
    py-[10px]
    grid-cols-[2fr_1fr_1fr]
    xl:grid-cols-[5fr_1fr_1fr]"
      >
        <h1>Notes App</h1>
        <button type="button" className="font-semibold text-sm lg:text-lg" onClick={handleArchivedList}>{!isArchivedList ? 'Archived List' : 'Notes List'}</button>
        <button type="button" className="font-semibold text-sm lg:text-lg">Creator</button>
      </nav>
    </header>
  );
}
