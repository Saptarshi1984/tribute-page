import React from 'react'
import { getCultureData } from '../utils/data';
import CultureClientWrapper from '@/components/CultureClientWrapper';


const CulturePage = async ()  => {

  const cultureData = await getCultureData();
  
  return (

      <CultureClientWrapper cultureData={cultureData} />
  )
}

export default CulturePage