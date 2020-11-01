import React from 'react'
import Title from '../Globals/Title'

export default function Contact() {
  return (
    <section className="contact py-5">
      <Title title="Contact us" />
      <div className="col-10 col-sm-8 col-md-6 col-lg-4 mx-auto">
        <form action="https://formspree.io/mr.dawit@yandex.com">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" name="name" id="name" placeholder="John Smith"/>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="text" className="form-control" name="email" id="email" placeholder="email@email.com"/>
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea name="description" id="decription" className="form-control" rows="5" placeholder="your desvription here..." />
          </div>
          <button type="submit" className="btn btn-yellow btn-block text-capitalize mt-5">Submit</button>
        </form>
      </div>
    </section>
  )
}
