
import './App.css';
import Article from './components/article/Article';
import Brands from './components/brands/Brands';

import CTA from './components/cta/CTA';

import Feature from './components/feature/Feature';

import Navbar from './components/navbar/Navbar';



function App() {
  return (
    <div className="App">
      <Article></Article>
      <Brands></Brands>
      <CTA></CTA>
      <Feature></Feature>
      <Navbar></Navbar>


    </div>
  );
}

export default App;
