import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home, About, Contact, OurWork, Error } from "./pages"
// import { Footer, Why, OurProcess, Whatwedo, Hero, OurProducts } from "./containers"
// import { Call, Brand, Navbar } from "./components"
import "./App.css"

const App = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />}/>
                    <Route exact path="/about" element={<About />}/>
                    <Route exact path="/our/work" element={<OurWork />}/>
                    <Route exact path="/contact" element={<Contact />}/>
                    <Route exact path="*" element={<Error />}/>
                </Routes>
            </Router>
            
            {/* <div className='app'> */}
                {/* <Router>
                    <Switch>
                        <Route path="/" exact>
                            <Home />
                        </Route>
                    </Switch>
                </Router> */}























                {/* <div className='container'>
                    <Navbar />
                    <Hero />
                </div>
                <Whatwedo />
                <OurProducts />
                <OurProcess />
                <Why />
                <Call />
                <Brand />
                <Footer /> */}
            {/* </div> */}
        </div>
    )
}

export default App
