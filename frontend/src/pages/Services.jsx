import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarMenuItem,
  Card,
  CardBody,
} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Services() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navigate = useNavigate();

  const services = [
    {
      icon: "💻",
      title: "Ingénierie Logicielle",
      description: "Applications web, mobiles et desktop sur mesure avec frameworks modernes (React, Flutter) et architectures scalables (microservices).",
    },
    {
      icon: "🔄",
      title: "Transformation Digitale",
      description: "Solutions ERP et POS intégrées (partenariat BIM POS), automatisation des processus et migration vers le cloud.",
    },
    {
      icon: "🤖",
      title: "IA & IoT",
      description: "Algorithmes de machine learning, vision par ordinateur et systèmes IoT pour des solutions prédictives et intelligentes.",
    },
    {
      icon: "🔍",
      title: "Optimisation SEO/AEO",
      description: "Stratégies avancées de référencement (SEO) et optimisation pour assistants vocaux (AEO) avec intégration d'IA.",
    },
    {
      icon: "☁️",
      title: "Cloud & Cybersécurité",
      description: "Hébergements cloud sécurisés (hybrides/SaaS), chiffrement avancé et détection proactive d'intrusions.",
    },
    {
      icon: "📊",
      title: "Business Intelligence",
      description: "Solutions BI intégrées à votre ERP pour l'analyse en temps réel et la prise de décision data-driven.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 px-6 py-8">
      {/* Navbar */}
      <Navbar onMenuOpenChange={setIsMenuOpen} isMenuOpen={isMenuOpen} className="mb-10">
        <NavbarBrand
          className="text-blue-600 font-bold text-2xl cursor-pointer"
          onClick={() => navigate("/")}
        >
          YUCCAINFO
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-6" justify="end">
          {["Accueil", "Services", "À propos", "Contact"].map((item, idx) => (
            <NavbarItem
              key={idx}
              className="cursor-pointer"
              onClick={() => navigate(item === "Accueil" ? "/" : `/${item.toLowerCase().replace(" ", "")}`)}
            >
              {item}
            </NavbarItem>
          ))}
        </NavbarContent>
        <NavbarContent justify="end" className="sm:hidden">
          <NavbarMenuToggle aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"} />
        </NavbarContent>
        <NavbarMenu className="pt-20">
          {["Accueil", "Services", "À propos", "Contact"].map((item, idx) => (
            <NavbarMenuItem
              key={idx}
              className="cursor-pointer"
              onClick={() => {
                setIsMenuOpen(false);
                navigate(item === "Accueil" ? "/" : `/${item.toLowerCase().replace(" ", "")}`);
              }}
            >
              {item}
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>

      {/* Hero Section */}
      <div className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-extrabold text-blue-700 mb-6"
        >
          Nos Domaines d'Excellence
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto"
        >
          Innovation intelligente et excellence opérationnelle pour votre transformation digitale.
        </motion.p>
      </div>

      {/* Services Section */}
      <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <Card
              shadow="lg"
              isHoverable
              className="p-6 bg-white/70 backdrop-blur-md hover:shadow-2xl transition-transform hover:scale-105 rounded-3xl h-full"
            >
              <CardBody className="flex flex-col items-center text-center gap-4">
                <div className="text-6xl">{service.icon}</div>
                <h2 className="text-2xl font-bold text-gray-800">{service.title}</h2>
                <p className="text-gray-600">{service.description}</p>
              </CardBody>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Partenariat BIM POS */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-20 p-8 bg-blue-700 rounded-3xl text-white max-w-6xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-4">Partenariat Exclusif BIM POS</h2>
        <p className="mb-6">
          Premier partenaire officiel en Tunisie, nous offrons des solutions intégrées POS + ERP + BI avec :
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <li>• Microchip intelligent pour sécurisation des caisses</li>
          <li>• CRM avancé avec suivi client en temps réel</li>
          <li>• Modules adaptés au marché tunisien</li>
          <li>• Support technique 24/7</li>
        </ul>
      </motion.div>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 text-sm mt-12">
        © {new Date().getFullYear()} YUCCAINFO. Tous droits réservés. | 
        <span className="ml-2">Tunisie: Dar Chaabane Fehri & Technopole Sousse</span>
      </footer>
    </div>
  );
}