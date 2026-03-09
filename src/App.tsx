/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Briefcase, 
  ChevronRight, 
  Users, 
  BarChart3, 
  Settings, 
  Mail, 
  Linkedin, 
  Menu, 
  X,
  ArrowRight,
  CheckCircle2,
  Trophy,
  Clock,
  Globe,
  Zap,
  ShieldCheck
} from 'lucide-react';

type Language = 'es' | 'en';

const translations = {
  es: {
    nav: { services: "Servicios", about: "Nosotros", contact: "Contactar" },
    hero: {
      badge: "Nueva Marca de Consultoría",
      title: "Optimizamos el Futuro de su Empresa.",
      subtitle: "Consultoría de gestión administrativa especializada en transformar estructuras corporativas y flujos de trabajo para alcanzar la máxima eficiencia operativa.",
      ctaPrimary: "Solicitar Consultoría",
      ctaSecondary: "Nuestros Servicios",
      stats: "Eficiencia Promedio"
    },
    services: {
      badge: "Servicios Profesionales",
      title: "Soluciones a Medida para Corporativos",
      s1: {
        title: "Optimización de Flujos",
        desc: "Analizamos y rediseñamos sus procesos internos para eliminar cuellos de botella y redundancias.",
        f1: "Mapeo de procesos", f2: "Automatización", f3: "Reducción de tiempos"
      },
      s2: {
        title: "Estructura Organizativa",
        desc: "Diseñamos estructuras ágiles que facilitan la comunicación y la toma de decisiones estratégica.",
        f1: "Diseño de organigramas", f2: "Definición de roles", f3: "Gestión del cambio"
      },
      s3: {
        title: "Gestión Administrativa",
        desc: "Consultoría integral para profesionalizar el área administrativa de su corporación.",
        f1: "Auditoría operativa", f2: "KPIs de gestión", f3: "Manuales de políticas"
      }
    },
    whyChooseUs: {
      badge: "¿Por qué elegirnos?",
      title: "Diferenciadores Clave",
      item1: { title: "Experiencia Senior", desc: "Más de una década optimizando estructuras corporativas complejas." },
      item2: { title: "Enfoque en Resultados", desc: "Incrementamos la eficiencia operativa con métricas tangibles y medibles." },
      item3: { title: "Soluciones a Medida", desc: "No creemos en soluciones genéricas; cada empresa recibe un plan único." },
      item4: { title: "Visión Global", desc: "Experiencia internacional aplicada a las necesidades locales de su negocio." }
    },
    ceo: {
      badge: "Liderazgo Estratégico",
      desc: "CEO de AHB Professional Services, con más de 10 años de experiencia internacional en el diseño y optimización de flujos de trabajo corporativos.",
      exp: "Experiencia Senior",
      proc: "Procesos Optimizados",
      years: "10+ Años"
    },
    contact: {
      title: "¿Listo para optimizar su organización?",
      subtitle: "Agende una sesión de diagnóstico inicial para identificar las oportunidades de mejora en sus flujos de trabajo.",
      labelName: "Nombre Completo",
      labelEmail: "Email Corporativo",
      labelMessage: "Mensaje",
      placeholderName: "Ej. Juan Pérez",
      placeholderEmail: "juan@empresa.com",
      placeholderMessage: "Cuéntenos sobre sus necesidades de optimización...",
      button: "Enviar Mensaje"
    },
    footer: {
      rights: "Todos los derechos reservados."
    }
  },
  en: {
    nav: { services: "Services", about: "About Us", contact: "Contact" },
    hero: {
      badge: "New Consulting Brand",
      title: "Optimizing the Future of Your Business.",
      subtitle: "Administrative management consultancy specialized in transforming corporate structures and workflows to achieve maximum operational efficiency.",
      ctaPrimary: "Request Consultancy",
      ctaSecondary: "Our Services",
      stats: "Average Efficiency"
    },
    services: {
      badge: "Professional Services",
      title: "Tailored Solutions for Corporates",
      s1: {
        title: "Workflow Optimization",
        desc: "We analyze and redesign your internal processes to eliminate bottlenecks and redundancies.",
        f1: "Process mapping", f2: "Automation", f3: "Time reduction"
      },
      s2: {
        title: "Organizational Structure",
        desc: "We design agile structures that facilitate communication and strategic decision-making.",
        f1: "Org chart design", f2: "Role definition", f3: "Change management"
      },
      s3: {
        title: "Administrative Management",
        desc: "Comprehensive consultancy to professionalize the administrative area of your corporation.",
        f1: "Operational audit", f2: "Management KPIs", f3: "Policy manuals"
      }
    },
    whyChooseUs: {
      badge: "Why Choose Us?",
      title: "Key Differentiators",
      item1: { title: "Senior Expertise", desc: "Over a decade optimizing complex corporate structures." },
      item2: { title: "Results-Driven", desc: "We increase operational efficiency with tangible and measurable metrics." },
      item3: { title: "Tailored Solutions", desc: "We don't believe in generic solutions; every company receives a unique plan." },
      item4: { title: "Global Vision", desc: "International experience applied to the local needs of your business." }
    },
    ceo: {
      badge: "Strategic Leadership",
      desc: "CEO of AHB Professional Services, with over 10 years of international experience in designing and optimizing corporate workflows.",
      exp: "Senior Experience",
      proc: "Optimized Processes",
      years: "10+ Years"
    },
    contact: {
      title: "Ready to optimize your organization?",
      subtitle: "Schedule an initial diagnostic session to identify improvement opportunities in your workflows.",
      labelName: "Full Name",
      labelEmail: "Corporate Email",
      labelMessage: "Message",
      placeholderName: "e.g. John Doe",
      placeholderEmail: "john@company.com",
      placeholderMessage: "Tell us about your optimization needs...",
      button: "Send Message"
    },
    footer: {
      rights: "All rights reserved."
    }
  }
};

const Navbar = ({ lang, setLang }: { lang: Language, setLang: (l: Language) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const t = translations[lang].nav;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold tracking-tighter text-slate-900">
              AHB<span className="text-blue-600">.</span>
            </span>
            <span className="ml-2 text-sm font-medium uppercase tracking-widest text-slate-500 hidden sm:block">
              Professional Services
            </span>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#servicios" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">{t.services}</a>
            <a href="#nosotros" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">{t.about}</a>
            
            <button 
              onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
              className="flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors px-3 py-1 rounded-full bg-slate-50 border border-slate-200"
            >
              <Globe size={16} />
              {lang === 'es' ? 'EN' : 'ES'}
            </button>

            <a href="#contacto" className="px-5 py-2.5 bg-slate-900 text-white text-sm font-medium rounded-full hover:bg-blue-600 transition-all shadow-lg shadow-slate-200">
              {t.contact}
            </a>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
              className="text-sm font-bold text-slate-600"
            >
              {lang === 'es' ? 'EN' : 'ES'}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-slate-600">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-b border-slate-100 px-4 pt-2 pb-6 space-y-4"
          >
            <a href="#servicios" onClick={() => setIsOpen(false)} className="block text-lg font-medium text-slate-900">{t.services}</a>
            <a href="#nosotros" onClick={() => setIsOpen(false)} className="block text-lg font-medium text-slate-900">{t.about}</a>
            <a href="#contacto" onClick={() => setIsOpen(false)} className="block w-full py-3 bg-blue-600 text-white text-center rounded-xl font-medium">{t.contact}</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ lang }: { lang: Language }) => {
  const t = translations[lang].hero;
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-slate-50/50 rounded-l-[100px] hidden lg:block" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6">
              {t.badge}
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-8">
              {t.title.split(' ').map((word, i) => word === 'Futuro' || word === 'Future' ? <span key={i} className="text-blue-600">{word} </span> : word + ' ')}
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-xl">
              {t.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contacto" className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-semibold flex items-center justify-center hover:bg-blue-700 transition-all shadow-xl shadow-blue-200">
                {t.ctaPrimary} <ArrowRight className="ml-2" size={20} />
              </a>
              <a href="#servicios" className="px-8 py-4 bg-white border border-slate-200 text-slate-900 rounded-2xl font-semibold flex items-center justify-center hover:bg-slate-50 transition-all">
                {t.ctaSecondary}
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
                alt="Modern Office" 
                className="w-full h-[500px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden sm:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                  <BarChart3 size={24} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">+40%</p>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">{t.stats}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = ({ lang }: { lang: Language }) => {
  const t = translations[lang].services;
  const services = [
    {
      title: t.s1.title,
      description: t.s1.desc,
      icon: <Settings className="text-blue-600" size={32} />,
      features: [t.s1.f1, t.s1.f2, t.s1.f3]
    },
    {
      title: t.s2.title,
      description: t.s2.desc,
      icon: <Users className="text-blue-600" size={32} />,
      features: [t.s2.f1, t.s2.f2, t.s2.f3]
    },
    {
      title: t.s3.title,
      description: t.s3.desc,
      icon: <Briefcase className="text-blue-600" size={32} />,
      features: [t.s3.f1, t.s3.f2, t.s3.f3]
    }
  ];

  return (
    <section id="servicios" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.2em] mb-4">{t.badge}</h2>
          <p className="text-4xl font-bold text-slate-900">{t.title}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-100 transition-all hover:shadow-2xl hover:shadow-slate-200"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center text-sm text-slate-700 font-medium">
                    <CheckCircle2 size={16} className="text-blue-500 mr-2" /> {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = ({ lang }: { lang: Language }) => {
  const t = translations[lang].whyChooseUs;
  const items = [
    {
      title: t.item1.title,
      desc: t.item1.desc,
      icon: <Trophy className="text-blue-600" size={24} />
    },
    {
      title: t.item2.title,
      desc: t.item2.desc,
      icon: <Zap className="text-blue-600" size={24} />
    },
    {
      title: t.item3.title,
      desc: t.item3.desc,
      icon: <ShieldCheck className="text-blue-600" size={24} />
    },
    {
      title: t.item4.title,
      desc: t.item4.desc,
      icon: <Globe className="text-blue-600" size={24} />
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.2em] mb-4">{t.badge}</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-8 leading-tight">{t.title}</h3>
            <p className="text-lg text-slate-600 mb-8">
              {lang === 'es' 
                ? "En AHB Professional Services, transformamos la complejidad en claridad. Nuestro enfoque metódico garantiza que cada engranaje de su organización funcione en perfecta armonía."
                : "At AHB Professional Services, we transform complexity into clarity. Our methodical approach ensures that every gear in your organization works in perfect harmony."}
            </p>
            <div className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <p className="font-bold text-slate-900">
                  {lang === 'es' ? "Compromiso de Excelencia" : "Commitment to Excellence"}
                </p>
                <p className="text-sm text-slate-500">
                  {lang === 'es' ? "Garantizamos resultados medibles en 90 días." : "We guarantee measurable results within 90 days."}
                </p>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const CEOSection = ({ lang }: { lang: Language }) => {
  const t = translations[lang].ceo;
  return (
    <section id="nosotros" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-sm font-bold text-blue-400 uppercase tracking-[0.2em] mb-4">{t.badge}</h2>
            <h3 className="text-4xl lg:text-5xl font-bold mb-8 font-serif italic">Andres H. Bozo</h3>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              {t.desc}
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-10">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-xl">
                  <Trophy className="text-blue-400" size={24} />
                </div>
                <div>
                  <p className="text-2xl font-bold">{t.years}</p>
                  <p className="text-sm text-slate-400">{t.exp}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-xl">
                  <Clock className="text-blue-400" size={24} />
                </div>
                <div>
                  <p className="text-2xl font-bold">500+</p>
                  <p className="text-sm text-slate-400">{t.proc}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-blue-600 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-blue-600 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-3xl blur-2xl opacity-20 animate-pulse" />
              <img 
                src="/andres-bozo.webp" 
                alt="Andres H. Bozo" 
                className="relative rounded-3xl w-full max-h-[500px] object-contain mx-auto shadow-2xl transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = ({ lang }: { lang: Language }) => {
  const t = translations[lang].contact;
  return (
    <section id="contacto" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-600 rounded-3xl lg:rounded-[40px] px-4 py-10 sm:px-6 lg:p-20 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/20 rounded-full -ml-32 -mb-32 blur-3xl" />
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight text-center lg:text-left">{t.title}</h2>
              <p className="text-lg lg:text-xl text-blue-100 mb-10 text-center lg:text-left">
                {t.subtitle}
              </p>
              <div className="space-y-6 flex flex-col items-center lg:items-start">
                <div className="flex items-center gap-4 bg-white/10 px-6 py-4 rounded-2xl border border-white/10 w-full max-w-md lg:max-w-none">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                    <Mail size={18} />
                  </div>
                  <span className="text-base lg:text-lg font-medium break-all">contacto@ahbprofessional.com</span>
                </div>
                <div className="flex items-center gap-4 bg-white/10 px-6 py-4 rounded-2xl border border-white/10 w-full max-w-md lg:max-w-none">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                    <Linkedin size={18} />
                  </div>
                  <span className="text-base lg:text-lg font-medium">LinkedIn AHB Professional</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl lg:rounded-3xl p-5 sm:p-6 lg:p-8 text-slate-900 shadow-2xl"
            >
              <form className="space-y-5">
                <div>
                  <label className="block text-xs font-bold mb-2 uppercase tracking-widest text-slate-400">{t.labelName}</label>
                  <input type="text" className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-300" placeholder={t.placeholderName} />
                </div>
                <div>
                  <label className="block text-xs font-bold mb-2 uppercase tracking-widest text-slate-400">{t.labelEmail}</label>
                  <input type="email" className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-300" placeholder={t.placeholderEmail} />
                </div>
                <div>
                  <label className="block text-xs font-bold mb-2 uppercase tracking-widest text-slate-400">{t.labelMessage}</label>
                  <textarea className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all h-32 placeholder:text-slate-300 resize-none" placeholder={t.placeholderMessage} />
                </div>
                <button className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 active:scale-[0.98] transition-all shadow-xl shadow-blue-200 flex items-center justify-center gap-2">
                  {t.button} <ArrowRight size={18} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = ({ lang }: { lang: Language }) => {
  const t = translations[lang].footer;
  return (
    <footer className="py-12 border-t border-slate-100 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center">
            <span className="text-xl font-bold tracking-tighter text-slate-900">
              AHB<span className="text-blue-600">.</span>
            </span>
            <span className="ml-2 text-xs font-medium uppercase tracking-widest text-slate-400">
              Professional Services
            </span>
          </div>
          
          <div className="text-sm text-slate-500">
            © {new Date().getFullYear()} AHB Professional Services. {t.rights}
          </div>

          <div className="flex space-x-6">
            <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors"><Mail size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [lang, setLang] = useState<Language>('es');

  return (
    <div className="min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar lang={lang} setLang={setLang} />
      <main>
        <Hero lang={lang} />
        <Services lang={lang} />
        <WhyChooseUs lang={lang} />
        <CEOSection lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}
