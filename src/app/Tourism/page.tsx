import React from 'react'
import { getTourismsData } from '../utils/data';
import TourismClientWrapper from '@/components/TourismClientWrapper';

const TourismPage = async () => {

  const tourismData =  await getTourismsData();
  
  return ( 
          <TourismClientWrapper tourismData={tourismData}  />
         )
}

export default TourismPage