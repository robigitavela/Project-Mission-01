// eslint-disable-next-line no-unused-vars
// import React from 'react'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// import Home from './pages/Home'
// import About from './pages/About'
// import Contact from './pages/Contact'

// import Header from './components/header'
//
// export default function Root() {
// return (
// <Router>
// {
// /* <div className='Root'> */
// }
// {
// /* <Header /> */
// }
// {
// /* <Switch> */
// }
// {
// /* <Route exact path='/' component={Home} /> */
// }
// {
// /* <Route path='/about' component={About} /> */
// }
// {
// /* <Route path='/contact' component={Contact} /> */
// }
// {
// /* </Switch> */
// }
// {
// /* <Header /> */
// }
// {
// /* </div> */
// }
// {
// /* </Router> */
// }
// {
// /* ) */
// }
// {
// /* } */
// }
// {
// /*  */
// }

import { Outlet } from 'react-router-dom'
import Header from '../components/header'
import Footer from '../components/footer'
export default function Root() {
  return (
    <>
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  )
}
