"use client";
import { useScrollContext } from "../contexts/scrollContext";
import AccordionCard from "./basics/AccordionCard";

export default function FAQs(){

    const { faqRef } = useScrollContext();

    return(
        <section ref={faqRef} className="px-4">
            <div  className="max-w-[1298px] w-full mx-auto md:flex md:items-start md:justify-between mt-[90px] max-sm:mt-[40px] pt-[30px] max-md:space-y-[40px]">
                <div className="md:max-w-[448px] w-full ">
                    <div className="space-y-[20px]">
                        <h2 className="text-[42px] font-bold text-[#3D4C5E] leading-[110%] tracking-[-3%] max-sm:text-[28px]">Questions fréquemment posées</h2>
                        <p className="text-[16px] leading-[150%]">Tout ce que vous devez savoir sur le produit et le magasin.  Vous ne trouvez pas la réponse que vous cherchez ? Envoyez-nous un message dans la section « Contactez-nous ».</p>
                    </div>
                </div>
                <div className="md:max-w-[768px] w-full space-y-4">
                    <AccordionCard question="Quelles sont les heures d’ouverture et de fermeture du magasin?" answer="Le magasin est ouvert du lundi au vendredi entre 8h et 19h, le samedi entre 9h et 20h et le dimanche entre 9h et 19h."/>
                    <AccordionCard question="D'où proviennent vos produits ?" answer="Nos produits proviennent principalement d'Amérique, d'Afrique, d'Haïti, et d'autres régions du monde, afin de vous offrir une diversité de choix et de saveurs authentiques."/>
                    <AccordionCard question="Offrez-vous un service de livraison ?" answer="Oui, nous offrons un service de livraison. Pour plus d'informations, veuillez nous contacter."/>
                </div>
            </div>
        </section>
    )
}