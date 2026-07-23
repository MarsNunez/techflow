'use client';

import { useEffect, useState } from 'react';

interface Contact {
  id: string;
  nombre: string;
  email: string;
  telefono: string;
  asunto: string;
  mensaje: string;
  fecha: string;
}

export default function Admin() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await fetch('/api/contact');
      const data = await response.json();
      setContacts(data.contacts || []);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    } finally {
      setLoading(false);
    }
  };

  const deleteContact = async (id: string) => {
    if (!confirm('¿Estás seguro de que deseas eliminar este contacto?')) return;

    try {
      const response = await fetch(`/api/contact/${id}`, { method: 'DELETE' });
      if (response.ok) {
        setContacts((prev) => prev.filter((c) => c.id !== id));
      }
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Banner */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold">Panel Administrativo</h1>
          <p className="text-blue-100">Gestión de consultas de clientes</p>
        </div>
      </section>

      {/* Contenido */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
            <div className="mb-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-800">
                Consultas Recibidas ({contacts.length})
              </h2>
              <button
                onClick={fetchContacts}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Actualizar
              </button>
            </div>

            {loading ? (
              <p className="text-gray-600 text-center py-8">Cargando consultas...</p>
            ) : contacts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg mb-4">No hay consultas aún</p>
                <p className="text-gray-500">Los formularios de contacto aparecerán aquí</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="border-b-2 border-gray-300">
                    <tr>
                      <th className="py-3 px-4 font-bold text-gray-800">Nombre</th>
                      <th className="py-3 px-4 font-bold text-gray-800">Email</th>
                      <th className="py-3 px-4 font-bold text-gray-800">Teléfono</th>
                      <th className="py-3 px-4 font-bold text-gray-800">Asunto</th>
                      <th className="py-3 px-4 font-bold text-gray-800">Fecha</th>
                      <th className="py-3 px-4 font-bold text-gray-800">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {contacts.map((contact) => (
                      <tr key={contact.id} className="border-b border-gray-200 hover:bg-gray-100 transition">
                        <td className="py-3 px-4 text-gray-800">{contact.nombre}</td>
                        <td className="py-3 px-4 text-gray-600">
                          <a href={`mailto:${contact.email}`} className="text-blue-600 hover:underline">
                            {contact.email}
                          </a>
                        </td>
                        <td className="py-3 px-4 text-gray-600">{contact.telefono}</td>
                        <td className="py-3 px-4 text-gray-600">{contact.asunto}</td>
                        <td className="py-3 px-4 text-gray-600">{contact.fecha}</td>
                        <td className="py-3 px-4">
                          <button
                            onClick={() => deleteContact(contact.id)}
                            className="text-red-600 hover:text-red-800 font-bold transition"
                          >
                            Eliminar
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Nota */}
            <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-blue-800 text-sm">
                <strong>Nota:</strong> Los datos se almacenan localmente en el navegador y se borran al refrescar la página.
                Para producción, se recomienda usar una base de datos permanente.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
