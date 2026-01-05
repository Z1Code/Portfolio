import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";
import { 
  SiReact, 
  SiNextdotjs, 
  SiNodedotjs, 
  SiJavascript,
  SiPostgresql,
  SiGit,
  SiNvidia,
  SiAmd,
  SiIntel,
  SiAsus
} from "react-icons/si";

const technologies = [
  { name: "React", icon: SiReact, color: "text-blue-500" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-black dark:text-white" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
  { name: "Git", icon: SiGit, color: "text-orange-500" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-700" },
];

const hardware = [
  { name: "NVIDIA | CUDA", icon: SiNvidia, color: "text-green-500" },
  { name: "AMD", icon: SiAmd, color: "text-red-500" },
  { name: "Intel", icon: SiIntel, color: "text-blue-500" },
  { name: "ASUS", icon: SiAsus, color: "text-red-600" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-slate-200 dark:border-slate-700 z-50">
        <nav className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-slate-800 dark:text-white">Juan Fernandez</h2>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Acerca</a>
              <a href="#technologies" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Tecnologías</a>
              <a href="#hardware" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Hardware</a>
              <a href="#projects" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Proyectos</a>
              <a href="#contact" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contacto</a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="about" className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-7xl font-bold text-slate-800 dark:text-white mb-6">
                Hola, soy <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Juan Fernandez
                </span>
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                Soy un desarrollador con experiencia en tecnologías modernas de desarrollo web.
                Me especializo en crear aplicaciones escalables y eficientes utilizando las
                mejores prácticas del desarrollo de software.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                Mi enfoque se centra en escribir código limpio, mantenible y orientado a
                resultados. Disfruto trabajando tanto en el frontend como en el backend,
                creando soluciones completas que satisfagan las necesidades del usuario.
              </p>
              <div>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  <FaEnvelope />
                  Contactar
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="group bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-700 dark:to-slate-800 p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 border border-slate-200 dark:border-slate-600">
                <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">3+</h3>
                <p className="text-slate-600 dark:text-slate-300">Años de Experiencia</p>
              </div>
              <div className="group bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-700 dark:to-slate-800 p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 border border-slate-200 dark:border-slate-600">
                <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">20+</h3>
                <p className="text-slate-600 dark:text-slate-300">Proyectos Completados</p>
              </div>
              <div className="group bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-700 dark:to-slate-800 p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 border border-slate-200 dark:border-slate-600">
                <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">100%</h3>
                <p className="text-slate-600 dark:text-slate-300">Satisfacción Cliente</p>
              </div>
              <div className="group bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-700 dark:to-slate-800 p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 border border-slate-200 dark:border-slate-600">
                <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">24/7</h3>
                <p className="text-slate-600 dark:text-slate-300">Soporte Disponible</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-800 dark:text-white mb-12">
            Tecnologías de desarrollo
          </h2>
          <p className="text-xl text-center text-slate-600 dark:text-slate-300 mb-12">
            Herramientas y tecnologías que domino para crear soluciones excepcionales
          </p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
            {technologies.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 hover:scale-110 border border-slate-100 dark:border-slate-700 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-300"></div>
                  <div className="relative flex flex-col items-center space-y-3">
                    <IconComponent className={`text-4xl ${tech.color} group-hover:scale-125 group-hover:rotate-12 transition-all duration-300`} />
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300 text-center group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {tech.name}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Hardware Section */}
      <section id="hardware" className="py-12 px-6 bg-white dark:bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-800 dark:text-white mb-12">
            Hardware
          </h2>
          <p className="text-xl text-center text-slate-600 dark:text-slate-300 mb-12">
            Plataformas y tecnologías de hardware con las que trabajo
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {hardware.map((hw, index) => {
              const IconComponent = hw.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-slate-50 to-white dark:from-slate-700 dark:to-slate-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 hover:scale-110 border border-slate-200 dark:border-slate-600 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-transparent group-hover:from-slate-200/50 group-hover:to-slate-300/50 dark:group-hover:from-slate-600/30 dark:group-hover:to-slate-500/30 transition-all duration-300"></div>
                  <div className="relative flex flex-col items-center space-y-3">
                    <IconComponent className={`text-4xl ${hw.color} group-hover:scale-125 group-hover:-rotate-6 transition-all duration-300`} />
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300 text-center group-hover:font-bold transition-all">
                      {hw.name}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-white dark:bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-800 dark:text-white mb-12">
            Proyectos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* VelocitySetups Project */}
            <div className="group bg-gradient-to-br from-slate-50 to-white dark:from-slate-700 dark:to-slate-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-105 border border-slate-200 dark:border-slate-600 relative">
              <div className="h-48 overflow-hidden relative">
                {/* GPU Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black opacity-80 group-hover:opacity-90 transition-opacity duration-300">
                  <div className="absolute inset-0 group-hover:scale-110 transition-transform duration-500" style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=200&fit=crop&auto=format')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'blur(2px)'
                  }}></div>
                </div>
                {/* Banner overlay */}
                <div className="relative z-10 h-full group-hover:scale-105 transition-transform duration-500">
                  <Image
                    src="/velocity-banner.png"
                    alt="VelocitySetups Hardware Store Banner"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="p-6 relative">
                <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-500"></div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  VelocitySetups
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Plataforma web especializada en la venta de builds de PC optimizados para gaming.
                  Diseño moderno y experiencia de usuario enfocada en gamers.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded-full group-hover:scale-110 transition-transform">
                    React
                  </span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full group-hover:scale-110 transition-transform">
                    Next.js
                  </span>
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm rounded-full group-hover:scale-110 transition-transform">
                    E-commerce
                  </span>
                </div>
                <div className="flex space-x-4">
                  <a
                    href="https://velocitysetups.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                  >
                    Ver Sitio Web
                  </a>
                  <a href="#" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    <FaGithub className="inline" /> Código
                  </a>
                </div>
              </div>
            </div>

            {/* Coming Soon Project 1 */}
            <div className="group bg-gradient-to-br from-slate-50 to-white dark:from-slate-700 dark:to-slate-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-105 border border-slate-200 dark:border-slate-600 opacity-75 hover:opacity-100">
              <div className="h-48 bg-gradient-to-br from-slate-300 to-slate-500 dark:from-slate-600 dark:to-slate-700 flex items-center justify-center group-hover:from-blue-400 group-hover:to-purple-500 transition-all duration-500">
                <div className="text-slate-600 dark:text-slate-300 text-center group-hover:scale-110 transition-transform duration-300">
                  <div className="text-4xl mb-2 group-hover:rotate-12 transition-transform duration-300">⏳</div>
                  <div className="text-lg font-medium">Próximamente</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Proyecto en Desarrollo
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Nuevo proyecto innovador en fase de desarrollo.
                  Pronto disponible con tecnologías de vanguardia.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-slate-200 dark:bg-slate-600 text-slate-700 dark:text-slate-300 text-sm rounded-full">
                    En desarrollo
                  </span>
                </div>
                <div className="flex space-x-4">
                  <span className="text-slate-400 dark:text-slate-500">Próximamente</span>
                </div>
              </div>
            </div>

            {/* Coming Soon Project 2 */}
            <div className="group bg-gradient-to-br from-slate-50 to-white dark:from-slate-700 dark:to-slate-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-105 border border-slate-200 dark:border-slate-600 opacity-75 hover:opacity-100">
              <div className="h-48 bg-gradient-to-br from-slate-300 to-slate-500 dark:from-slate-600 dark:to-slate-700 flex items-center justify-center group-hover:from-purple-400 group-hover:to-pink-500 transition-all duration-500">
                <div className="text-slate-600 dark:text-slate-300 text-center group-hover:scale-110 transition-transform duration-300">
                  <div className="text-4xl mb-2 group-hover:-rotate-12 transition-transform duration-300">🚀</div>
                  <div className="text-lg font-medium">A continuación</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  Futuro Proyecto
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Más proyectos innovadores están en camino.
                  Mantente al tanto de las próximas actualizaciones.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-slate-200 dark:bg-slate-600 text-slate-700 dark:text-slate-300 text-sm rounded-full">
                    Planificación
                  </span>
                </div>
                <div className="flex space-x-4">
                  <span className="text-slate-400 dark:text-slate-500">A continuación</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-6">
            ¿Tienes un proyecto en mente?
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
            Estoy disponible para nuevos proyectos y colaboraciones. ¡Hablemos!
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-medium text-lg transition-all hover:scale-105">
            Empecemos a trabajar juntos
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-slate-800 dark:bg-slate-900">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-300">
            © 2024 Juan Fernandez. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
