import React from "react"
import Footer from "../shared/Footer"
import ContactDetails from "./ContactDetails"
import ContactForm from "./ContactForm"
import Header from "../shared/Header"

const Contact = () => {
  return (
    <div>
    <Header/>
      <div className="mx-auto flex flex-col justify-between gap-10 text-white lg:flex-row bg-[#000814] lg:p-[140px] md:p-[100px] sm:p-[50px]">
        {/* Contact Details */}
        <div className="lg:w-[40%]">
          <ContactDetails />
        </div>

        {/* Contact Form */}
        <div className="lg:w-[60%]">
          <ContactForm />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact