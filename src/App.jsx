import React from 'react';
import SearchForm from './components/molecules/SearchForm';
import NoteForm from './components/molecules/NoteForm';
import Layout from './components/templates/Layout';
import ListNotes from './components/organisms/ListNotes';

const App = () => {
  return (
    <Layout>
      <SearchForm />
      <NoteForm />
      <ListNotes />
    </Layout>
  );
};

export default App;
