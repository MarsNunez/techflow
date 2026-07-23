export default function Nosotros() {
  return (
    <div className="bg-white">
      {/* Banner */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold">Nosotros</h1>
          <p className="text-blue-100">Conoce nuestra historia y valores</p>
        </div>
      </section>

      {/* Contenido */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Historia */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Historia</h2>
            <p className="text-gray-600 mb-4">
              TechFlow fue fundada en 2014 con una visión clara: transformar la forma en que las
              empresas se relacionan con la tecnología digital. Lo que comenzó como un pequeño equipo
              de 3 desarrolladores ha crecido hasta convertirse en una agencia líder con más de 50
              profesionales especializados.
            </p>
            <p className="text-gray-600">
              A lo largo de estos años, hemos trabajado con empresas de diversos sectores, desde
              startups innovadoras hasta grandes corporaciones, ayudándolas a alcanzar sus objetivos
              digitales mediante soluciones creativas y tecnológicamente avanzadas.
            </p>
          </div>

          {/* Misión, Visión y Valores */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Misión */}
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">Misión</h3>
              <p className="text-gray-600">
                Proveer soluciones web innovadoras y de calidad que permitan a nuestros clientes
                prosperar en la era digital, combinando tecnología de punta con atención personalizada.
              </p>
            </div>

            {/* Visión */}
            <div className="bg-green-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-green-600">Visión</h3>
              <p className="text-gray-600">
                Ser la agencia de desarrollo web más confiable y innovadora en el mercado, reconocida
                por nuestro compromiso con la excelencia y por transformar ideas en soluciones digitales
                exitosas.
              </p>
            </div>

            {/* Valores */}
            <div className="bg-purple-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-purple-600">Valores</h3>
              <ul className="text-gray-600 space-y-2">
                <li>✓ Innovación continua</li>
                <li>✓ Integridad y transparencia</li>
                <li>✓ Excelencia en calidad</li>
                <li>✓ Compromiso con el cliente</li>
              </ul>
            </div>
          </div>

          {/* Estadísticas */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <p className="text-gray-600">Proyectos Completados</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
              <p className="text-gray-600">Profesionales</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">10+</div>
              <p className="text-gray-600">Años de Experiencia</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">95%</div>
              <p className="text-gray-600">Satisfacción Clientes</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
