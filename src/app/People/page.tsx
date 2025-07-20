import React from 'react'
import { getLuminariesData } from '../utils/data'
import PeopleClientWrapper from '@/components/PeopleClientWrapper';




const PeoplePage = async () => {

    const luminariesData =  getLuminariesData();    
      
  return (

     <PeopleClientWrapper luminariesData={luminariesData} />
  )
}

export default PeoplePage
