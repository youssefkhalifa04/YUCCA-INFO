import React from "react";
import {
  Button,
  Card,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarMenuItem,
} from "@nextui-org/react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50 px-6 py-12">
      {/* Navbar */}
      <Navbar onMenuOpenChange={setIsMenuOpen} isMenuOpen={isMenuOpen} className="mb-12">
        <NavbarBrand className="text-blue-600 font-bold text-2xl cursor-pointer" onClick={() => navigate("/")}>
          YUCCAINFO
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-6" justify="end">
          <NavbarMenuItem
            className="cursor-pointer"
            onClick={() => {
              setIsMenuOpen(false);
              navigate("/");
            }}
          >
            Accueil
          </NavbarMenuItem>
          {["Services", "À propos", "Contact"].map((item, idx) => (
            <NavbarItem key={idx} className="cursor-pointer" onClick={() => navigate("/" + item.toLowerCase().replace(/\s/g, ""))}>
              {item}
            </NavbarItem>
          ))}
        </NavbarContent>
        <NavbarContent justify="end" className="sm:hidden">
          <NavbarMenuToggle aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"} />
        </NavbarContent>
        <NavbarMenu className="pt-20">
          <NavbarMenuItem
            className="cursor-pointer"
            onClick={() => {
              setIsMenuOpen(false);
              navigate("/");
            }}
          >
            Accueil
          </NavbarMenuItem>
          {["Services", "À propos", "Contact"].map((item, idx) => (
            <NavbarMenuItem
              key={idx}
              className="cursor-pointer"
              onClick={() => {
                setIsMenuOpen(false);
                navigate("/" + item.toLowerCase().replace(/\s/g, ""));
              }}
            >
              {item}
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-tight"
        >
          Propulsez vos projets avec YUCCAINFO 🚀
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto"
        >
          Développement Web, Mobile et Desktop sur mesure pour transformer vos idées en réalité.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Button onClick={() => navigate("/form")} size="lg" color="primary" className="text-lg font-medium">
            Commencer un projet <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>

      {/* Services Section */}
      <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {[
          {
            title: "🌐 Développement Web",
            description: "Sites vitrines, plateformes e-commerce, applications web performantes et responsives.",
          },
          {
            title: "📱 Applications Mobiles",
            description: "Apps natives et cross-platform pour iOS et Android, optimisées pour l’expérience utilisateur.",
          },
          {
            title: "🖥️ Solutions Desktop",
            description: "Applications robustes pour Windows, Mac et Linux, adaptées aux besoins métiers.",
          },
        ].map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
          >
            <Card className="p-6 rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl transition">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">{service.title}</h2>
              <p className="text-gray-600 text-md">{service.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mt-28 bg-white border-y py-16 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Prêt à donner vie à vos projets ?
        </h2>
        <p className="text-gray-600 text-lg mb-6">
          Contactez notre équipe pour une consultation gratuite !
        </p>
        <Button onClick={() => navigate("/contact")} size="lg" color="primary">
          Nous contacter
        </Button>
      </motion.div>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 text-sm mt-12">
        © {new Date().getFullYear()} YUCCAINFO. Tous droits réservés.
      </footer>
    </div>
  );
}
