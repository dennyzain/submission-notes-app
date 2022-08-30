import React from 'react';
import EmptyNotes from '../atoms/EmptyNotes';
import CardNote from '../molecules/CardNote';
import { getInitialData } from '../../utils';

export default function ListNotes() {
  const notes = getInitialData();
  return (
    <div className="pt-8">
      <h1>List Notes</h1>
      <hr />
      <div className="grid grid-cols-3 gap-8">
        {notes.length > 0 ? (
          notes.map((note) => <CardNote key={note.id} {...note} />)
        ) : (
          <EmptyNotes />
        )}
      </div>
    </div>
  );
}
