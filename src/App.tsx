import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import BusinessSolutions from './components/BusinessSolutions';
import BusinessShipping from './components/BusinessShipping';
import EnterpriseServices from './components/EnterpriseServices';
import CargoShipping from './components/CargoShipping';
import KenyaMap from './components/KenyaMap';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <BusinessSolutions />
      <BusinessShipping />
      <EnterpriseServices />
      <CargoShipping />
      <KenyaMap />
      <Footer />
    </div>
  );
}

export default App;