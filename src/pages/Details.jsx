import React from 'react';
import { useLocation } from 'react-router-dom/dist';
import DetailBox from '../components/DetailComp/DetailBox';
import Header from '../components/Header/Header';

function Details() {
  const location = useLocation();
  const placeData = location.state?.test1;

  return (
    <>
      <Header/>
      <DetailBox placeData={placeData} />
    </>
  );
}

export default Details;
