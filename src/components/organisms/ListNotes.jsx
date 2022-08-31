import React, { useEffect, useState } from 'react';
import EmptyNotes from '../atoms/EmptyNotes';
import CardNote from '../molecules/CardNote';
import { getInitialData } from '../../utils';

export default function ListNotes({ isArchiveList, archive, notes, handleArchive, handleDelete }) {
  if (isArchiveList) {
    return (
      <div className="py-8">
        <h1>List Archived Notes</h1>
        <hr />
        {archive.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 pt-3">
            {archive.map((note) => (
              <CardNote
                key={note.id}
                handleArchive={handleArchive}
                handleDelete={handleDelete}
                {...note}
              />
            ))}
          </div>
        ) : (
          <EmptyNotes />
        )}
      </div>
    );
  }

  return (
    <div className="py-8">
      <h1>List Notes</h1>
      <hr />
      {notes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 pt-3">
          {notes.map((note) => (
            <CardNote
              key={note.id}
              handleDelete={handleDelete}
              handleArchive={handleArchive}
              {...note}
            />
          ))}
        </div>
      ) : (
        <EmptyNotes />
      )}
    </div>
  );
}
