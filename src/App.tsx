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
    import { Routes, Route } from 'react-router-dom';
    import TrackShipment from './pages/TrackShipment';
    import GetQuote from './pages/GetQuote';
    import Locations from './pages/Locations';
    import DomesticDelivery from './pages/DomesticDelivery';
    import InternationalShipping from './pages/InternationalShipping';
    import FreightServices from './pages/FreightServices';
    import EcommerceSolutions from './pages/EcommerceSolutions';
    import Support from './pages/Support';
    import Faq from './pages/Faq';
    import LoginForm from './components/LoginForm';
    import SignupForm from './components/SignupForm';
    import ForgotPasswordForm from './components/ForgotPasswordForm';
    import SignInWithPhoneForm from './components/SignInWithPhoneForm';
    import Newsletter from './components/Newsletter';
    import { LanguageProvider } from './context/LanguageContext';

    function App() {
      return (
        <LanguageProvider>
          <div className="min-h-screen bg-white">
            <Header />
            <Routes>
              <Route path="/" element={<> <Hero /> <Services /> <BusinessSolutions /> <BusinessShipping /> <EnterpriseServices /> <CargoShipping /> <KenyaMap /> <Newsletter /> </>} />
              <Route path="/track" element={<TrackShipment />} />
              <Route path="/quote" element={<GetQuote />} />
              <Route path="/locations" element={<Locations />} />
              <Route path="/services" element={<Services />} />
              <Route path="/domestic-delivery" element={<DomesticDelivery />} />
              <Route path="/international-shipping" element={<InternationalShipping />} />
              <Route path="/freight-services" element={<FreightServices />} />
              <Route path="/ecommerce-solutions" element={<EcommerceSolutions />} />
              <Route path="/support" element={<Support />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/signup" element={<SignupForm />} />
              <Route path="/forgot-password" element={<ForgotPasswordForm />} />
              <Route path="/sign-in-with-phone" element={<SignInWithPhoneForm />} />
            </Routes>
            <Footer />
          </div>
        </LanguageProvider>
      );
    }

    export default App;
