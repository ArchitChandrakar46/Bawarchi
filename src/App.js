import React from 'react';
import Navbar from './components/navbar/Navbar';
import BodySection from './components/bodysection/BodySecton';
import BodySection2 from './components/bodysection2/BodySection2';
import BodySection3 from './components/bodysection3/BodySection3';
import FooterSection from './components/footer/Footer';



const App = () => {
  return (
    <div>
      <Navbar brandName="GeekFood" />
      <BodySection/>
      <BodySection2/>
      <BodySection3/>
      <FooterSection/>
      
    </div>
  );
};

export default App;
