import React from 'react';

export default function EmptyNotes() {
  return (
    <div className="p-10">
      <img src="./empty.svg" alt="empty" width={400} className="m-auto" />
      <p className="text-center p-6">List is empty...</p>
    </div>
  );
}
