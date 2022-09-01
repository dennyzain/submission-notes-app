import React from 'react';
import Header from '../organisms/Header';

export default function Layout({ children, handleArchivedList, isArchivedList }) {
  return (
    <div className="w-4/5 m-auto h-screen">
      <Header handleArchivedList={handleArchivedList} isArchivedList={isArchivedList} />
      {children}
    </div>
  );
}
