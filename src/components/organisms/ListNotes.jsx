import React, { useEffect, useState } from 'react';
import EmptyNotes from '../atoms/EmptyNotes';
import CardNote from '../molecules/CardNote';
import { getInitialData } from '../../utils';

export default function ListNotes() {
  const [notes, setNotes] = useState(getInitialData());
  const handleDelete = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };
  const handleArchive = () => {
    console.log('archive');
  };
  return (
    <div className="py-8">
      <h1>List Notes</h1>
      <hr />
      {notes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 pt-3">
          {notes.map((note) => (
            <CardNote
              key={note.id}
              {...note}
              handleDelete={handleDelete}
              handleArchive={handleArchive}
            />
          ))}
        </div>
      ) : (
        <EmptyNotes />
      )}
    </div>
  );
}
