import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const contact = () => {
    return (
        <Layout>
            <SEO title="Kontakt" description="Kontaktsidan" />
            <section className="contact-page">
                <article className="contact-form">
                    <h3>kontakta mig</h3>
                    <form action="/thanks" name="contact" method="POST" netlify>
                        <div className="form-group">
                            <input
                                type="text"
                                placeholder="namn"
                                name="name"
                                className="form-control"
                                required
                            />
                            <input
                                type="email"
                                placeholder="e-post"
                                name="email"
                                className="form-control"
                                required
                            />
                            <textarea
                                name="message"
                                rows="5"
                                placeholder="meddelande"
                                className="form-control"
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="submit-btn btn">
                            Kontakta mig
                      </button>
                    </form>
                </article>
            </section>
        </Layout>
    )
}

export default contact                       