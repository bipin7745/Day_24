import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Contact() {
  return (
    <section id="contact" className="py-5 bg-light text-center">
      <h2 className="display-5 fw-bold mb-4 text-primary">Contact Us</h2>
      <form className="container" style={{ maxWidth: '600px' }}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Your Email"
          />
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Your Message"
            rows="5"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary px-4 py-2">
          Send Message
        </button>
      </form>
    </section>
  );
}
