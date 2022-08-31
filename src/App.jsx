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
  const [archive, setArchive] = useState([]);
  const [isArchiveList, setIsArchiveList] = useState(false);

  const handleContent = ({ currentTarget }) => setContent(currentTarget.value);
  const handleTitle = ({ currentTarget }) => setTitle(currentTarget.value);
  const handleSearch = ({ currentTarget }) => setSearch(currentTarget.value);

  const handleDelete = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };
  const handleArchive = (id) => {
    console.log(id);
    console.log(setIsArchiveList);
    console.log(search);
  };
  const onSubmit = () => {
    const createNewNotes = {
      id: Date.now(),
      title,
      body: content,
      createdAt: new Date().toISOString(),
      archived: false,
    };
    const newNotes = [...notes, createNewNotes];
    setNotes(newNotes);
    setTitle('');
    setContent('');
  };
  const onSearch = () => {
    console.log('sdads');
  };

  return (
    <Layout>
      <SearchForm handleSearch={handleSearch} onSearch={onSearch} />
      <NoteForm
        title={title}
        content={content}
        setContent={handleContent}
        setTitle={handleTitle}
        onSubmit={onSubmit}
      />
      <ListNotes
        notes={notes}
        archive={archive}
        handleDelete={handleDelete}
        handleArchive={handleArchive}
        setArchive={setArchive}
        isArchiveList={isArchiveList}
      />
    </Layout>
  );
}
