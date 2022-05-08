import React from 'react';
import Footer from "./Footer"
import Navbar from "./Navbar"
//styles
import "mdb-react-ui-kit/dist/css/mdb.min.css"
import { MDBContainer } from "mdb-react-ui-kit"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <MDBContainer>{children}</MDBContainer>
      <Footer />
    </>
  )
}

export default Layout
