import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css';

export default function About() {
  return (
    <section id="about" className="about-section py-5 bg-light text-center">
      <div className="container">
        <h2 className="display-5 fw-bold mb-4 text-primary">About Us</h2>
        <p className="lead mx-auto text-muted mb-5" style={{ maxWidth: '768px' }}>
          We create amazing web experiences using modern technologies like React, Bootstrap, and more.
          Our team is passionate about building elegant, scalable, and performant websites.
        </p>

        <div className="row text-start">
      
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title text-primary">Our Mission</h5>
                <p className="card-text text-muted">
                  To empower businesses and individuals with high-quality digital solutions that are both innovative and accessible.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title text-primary">Our Team</h5>
                <p className="card-text text-muted">
                  A group of creative developers, designers, and strategists working together to bring your ideas to life.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title text-primary">Technologies We Use</h5>
                <p className="card-text text-muted">
                  We specialize in React, JavaScript, Node.js, Bootstrap, and other modern web tools to build fast and secure applications.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <a href="#contact" className="btn btn-primary btn-lg px-4">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
