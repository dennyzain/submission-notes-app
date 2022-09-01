import React from 'react';
import EmptyNotes from '../atoms/EmptyNotes';
import CardNote from '../molecules/CardNote';

export default function ListNotes({
  isArchivedList, notes, handleArchive, handleDelete, search,
}) {
  const archived = notes.filter((note) => note.archived === true);
  if (isArchivedList && search.length === 0) {
    return (
      <div className="py-8">
        <h1>List Archived Notes</h1>
        <hr />
        {archived.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 pt-3">
            {archived.map((note) => (
              <CardNote
                key={note.id}
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
  if (search) {
    const filterSearch = notes.filter((note) => note.title.toLowerCase().indexOf(search.toLowerCase()) !== -1);
    return (
      <div className="py-8">
        <h1>
          Result
          {' '}
          {search}
          {' '}
          :
        </h1>
        <hr />
        {filterSearch.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 pt-3">
            {filterSearch.map((note) => (
              note.archived === true
                ? (
                  <CardNote
                    key={note.id}
                    handleDelete={handleDelete}
                    {...note}
                  />
                ) : (
                  <CardNote
                    key={note.id}
                    handleDelete={handleDelete}
                    handleArchive={handleArchive}
                    {...note}
                  />
                )
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
      {notes.length > 0 && archived.length !== notes.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 pt-3">
          {notes.filter((note) => note.archived !== true).map((note) => (
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
