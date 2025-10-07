import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Hero.css'; 

export default function Hero() {
  return (
    <section id="hero" className="hero-section text-white d-flex align-items-center justify-content-center min-vh-100">
      <div className="text-center px-3">
        <h1 className="display-3 fw-bold mb-4">Welcome to My Website</h1>
        <p className="lead mb-5">Built with React and Bootstrap</p>
        <a href="#about" className="btn btn-light text-primary fw-semibold px-4 py-2 rounded-pill shadow-sm">
          Learn More
        </a>
      </div>
    </section>
  );
}
