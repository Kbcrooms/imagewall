import React, {useEffect, useState} from 'react';
import DefaultHeader from './headers/defaultHeader'
import LandingPage from './pages/landing-page/landingPage'

function AppContainer(){
  return(
    <>
      <DefaultHeader/>
      <LandingPage/>
    </>
  )
}
export default AppContainer
