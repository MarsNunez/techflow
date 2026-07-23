import Link from 'next/link';

export default function Home() {
  const services = [
    {
      id: 1,
      title: 'Desarrollo Web',
      description: 'Sitios web modernos y responsivos con las últimas tecnologías.',
      icon: '🌐',
    },
    {
      id: 2,
      title: 'Diseño UX/UI',
      description: 'Interfaces intuitivas y atractivas pensadas en el usuario.',
      icon: '🎨',
    },
    {
      id: 3,
      title: 'Consultoría Digital',
      description: 'Asesoramiento estratégico para transformación digital.',
      icon: '💡',
    },
  ];

  return (
    <div className="bg-white">
      {/* Banner Principal */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Bienvenido a TechFlow</h1>
          <p className="text-xl mb-8 text-blue-100">
            Soluciones web innovadoras para empresas modernas
          </p>
          <Link
            href="/contacto"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition inline-block"
          >
            Solicita una Consulta
          </Link>
        </div>
      </section>

      {/* Información Breve */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">¿Quiénes Somos?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            TechFlow es una agencia de desarrollo web especializada en crear soluciones digitales
            que transforman negocios. Con más de 10 años de experiencia, hemos ayudado a empresas
            de todos los tamaños a alcanzar sus objetivos digitales.
          </p>
          <Link
            href="/nosotros"
            className="text-blue-600 font-bold hover:text-blue-800 transition"
          >
            Conoce más sobre nosotros →
          </Link>
        </div>
      </section>

      {/* Servicios Destacados */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Nuestros Servicios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/servicios"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition inline-block"
            >
              Ver Todos los Servicios
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-blue-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">¿Listo para Transformar tu Negocio?</h2>
          <p className="text-blue-100 mb-8">
            Contáctanos hoy y descubre cómo podemos ayudarte a alcanzar tus objetivos digitales.
          </p>
          <Link
            href="/contacto"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition inline-block"
          >
            Contáctanos Ahora
          </Link>
        </div>
      </section>
    </div>
  );
}
