import React from 'react';

const services = [
  { title: 'Web Design', desc: 'Beautiful and responsive designs tailored to your brand.' },
  { title: 'Web Development', desc: 'High-performance React applications built to scale.' },
  { title: 'SEO Optimization', desc: 'Get found on Google and grow your traffic.' }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-p">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-10 text-indigo-600 text-primary">Services</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
