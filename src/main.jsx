import React from 'react'
import ReactDOM from 'react-dom/client'
import HeadLine from './components/HomePage/HeadLine.jsx'
import Article from './components/HomePage/Article.jsx'
import Banner from './components/HomePage/Banner.jsx'
import Advertise from './components/HomePage/Advertise.jsx'
import Group from './components/HomePage/Group.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Banner/>
    <HeadLine/>
    <Article/>
    <Advertise/>
    <Group/>
  </React.StrictMode>,
)
