import React from 'react';
import './App.css';
import HTHeader from './HTHeader/HTHeader';
import HTMain from './HTMain/HTMain';
import HTCompany from './HTCompany/HTCompany';
import HTFooter from './HTFooter/HTFooter';
import HTHoneyStory from './HTHoneyStory/HTHoneyStory';
import HTLink from './HTLink/HTLink';
import HTSweetNews from './HTSweetNews/HTSweetNews';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <HTHeader/>
      </header>
      <nav></nav>
      <section>
        <HTMain/>
        <HTCompany/>
        <HTHoneyStory/>
        <HTSweetNews/>
        <HTLink/>
      </section>
      <footer>
        <HTFooter/>
      </footer>
    </div>
  );
}

export default App;
