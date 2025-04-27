import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle, Card, CardBody, Button, Input, Textarea } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: ""
  });
  const [isLoading, setIsLoading] = React.useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
  
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data?.error?.toString() || "Erreur lors de l'envoi.");
      }
  
      // Afficher une notification toast au lieu d'une alerte classique
      toast.success(data.success || "Message envoyé avec succès !");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Erreur complète:", error);
      toast.error(`Échec de l'envoi: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50 px-6 py-12">
      {/* Navbar */}
      <Navbar onMenuOpenChange={setIsMenuOpen} isMenuOpen={isMenuOpen} className="mb-12">
        <NavbarBrand className="text-blue-600 font-bold text-2xl cursor-pointer" onClick={() => navigate("/")}>
          YUCCAINFO
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-6" justify="end">
          {["Accueil", "Services", "À propos", "Contact"].map((item, idx) => (
            <NavbarMenuItem 
              key={idx} 
              className="cursor-pointer"
              onClick={() => {
                if (item === "Accueil") 
                    navigate("/"); 
                else    
                    navigate("/" + item.toLowerCase().replace(/\s/g, ""));
              }}
            >
              {item}
            </NavbarMenuItem>
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
                if (item === "Accueil") 
                    navigate("/"); 
                else
                    navigate("/" + item.toLowerCase().replace(/\s/g, "")); 
              }}
            >
              {item}
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>

      {/* Section Contact */}
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-6 text-center"
        >
          Contactez Notre Équipe
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto"
        >
          Vous avez un projet ou une question ? Notre équipe est à votre disposition pour discuter de vos besoins en transformation digitale.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Formulaire de contact */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 rounded-2xl shadow-lg h-full">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Envoyez-nous un message</h2>
              

              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  isRequired
                  label=""
                  placeholder="Votre nom"
                  variant="bordered"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
                
                <Input
                  isRequired
                  type="email"
                  label=""
                  placeholder="Votre adresse email"
                  variant="bordered"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
                
                <Textarea
                  isRequired
                  label=""
                  placeholder="Votre message"
                  variant="bordered"
                  minRows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
                
                <Button 
                  type="submit" 
                  color="primary" 
                  className="w-full font-medium"
                  size="lg"
                  isLoading={isLoading}
                >
                  {isLoading ? 'Envoi en cours...' : 'Envoyer le message'}
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Informations de contact */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="p-8 rounded-2xl shadow-lg bg-blue-300 text-white">
              <CardBody className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="text-xl mt-1 flex-shrink-0">📍</span>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Nos bureaux</h3>
                    <p>Dar Chaabane Fehri, Nabeul, Tunisia</p>
                    <p>Technopole Sousse, Tunisia</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-xl mt-1 flex-shrink-0">📞</span>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Téléphone</h3>
                    <p>+216 23 198 524</p>
                    <p>+216 97 131 795</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-xl mt-1 flex-shrink-0">✉️</span>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Email</h3>
                    <p>contact@yuccainfo.com.tn</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-xl mt-1 flex-shrink-0">🕒</span>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Heures d'ouverture</h3>
                    <p>Lundi - Vendredi: 8h00 - 18h00</p>
                    <p>Samedi: 9h00 - 13h00</p>
                  </div>
                </div>
              </CardBody>
            </Card>

            {/* Partenariat BIM POS */}
            <Card className="p-6 rounded-2xl border-2 border-blue-300 bg-blue-50">
              <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="flex-1">
                  <h3 className="font-bold text-blue-800 text-lg mb-2">Partenariat BIM POS</h3>
                  <p className="text-gray-700 text-sm">
                    Premier partenaire officiel en Tunisie pour des solutions POS/ERP intégrées.
                  </p>
                </div>
                <Button 
                  as="a" 
                  href="https://bimpos.com/" 
                  target="_blank"
                  variant="flat" 
                  color="primary"
                  className="font-medium"
                >
                  Visiter BIM POS
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 text-sm mt-16 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <p>© {new Date().getFullYear()} YUCCAINFO. Tous droits réservés.</p>
          <p className="mt-2">Vos défis, nos solutions. YUCCAINFO à vos côtés.</p>
        </div>
      </footer>

      {/* Toast Notifications */}
      <ToastContainer />
    </div>
  );
}
