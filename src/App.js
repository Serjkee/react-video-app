import React, { Component } from 'react'

import Header from './container/Header/Header'
import SortingSection from './container/SortingSection/SortingSection';
import Card from './container/Card/Card'
import Footer from './container/Footer/Footer'

export class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <SortingSection />
        <Card />
        <Footer />
      </div>
    )
  }
}

export default App
