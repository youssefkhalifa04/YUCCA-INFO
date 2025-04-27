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
} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function About() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 px-6 py-12">
      {/* Navbar */}
      <Navbar
        onMenuOpenChange={setIsMenuOpen}
        isMenuOpen={isMenuOpen}
        className="mb-12"
      >
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
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          />
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

      {/* About Section */}
      <div className="max-w-5xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold text-blue-700 mb-6"
        >
          Votre Partenaire de Confiance
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg text-gray-600 mb-10"
        >
          Créée par une équipe passionnée de développeurs, d'ingénieurs et d'experts métier, 
          YUCCAINFO accompagne les entreprises tunisiennes et internationales dans leur 
          transformation digitale avec des solutions innovantes et sur mesure.
        </motion.p>
      </div>

      {/* Mission, Vision, Valeurs */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {[
          {
            icon: "🚀",
            title: "Notre Mission",
            description:
              "Accompagner les entreprises dans leur digitalisation avec des outils puissants qui transforment leurs idées en réussites concrètes.",
          },
          {
            icon: "👁️",
            title: "Notre Vision",
            description:
              "Devenir le partenaire stratégique de référence pour l'innovation et la transformation digitale en Tunisie et à l'international.",
          },
          {
            icon: "💎",
            title: "Nos Valeurs",
            description:
              "Innovation intelligente - Excellence opérationnelle - Fiabilité absolue - Adaptation permanente - Satisfaction client",
          },
        ].map((section, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 rounded-2xl bg-white/70 backdrop-blur-md hover:shadow-xl transition h-full">
              <div className="text-4xl mb-4">{section.icon}</div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                {section.title}
              </h2>
              <p className="text-gray-600 text-md">{section.description}</p>
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
        className="mt-28 p-8 bg-blue-700 rounded-3xl text-white max-w-6xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-4">Partenariat Exclusif</h2>
        <p className="mb-6 text-lg">
          Premier partenaire officiel de <strong>BIM POS</strong> en Tunisie, nous offrons des solutions 
          de gestion commerciale nouvelle génération intégrant POS, ERP et Business Intelligence.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
          <p className="flex items-start"><span className="mr-2">•</span> Microchip intelligent pour sécurisation des caisses</p>
          <p className="flex items-start"><span className="mr-2">•</span> CRM avancé avec suivi client en temps réel</p>
          <p className="flex items-start"><span className="mr-2">•</span> Modules adaptés au marché tunisien</p>
          <p className="flex items-start"><span className="mr-2">•</span> Support technique local 24/7</p>
        </div>
      </motion.div>

      {/* Équipe */}
      <div className="mt-28 max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-gray-800 mb-6"
        >
          Une Équipe d'Experts Passionnés
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-gray-600 text-lg mb-6"
        >
          Notre équipe pluridisciplinaire combine développeurs talentueux, ingénieurs expérimentés 
          et experts métier pour concevoir des solutions technologiques intelligentes qui répondent 
          aux défis spécifiques de votre entreprise.
        </motion.p>
      </div>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 text-sm mt-12">
        © {new Date().getFullYear()} YUCCAINFO. Tous droits réservés. | 
        <span className="ml-2">Tunisie: Dar Chaabane Fehri & Technopole Sousse</span>
      </footer>
    </div>
  );
}