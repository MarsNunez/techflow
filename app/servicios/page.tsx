export default function Servicios() {
  const servicios = [
    {
      id: 1,
      title: 'Desarrollo Web Personalizado',
      description: 'Sitios web completamente personalizados y adaptados a las necesidades específicas de tu negocio.',
      features: ['Diseño responsivo', 'SEO optimizado', 'Performance óptimo', 'Seguridad garantizada'],
    },
    {
      id: 2,
      title: 'Tiendas E-commerce',
      description: 'Plataformas de comercio electrónico completas y funcionales para vender en línea.',
      features: ['Gestión de inventario', 'Pasarelas de pago', 'Analytics integrado', 'Móvil optimizado'],
    },
    {
      id: 3,
      title: 'Diseño UX/UI',
      description: 'Interfaces atractivas e intuitivas que mejoran la experiencia del usuario.',
      features: ['Investigación UX', 'Prototipos interactivos', 'Usability testing', 'Design system'],
    },
    {
      id: 4,
      title: 'Aplicaciones Web Progresivas',
      description: 'Aplicaciones modernas que funcionan como apps nativas desde el navegador.',
      features: ['Offline functionality', 'Push notifications', 'Instalable', 'Rápidas y seguras'],
    },
    {
      id: 5,
      title: 'Mantenimiento y Soporte',
      description: 'Servicios continuos para mantener tu sitio actualizado, seguro y funcionando.',
      features: ['Actualizaciones mensuales', 'Monitoreo 24/7', 'Backups automáticos', 'Soporte técnico'],
    },
    {
      id: 6,
      title: 'Consultoría Digital',
      description: 'Asesoramiento experto para optimizar tu presencia digital y estrategia online.',
      features: ['Auditoría digital', 'Estrategia digital', 'Plan de acción', 'Implementación'],
    },
  ];

  return (
    <div className="bg-white">
      {/* Banner */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold">Nuestros Servicios</h1>
          <p className="text-blue-100">Soluciones integrales para tu presencia digital</p>
        </div>
      </section>

      {/* Servicios Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicios.map((servicio) => (
              <div
                key={servicio.id}
                className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:border-blue-400 hover:shadow-lg transition"
              >
                <h3 className="text-xl font-bold mb-3 text-gray-800">{servicio.title}</h3>
                <p className="text-gray-600 mb-6">{servicio.description}</p>
                <ul className="space-y-2">
                  {servicio.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-600 text-sm">
                      ✓ {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">¿Necesitas Alguno de Estos Servicios?</h2>
          <p className="text-blue-100 mb-8">
            Contáctanos para una consulta gratuita y sin compromiso sobre cómo podemos ayudarte.
          </p>
          <a
            href="/contacto"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition inline-block"
          >
            Solicita una Consulta
          </a>
        </div>
      </section>
    </div>
  );
}
