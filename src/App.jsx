import React, { useState } from 'react';
import SearchForm from './components/molecules/SearchForm';
import NoteForm from './components/molecules/NoteForm';
import Layout from './components/templates/Layout';
import ListNotes from './components/organisms/ListNotes';
import { getInitialData } from './utils';

export default function App() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [search, setSearch] = useState('');
  const [notes, setNotes] = useState(getInitialData());
  const [isArchivedList, setArchivedList] = useState(false);

  const handleContent = ({ currentTarget }) => setContent(currentTarget.value);
  const handleTitle = ({ currentTarget }) => setTitle(currentTarget.value);
  const handleSearch = ({ currentTarget }) => setSearch(currentTarget.value);

  const handleDelete = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const handleArchive = (id) => {
    const data = notes.filter((note) => {
      if (note.id === id) {
        note.archived = true;
      }
      return note;
    });
    setNotes(data);
  };
  const handleArchivedList = () => setArchivedList(!isArchivedList);
  const onSubmit = () => {
    const createNewNote = {
      id: Date.now(),
      title,
      body: content,
      createdAt: new Date().toISOString(),
      archived: false,
    };
    const newNotes = [...notes, createNewNote];
    setNotes(newNotes);
    setTitle('');
    setContent('');
  };
  const onSearch = () => null;

  return (
    <Layout handleArchivedList={handleArchivedList} isArchivedList={isArchivedList}>
      <SearchForm handleSearch={handleSearch} onSearch={onSearch} disabled={search.length === 0} />
      <NoteForm
        title={title}
        content={content}
        setContent={handleContent}
        setTitle={handleTitle}
        onSubmit={onSubmit}
        disabled={!(title && content)}
      />
      <ListNotes
        notes={notes}
        search={search}
        handleDelete={handleDelete}
        handleArchive={handleArchive}
        isArchivedList={isArchivedList}
      />
    </Layout>
  );
}
