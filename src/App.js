
import './App.css';
import { Footers, Blog, Posibility, Features, WhatGPT3, Headers } from './containers';
import { CTA, Brands, Navbar } from './components';



function App() {
  return (
    <div className="App">
      <div className="gradient-bg">
        <Navbar></Navbar>
        <Headers></Headers>
      </div>
      <Brands></Brands>
      <WhatGPT3></WhatGPT3>
      <Features></Features>
      <Posibility></Posibility>
      <CTA></CTA>
      <Blog></Blog>
      <Footers></Footers>


    </div>
  );
}

export default App;
