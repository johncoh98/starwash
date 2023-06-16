import Link from "next/link";
import { FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-zinc-200 text-zinc-800 py-8 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="font-bold text-lg">Star Wash</p>
          <p className="text-gray-500">1 bd eugene decros 93260 Les Lilas</p>
          <p className="text-gray-500">10 av Faidherbe 93260 les Lilas</p>
        </div>
        <div className="flex items-center">
          <a href="tel:+33604090909" className="mr-6 text-cyan-600 hover:text-cyan-800">
            <FaPhone className="inline-block mr-1" />
            06 04 09 09 09
          </a>
          <a href="mailto:contact@masociete.com" className="text-cyan-600 hover:text-cyan-800">
            <FaEnvelope className="inline-block mr-1" />
            Starwash.paris@gmail.com
          </a>
        </div>
        <div className="flex-col my-4 ">
          <h1>Horaires d'Ouverture</h1>
          <p>Lundi-Samedi - 10h30-19h</p>
          <p>Dimanche - Sur Réservation</p>

        </div>
        <div className="text-center md:text-right mt-4 md:mt-0">
          <p>© 2023 Star Wash Paris. Tous droits réservés.</p>
          <Link href="/privacy">
            <p className="text-gray-500 hover:text-cyan-600">Politique de confidentialité</p>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
