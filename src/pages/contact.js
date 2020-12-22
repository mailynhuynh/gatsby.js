import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"

export default function Contact() {
    return (
        <Layout>
            <Header headerText="Reach out." />
            <h1>I'd love to talk! Email me at the address below</h1>
            <p>
            <a href="mailto:me@example.com">me@example.com</a>
            </p>
        </Layout>
    )
}