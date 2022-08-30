import React from 'react';
import SearchForm from './components/molecules/SearchForm';
import NoteForm from './components/molecules/NoteForm';
import Layout from './components/templates/Layout';

const App = () => {
  return (
    <Layout>
      <SearchForm />
      <NoteForm />
    </Layout>
  );
};

export default App;
