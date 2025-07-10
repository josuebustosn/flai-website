import { useState } from 'react';
import logo from './assets/logo-binatur.png';
import heroVideo from './assets/videos/video.mp4';
import imgRoques from './assets/roques.jpg';
import imgMadrid from './assets/madrid.jpg';
import imgTokio from './assets/tokio.jpg';
import imgAgencia from './assets/agencia.jpg';
import imgParis from './assets/paris.jpg';


export default function App() {
  const [activeTab, setActiveTab] = useState('inicio');
  const [activeService, setActiveService] = useState(null);
  const changeTabAndScroll = (tabName) => {
    setActiveTab(tabName);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  

  const services = [
    {
      title: "Experiencias a Medida",
      content: "Tu viaje, tus reglas. Diseñamos itinerarios desde cero, desde escapadas de fin de semana hasta la aventura de tu vida. Nos encargamos de vuelos, hoteles y todo lo que necesites."
    },
    {
      title: "Viajes Corporativos (Business Class)",
      content: "Optimizamos los viajes de tu empresa con un servicio premium. Gestionamos la logística para ejecutivos y equipos con la agilidad y eficiencia que tu negocio merece."
    },
    {
      title: "Acceso al futuro",
      content: "Imagina planificar, reservar y gestionar cada detalle de tu viaje de una forma nunca antes vista. Estamos dándole acceso anticipado a nuestra comunidad para que prueben el futuro de los viajes en Venezuela. Únete y sé pionero."
    },
    {
      title: "Asesoría Integral",
      content: "Viaja sin preocupaciones. Te asistimos con toda la documentación, seguros de viaje y la logística necesaria para que solo te concentres en disfrutar."
    }
  ];

  const testimonials = [
    {
      quote: "Seguro fue que un maracucho te rompió el corazón.",
      author: "@luisbruzualc en un comentario de Instagram"
    },
    {
      quote: "Si ayudan a cumplir el sueño regalando esos $530 🤣🤣🤣",
      author: "@rosmelin_tb en un comentario de Instagram"
    }
  ];

  const destinations = [
    {
      name: "💻",
      image: imgRoques 
    },
    {
      name: "✈️",
      image: imgMadrid 
    },
    {
      name: "❤️‍",
      image: imgTokio 
    },
    {
      name: "🆒",
      image: imgParis
    }
  ];

  return (
    <div className="font-sans text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-1 flex justify-between items-center">
          {/* 2. REEMPLAZA EL H1 CON ESTE BOTÓN QUE CONTIENE LA IMAGEN */}
          <button 
          onClick={() => {
  setActiveTab('inicio');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}} className="focus:outline-none">
            <img src={logo} alt="Logo de Binatur Internacional" className="h-16 w-auto" /> 
          </button>
          <nav className="space-x-6 hidden md:flex">
            <button onClick={() => changeTabAndScroll('inicio')} className={`text-sm font-medium hover:text-[#4A9098] transition ${activeTab === 'inicio' ? 'text-[#1162f7]' : ''}`}>Inicio</button>
            <button onClick={() => changeTabAndScroll('nosotros')} className={`text-sm font-medium hover:text-[#4A9098] transition ${activeTab === 'nosotros' ? 'text-[#1162f7]' : ''}`}>¿flai?</button>
            <button onClick={() => changeTabAndScroll('productos')} className={`text-sm font-medium hover:text-[#4A9098] transition ${activeTab === 'productos' ? 'text-[#1162f7]' : ''}`}>Productos</button>
            <button onClick={() => changeTabAndScroll('hablemos')} className={`text-sm font-medium hover:text-[#4A9098] transition ${activeTab === 'hablemos' ? 'text-[#1162f7]' : ''}`}>Hablemos</button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      {activeTab === 'inicio' && (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0">
            <source src={heroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
          <div className="container mx-auto px-6 text-center relative z-20 text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">Mucho más que una agencia de viajes.</h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">Somos la más cool de Venezuela. 😎</p>
            <button onClick={() => changeTabAndScroll('hablemos')} className="inline-block bg-[#1162f7] text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition">Descubrir más</button>
          </div>
        </section>
      )}

      {/* Home Sections */}
      {activeTab === 'inicio' && (
        <main>
          <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#0A1931]">La nueva forma de viajar está por llegar. Prepárate.</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-[#F8F9FA] flex items-center justify-center rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-[#4A9098]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Experiencias Únicas</h3>
                  <p>Olvídate de los paquetes aburridos. Creamos viajes a medida que conectan contigo.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-[#F8F9FA] flex items-center justify-center rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-[#4A9098]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="7" width="20" height="14" rx="2"></rect><line x1="8" y1="11" x2="8" y2="17"></line><line x1="12" y1="11" x2="12" y2="17"></line><line x1="16" y1="11" x2="16" y2="17"></line><line x1="3" y1="7" x2="21" y2="7"></line>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Viajes de Negocios</h3>
                  <p>Eficiencia y estilo para tus viajes corporativos. Nos encargamos de todo para que tú te encargues del éxito.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-[#F8F9FA] flex items-center justify-center rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-[#4A9098]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Comunidad Digital</h3>
                  <p>Conectamos con miles de viajeros a diario. Somos la comunidad de viajes más influyente del occidente del país.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-[#F8F9FA] flex items-center justify-center rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-[#4A9098]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">El futuro es con flai</h3>
                  <p>Estamos construyendo algo que cambiará las reglas del juego. La revolución de los viajes ha comenzado.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 bg-gray-100">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#0A1931]">flai in a nutshell</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {destinations.map((dest, index) => (
                  <div key={index} className="group relative overflow-hidden rounded-lg shadow-md transform transition duration-300 hover:scale-105">
                    <img src={dest.image} alt={dest.name} className="w-full h-64 object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 group-hover:opacity-90 transition flex items-end">
                      <h3 className="text-white text-xl font-bold p-4">{dest.name}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#0A1931]">Lo que se dice por ahí</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
                {testimonials.map((t, i) => (
                  <div key={i} className="bg-gray-100 p-6 rounded-lg shadow-sm">
                    <p className="italic text-gray-700 mb-4">"{t.quote}"</p>
                    <p className="text-right font-semibold text-[#0A1931]">— {t.author}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="hablemos" className="py-20 bg-gray-100">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#0A1931]">¿Listo para ser parte del futuro?</h2>
                <p className="text-lg mb-10">El mundo es muy grande para viajar siempre de la misma forma. Suscríbete y sé el primero en enterarte de lo que viene.</p>
                <button onClick={() => changeTabAndScroll('hablemos')} className="inline-block bg-[#1162f7] text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition">¡Quiero ser el primero!</button>
              </div>
            </div>
          </section>
        </main>
      )}

      {/* About Us Page */}
      {activeTab === 'nosotros' && (
        <main className="bg-white">
          <section className="py-20">
            <div className="container mx-auto px-6">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/2">
                  <img src={imgAgencia}  alt="Nuestra Filosofía" className="rounded-lg shadow-lg w-full" />
                </div>
                <div className="lg:w-1/2">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#0A1931]">Nacimos para cambiarlo todo.</h2>
                  <p className="mb-6 text-lg">
                    Somos flai. Más que una agencia, somos un movimiento. Nacimos de la pasión por viajar y la frustración con lo tradicional. Con una presencia digital que impacta a miles, nos hemos convertido en la referencia de viajes para una nueva generación en el occidente de Venezuela.
                  </p>
                  <p className="text-lg">
                    No solo vendemos destinos, creamos experiencias y construimos comunidad. Creemos en un futuro donde planificar tu viaje sea tan emocionante como vivirlo. Y estamos aquí para construirlo.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 bg-gray-100">
            <div className="container mx-auto px-6">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#0A1931]">Nuestra Promesa</h2>
                <p className="text-lg">
                  Nuestro foco es la excelencia en el presente. Cada viajero es un mundo, por eso cada viaje que creamos es una pieza única. Nos obsesiona la calidad en cada detalle, desde la primera consulta hasta tu regreso a casa. Fomentamos un espacio para compartir, inspirar y conectar a través de la pasión por viajar.
                </p>
              </div>
            </div>
          </section>
        </main>
      )}

      {/* Services Page */}
      {activeTab === 'productos' && (
        <main className="bg-white">
          <section className="py-20">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#0A1931]">Soluciones para el viajero de hoy.</h2>
              <div className="max-w-4xl mx-auto">
                <div className="border-b border-gray-200">
                  {services.map((service, index) => (
                    <div key={index}>
                      <button
                        onClick={() => setActiveService(activeService === index ? null : index)}
                        className={`w-full text-left py-5 px-4 focus:outline-none flex justify-between items-center ${
                          activeService === index ? 'text-[#1162f7] font-semibold' : 'text-gray-700'
                        }`}
                      >
                        <span>{service.title}</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className={`w-5 h-5 transition-transform ${activeService === index ? 'transform rotate-180' : ''}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      <div
                        className={`transition-all duration-300 ease-in-out overflow-hidden ${
                          activeService === index ? 'max-h-96 pb-5' : 'max-h-0'
                        }`}
                      >
                        <p className="px-4 text-gray-700">{service.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>
      )}

      {/* Contact Page */}
      {activeTab === 'hablemos' && (
        <main className="bg-white">
          <section className="py-20">
            <div className="container mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#0A1931]">Hablemos</h2>
                  <p className="mb-6 text-lg">¿Tienes una idea de viaje, una propuesta o simplemente quieres ser parte de lo que viene? Escríbenos. Nos encanta conectar con gente cool.</p>
                  <form className="space-y-4">
                    <input type="text" placeholder="Nombre" className="w-full p-3 border border-gray-300 rounded" />
                    <input type="email" placeholder="Tu @usuario de Instagram" className="w-full p-3 border border-gray-300 rounded" />
                    <input type="tel" placeholder="Teléfono" className="w-full p-3 border border-gray-300 rounded" />
                    <textarea placeholder="Mensaje" rows="5" className="w-full p-3 border border-gray-300 rounded"></textarea>
                    <button type="submit" className="bg-[#1162f7] text-white px-6 py-3 rounded font-semibold hover:bg-opacity-90 transition">Enviar Mensaje</button>
                  </form>
                </div>
                <div>
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-2 text-[#0A1931]">Dirección</h3>
                    <p>Carrera 18 entre calles 9 y 10, local 9-125, San Cristóbal, Táchira 5001, Venezuela</p>
                  </div>
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-2 text-[#0A1931]">Teléfonos</h3>
                    <p>+58 (276) 356.61.88 | +58 (424) 714.00.87</p>
                  </div>
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-2 text-[#0A1931]">Email</h3>
                    <p>flai.binatur@gmail.com</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-[#0A1931]">Horario de Atención</h3>
                    <p>Lunes a Sábado: 8:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-10 bg-gray-100">
            <div className="container mx-auto px-6">
              <iframe
                src="https://maps.google.com/maps?q=Carrera%2018%20entre%20calles%209%20y%2010%2C%20local%209-125%2C%20Barrio%20Obrero%2C%20San%20Crist%C3%B3bal%2C%20Estado%20T%C3%A1chira&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="400"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
                title="Ubicación de Binatur"
                className="rounded-lg shadow-md"
              ></iframe>
            </div>
          </section>
        </main>
      )}

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="container mx-auto px-6 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <h3 className="text-xl font-bold text-[#0A1931] mb-4">flai</h3> 
              <p className="text-gray-600">Revolucionando el turismo en Venezuela.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#0A1931] mb-4">Enlaces</h3>
              <ul className="space-y-2">
                <li><button onClick={() => changeTabAndScroll('inicio')} className="text-gray-600 hover:text-[#4A9098]">Inicio</button></li>
                <li><button onClick={() => changeTabAndScroll('nosotros')} className="text-gray-600 hover:text-[#4A9098]">¿flai?</button></li>
                <li><button onClick={() => changeTabAndScroll('productos')} className="text-gray-600 hover:text-[#4A9098]">Productos</button></li>
                <li><button onClick={() => changeTabAndScroll('hablemos')} className="text-gray-600 hover:text-[#4A9098]">Hablemos</button></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#0A1931] mb-4">Hablemos</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Carrera 18 entre calles 9 y 10, local 9-125, San Cristóbal, Táchira 5001, Venezuela</li>
                <li>+58 (276) 356.61.88 | +58 (424) 714.00.87</li>
                <li>flai.binatur@gmail.com</li>
              </ul>
              <div className="mt-4 flex space-x-4">
                <a href="https://www.instagram.com/flai.binatur"  target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#1162f7]">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.06 2.695.204 0 2.627 0 7.066c0 1.411.016 2.463.061 3.445.045 1.264.228 2.463.636 3.445 1.133 2.793 3.533 4.887 6.639 5.391.494.079.791.088 2.129.093 1.412-.003 1.916-.015 3.444-.093 3.105-.504 5.505-2.598 6.638-5.391.409-.982.592-2.181.637-3.445.045-.981.06-2.033.06-3.445 0-4.439-2.695-6.862-7.054-7.002C12.333-.014 12.741 0 12 0zm0 11.414a3.414 3.414 0 110-6.828 3.414 3.414 0 010 6.828zM18.584 9.167a.997.997 0 01-1.414 0 2.414 2.414 0 00-3.414 0 .997.997 0 01-1.414 0 2.414 2.414 0 00-3.414 0 .997.997 0 01-1.414 0 2.414 2.414 0 000 3.414.997.997 0 010 1.414 2.414 2.414 0 003.414 0 .997.997 0 011.414 0 2.414 2.414 0 003.414 0 .997.997 0 011.414 0 2.414 2.414 0 000-3.414z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <hr className="my-8 border-gray-200" />
          <div className="text-center text-gray-500 text-sm">
            © 2025 Agencia de Viajes 'flai'. | Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}