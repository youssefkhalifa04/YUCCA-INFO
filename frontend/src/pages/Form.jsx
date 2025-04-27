import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarItem,
  Input,
  Textarea,
  Button,
  Card,
  CardBody,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify"; // Import toast and ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Import the Toastify CSS

export default function ProjectForm() {
  const [formData, setFormData] = useState({
    projectName: "",
    description: "",
    resources: "",
    category: "",
    budget: "",
    deadline: "",
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const categories = [
    "Développement Web",
    "Application Mobile",
    "Application Desktop",
    "UI/UX Design",
    "Conseil & Stratégie",
    "Autre",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (e) => {
    setFormData((prev) => ({ ...prev, category: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Formulaire envoyé :", formData);

    try {
      const response = await fetch('http://localhost:5000/api/form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // Show success toast notification
        toast.success(data.message || "Projet soumis avec succès!");
      } else {
        // Show error toast notification
        toast.error(data.message || "Échec de la soumission du projet.");
      }
    } catch (error) {
      console.error("Erreur:", error);
      // Show error toast notification
      toast.error("Erreur lors de la soumission du projet.");
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
          <NavbarMenuItem className="cursor-pointer" onClick={() => { setIsMenuOpen(false); navigate("/"); }}>
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
          <NavbarMenuItem className="cursor-pointer" onClick={() => { setIsMenuOpen(false); navigate("/"); }}>
            Accueil
          </NavbarMenuItem>
          {["Services", "À propos", "Contact"].map((item, idx) => (
            <NavbarMenuItem key={idx} className="cursor-pointer" onClick={() => { setIsMenuOpen(false); navigate("/" + item.toLowerCase().replace(/\s/g, "")); }}>
              {item}
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>

      {/* Form Section */}
      <div className="max-w-4xl mx-auto">
        <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-10 text-center">
          Décrivez votre projet ✨
        </motion.h1>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }}>
          <Card className="p-6 md:p-10 rounded-2xl shadow-lg border border-gray-200">
            <CardBody>
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <Input
                  isRequired
                  name="projectName"
                  placeholder="Nom du projet"
                  value={formData.projectName}
                  onChange={handleChange}
                />
                <Textarea
                  isRequired
                  name="description"
                  placeholder="Expliquez en détail votre besoin..."
                  value={formData.description}
                  onChange={handleChange}
                  minRows={5}
                />
                <Select
                  isRequired
                  name="category"
                  placeholder="Sélectionner une catégorie"
                  selectedKeys={formData.category ? [formData.category] : []}
                  onChange={handleSelectChange}
                  classNames={{
                    
                    popoverContent: "bg-white ", 
                  }}
                >
                  {categories.map((cat) => (
                    <SelectItem key={cat} value={cat} className="hover:bg-gray-100">
                      {cat}
                    </SelectItem>
                  ))}
                </Select>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    name="budget"
                    type="number"
                    placeholder="Budget Estimé (DT)"
                    value={formData.budget}
                    onChange={handleChange}
                  />
                  <Input
                    name="deadline"
                    type="date"
                    placeholder="Date limite"
                    value={formData.deadline}
                    onChange={handleChange}
                  />
                </div>

                <Button type="submit" color="primary" size="lg" className="mt-6">
                  Envoyer le projet
                </Button>
              </form>
            </CardBody>
          </Card>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 text-sm mt-16">
        © {new Date().getFullYear()} YUCCAINFO. Tous droits réservés.
      </footer>

      {/* ToastContainer Component */}
      <ToastContainer />
    </div>
  );
}
