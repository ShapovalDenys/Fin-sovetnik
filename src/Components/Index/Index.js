import React from 'react';

import './Index.scss';
import Header from './Header';
import Methods from './Methods';
import MethodsCards from './MethodsCards';
import Description from './Description';
import Testimonials from './Testimonials';
import NeedToKnow from './NeedToKnow';
import Footer from '../Footer/Footer';

const Index = () => (
  <div className="index">
    <Header/>
    <Methods/>
    <MethodsCards/>
    <Description/>
    <Testimonials/>
    <NeedToKnow/>
    <Footer/>
  </div>
);

export default Index;
