import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyle } from './styles/GlobalStyles'
import { ListOfPhotoCards } from './components/ListOfPhotoCards'
import { PetgramLogo } from './components/Logo'

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <PetgramLogo />
      <ListOfCategories />
      <ListOfPhotoCards />
    </div>
  )
}
