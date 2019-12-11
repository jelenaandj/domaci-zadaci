import React, { useState } from 'react';
import './App.css';
import PastLList from './components/past-l-list';
import {getPastLaunches} from './utility/space-x-service'
import {getUpcomingLaunches} from './utility/space-x-service'
import UpcomingLList from './components/upcoming-l-list';
import CompanyInfo from './components/companyInfo';
import {getCompanyInfo} from './utility/space-x-service';
import Footer from './layout/footer';
import Content from './layout/content';




function App() {
  // const [pastData, setPastData]=useState([])
    
   


  return (
    <div className="App">
      <CompanyInfo/>
      <Content></Content>
      <Footer/>
    </div>
  );
}

export default App;
