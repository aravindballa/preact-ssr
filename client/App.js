import { h } from 'preact';
import Router from 'preact-router';
import Home from './Home';
import Detail from './Detail';

const App = ({ url }) => (
  <div>
    <h2>Hello from Preact 👋🏻</h2>
    <Router url={url}>
      <Home path="/" />
      <Detail path="/detail" />
    </Router>
  </div>
);

export default App;