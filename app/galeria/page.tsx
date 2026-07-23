'use client';

import Image from 'next/image';

export default function Galeria() {
  const galeria = [
    {
      id: 1,
      title: 'Proyecto E-commerce',
      image: 'https://images.unsplash.com/photo-1460925895917-adf4e565db42?w=400&h=300&fit=crop',
    },
    {
      id: 2,
      title: 'Rediseño de Identidad',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop',
    },
    {
      id: 3,
      title: 'App Móvil Innovadora',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop',
    },
    {
      id: 4,
      title: 'Dashboard Analytics',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
    },
    {
      id: 5,
      title: 'Portal de Servicios',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
    },
    {
      id: 6,
      title: 'Plataforma SaaS',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=300&fit=crop',
    },
  ];

  return (
    <div className="bg-white">
      {/* Banner */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold">Galería de Proyectos</h1>
          <p className="text-blue-100">Mira algunos de nuestros trabajos destacados</p>
        </div>
      </section>

      {/* Galería */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galeria.map((proyecto) => (
              <div
                key={proyecto.id}
                className="group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition"
              >
                <div className="relative h-64 overflow-hidden bg-gray-200">
                  <img
                    src={proyecto.image}
                    alt={proyecto.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                  />
                </div>
                <div className="bg-gray-100 p-4">
                  <h3 className="text-lg font-bold text-gray-800">{proyecto.title}</h3>
                  <p className="text-gray-600 text-sm">Proyecto completado</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">¿Te Gustaría Trabajar Connosotros?</h2>
          <p className="text-gray-600 mb-8">
            Estos son solo algunos ejemplos de lo que podemos lograr. Cuéntanos tu idea y hagámosla realidad.
          </p>
          <a
            href="/contacto"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition inline-block"
          >
            Comienza Tu Proyecto
          </a>
        </div>
      </section>
    </div>
  );
}
