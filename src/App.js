
import './App.css';


import Footers from './containers/footers/Footers';
import Header from './containers/header/Header';
import Blog from './containers/blog/Blog';
import Posibility from './containers/posibility/Posibility';
import Features from './containers/fetaures/Features';




import CTA from './components/cta/CTA';
import Brands from './components/brands/Brands';
import Navbar from './components/navbar/Navbar';
import WhatGPT from './containers/whatGPT/WhatGPT';




function App() {
  return (
    <div className="App">
      <div className="gradient-bg">
        <Navbar></Navbar>
        <Header></Header>
      </div>
      <Brands></Brands>
      <WhatGPT></WhatGPT>
      <Features></Features>
      <Posibility></Posibility>
      <CTA></CTA>
      <Blog></Blog>
      <Footers></Footers>


    </div>
  );
}

export default App;
