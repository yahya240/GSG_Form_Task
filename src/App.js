import React, { Component } from 'react'
import {Routes,Route} from 'react-router-dom'
import MainRoutes from './routes/MainRoutes'

class App extends Component {


  render(){
    return(
      <>
        <Routes>
          <Route path='/*' element={<MainRoutes />} />
        </Routes>
      </>
    )
  }
}

export default App;
