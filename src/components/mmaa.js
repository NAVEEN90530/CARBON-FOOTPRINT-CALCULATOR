import React from 'react'
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import Calc from './calc';
import Header from './Header';
import Main from './Main';
import Calc2 from './calc2';

export default function Mmaa() {
  return (
    <div>
        <Routes>
            <Route path='/' element={[<Header/>,<Main/>]} />
            <Route path='/CATEGORIES' element={<Calc/>}/>
            <Route path='/Timeframe' element={<Calc2/>}/>
        </Routes>
    </div>
  )
}
