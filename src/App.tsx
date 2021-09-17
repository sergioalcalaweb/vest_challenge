import React, { useState } from 'react';
import Characters from './components/Characters';
import Episodes from './components/Episodes';
import Layout from './components/Layout';
import Locations from './components/Locations';

function App() {

  const [section, setSection] = useState<string>('characters');

  const changeView = (view: string) => setSection(view);

  return (
    <Layout>
      <div className="tabs is-toggle is-centered">
        <ul>          
          <li
            onClick={ () => changeView('characters') } 
            className={section === 'characters' ? "is-active" : ''}>
            <a href="#section">Characters</a></li>
          <li 
            onClick={ () => changeView('locations') } 
            className={section === 'locations' ? "is-active" : ''}>
            <a href="#section">Locations</a></li>
          <li 
            onClick={ () => changeView('episodes') } 
            className={section === 'episodes' ? "is-active" : ''}>
            <a href="#section">Episodes</a></li>          
        </ul>
      </div>
      { section === 'characters' && <Characters /> }
      { section === 'episodes' && <Episodes /> }
      { section === 'locations' && <Locations /> }
    </Layout>
  );
}

export default App;
