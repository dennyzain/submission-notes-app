import React from 'react';
import EmptyNotes from '../atoms/EmptyNotes';
import CardNote from '../molecules/CardNote';
import { getInitialData } from '../../utils';

export default function ListNotes() {
  const notes = getInitialData();
  return (
    <div className="py-8">
      <h1>List Notes</h1>
      <hr />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 pt-3">
        {notes.length > 0 ? (
          notes.map((note) => <CardNote key={note.id} {...note} />)
        ) : (
          <EmptyNotes />
        )}
      </div>
    </div>
  );
}
