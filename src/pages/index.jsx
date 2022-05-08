import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"

export default function Home() {
  return <Layout>
    <div>Hello Gatsby!
<br/>
<Link to="/company/">company</Link>
  </div>
  </Layout>
}
