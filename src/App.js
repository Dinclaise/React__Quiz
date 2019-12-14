import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './hoc/Layout/Layout';
import Quiz from './containers/Quiz/Quiz';
// import { fab } from '@fortawesome/free-brands-svg-icons';
// import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
// import { library } from '@fortawesome/fontawesome-svg-core'

// library.add(fab, faAngleDown)

function App() {
  return (
    <Layout>
      <Quiz />
    </Layout>
  );
}

export default App;
