'use client';

import { useState } from 'react';

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: '',
  });

  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.nombre.trim()) return 'Por favor, ingresa tu nombre.';
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      return 'Por favor, ingresa un email válido.';
    if (!formData.telefono.trim()) return 'Por favor, ingresa tu teléfono.';
    if (!formData.asunto.trim()) return 'Por favor, ingresa un asunto.';
    if (!formData.mensaje.trim()) return 'Por favor, ingresa tu mensaje.';
    return '';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const error = validateForm();
    if (error) {
      setStatus(`error:${error}`);
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success:¡Mensaje enviado exitosamente! Nos pondremos en contacto pronto.');
        setFormData({ nombre: '', email: '', telefono: '', asunto: '', mensaje: '' });
      } else {
        setStatus('error:Hubo un error al enviar el mensaje.');
      }
    } catch (error) {
      setStatus('error:Error al conectar con el servidor.');
    } finally {
      setLoading(false);
    }
  };

  const isError = status.startsWith('error:');
  const isSuccess = status.startsWith('success:');
  const message = status.replace(/^(error|success):/, '');

  return (
    <div className="bg-white">
      {/* Banner */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold">Contacto</h1>
          <p className="text-blue-100">Nos gustaría escuchar de ti</p>
        </div>
      </section>

      {/* Contenido */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Formulario */}
          <div>
            <h2 className="text-2xl font-bold mb-8 text-gray-800">Envíanos un Mensaje</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre *
                </label>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Tu nombre completo"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Teléfono *
                </label>
                <input
                  type="tel"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Asunto *
                </label>
                <input
                  type="text"
                  name="asunto"
                  value={formData.asunto}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="¿Cuál es el motivo de tu consulta?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Mensaje *
                </label>
                <textarea
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 resize-none"
                  rows={5}
                  placeholder="Cuéntanos más sobre tu proyecto..."
                />
              </div>

              {status && (
                <div
                  className={`p-4 rounded-lg text-sm ${
                    isSuccess
                      ? 'bg-green-50 text-green-800 border border-green-200'
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}
                >
                  {message}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {loading ? 'Enviando...' : 'Enviar Mensaje'}
              </button>
            </form>
          </div>

          {/* Información de Contacto */}
          <div>
            <h2 className="text-2xl font-bold mb-8 text-gray-800">Información de Contacto</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">📧 Email</h3>
                <p className="text-gray-600">
                  <a href="mailto:info@techflow.com" className="text-blue-600 hover:underline">
                    info@techflow.com
                  </a>
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">📞 Teléfono</h3>
                <p className="text-gray-600">
                  <a href="tel:+15551234567" className="text-blue-600 hover:underline">
                    +1 (555) 123-4567
                  </a>
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">📍 Ubicación</h3>
                <p className="text-gray-600">
                  Calle Principal 123<br />
                  Madrid, España 28001<br />
                  Europa
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">🕐 Horario de Atención</h3>
                <p className="text-gray-600">
                  Lunes a Viernes: 9:00 - 18:00<br />
                  Sábado: 10:00 - 14:00<br />
                  Domingo: Cerrado
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
