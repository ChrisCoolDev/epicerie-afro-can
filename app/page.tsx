"use client";
import { useRef } from "react";
import ContactSection from "./components/ContactSection";
import FAQs from "./components/FAQs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductOverview from "./components/ProductsOverview";
import AdditionalServices from "./components/AdditionalServices";
import NavBar from "./components/basics/NavBar";
import { ScrollContext } from "./contexts/scrollContext";
import ClientsReview from "./components/ClientsReview";
import SpecialProductsPopup from "./components/basics/SpecialProductsPopup";

export default function Home() {

  const faqRef = useRef<HTMLElement>(null);
  const contactUsRef = useRef<HTMLElement>(null);

  return (
    <ScrollContext.Provider value={{
      faqRef,
      contactUsRef,
    }}>
      <NavBar />
      <Header />
      <SpecialProductsPopup />
      <ProductOverview searchTerm="" />
      <AdditionalServices />
      <FAQs />
      <ClientsReview />
      <ContactSection />
      <Footer />
    </ScrollContext.Provider>
  );
}
