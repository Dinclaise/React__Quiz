import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './hoc/Layout/Layout';
import Quiz from './containers/Quiz/Quiz';

function App() {
  return (
    <Layout>
      <Quiz />
    </Layout>
  );
}

export default App;
