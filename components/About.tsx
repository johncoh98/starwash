import Image from 'next/image';
import cleaning from "../public/cleaning2.jpg";
import { FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-scroll'

const About= () =>{

  return (
    <section id='about' className="bg-zinc-800 text-white py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Bienvenue chez Star Wash</h2>
        <div className="  sm:flex-column md:flex justify-center items-center">
          <div className="w-1/2 md:pr-10 mb-8 md:mb-0 ">
            <Image src={cleaning} alt="Voiture lavée à la main" width={600} height={400} className="ml-[50%] md:ml-0 rounded-md shadow-lg" />
          </div>
          <div className="md:w-1/2 pl-32 md:pl-10 ">
            <h3 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h3>
            <ul className="list-disc pl-6">
              <li className="mb-4 flex items-center">
                <FaCheckCircle className="mr-2 text-cyan-500" />
                Service de qualité supérieure
              </li>
              <li className="mb-4 flex items-center">
                <FaCheckCircle className="mr-2 text-cyan-500" />
                Prix abordable
              </li>
              <li className="mb-4 flex items-center">
                <FaCheckCircle className="mr-2 text-cyan-500" />
                Équipe de professionnels
              </li>
              <li className="mb-4 flex items-center">
                <FaCheckCircle className="mr-2 text-cyan-500" />
                Techniques de lavage respectueuses de l'environnement
              </li>
              <li className="mb-4 flex items-center">
                <FaCheckCircle className="mr-2 text-cyan-500" />
                Expérience de lavage rapide et pratique
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-column md:flex justify-center items-center my-20">
          <div className="md:w-1/2 md:pr-10 pl-32">
            <h3 className="text-2xl ce font-bold mb-4">Nos avantages</h3>
            <ul className="list-disc pl-6">
              <li className="mb-4 flex items-center">
                <FaCheckCircle className="mr-2 text-cyan-500" />
                Lavage en profondeur de l'intérieur et de l'extérieur
              </li>
              <li className="mb-4 flex items-center">
                <FaCheckCircle className="mr-2 text-cyan-500" />
                Élimination des taches tenaces et de la saleté
              </li>
              <li className="mb-4 flex items-center">
                <FaCheckCircle className="mr-2 text-cyan-500" />
                Protection de la peinture de votre voiture
              </li>
            </ul>
          </div>
          <div className="md:w-1/2 pl-10">
            <div className="relative" style={{ paddingBottom: "56.25%" }}>
              <iframe className="absolute inset-0 w-full h-full" src="https://player.vimeo.com/external/514160342.sd.mp4?s=2c92d0dc321450b900207793a3e4188e7e583db0&profile_id=164&oauth2_token_id=57447761" title="Car Wash XYZ - Video promotionnelle" allowFullScreen></iframe>
            </div>
          </div>
        </div>
        <div className="text-center">
          <p className="text-lg">
            Pour un lavage de voiture de qualité supérieure et respectueux de l'environnement, contactez Star Wash dès aujourd'hui.
          </p>
          <Link to="contact" smooth={true}  duration={500} offset={-80}><div className="bg-cyan-500 text-white inline-block px-6 py-3 rounded-md mt-8 hover:bg-cyan-400 transition-colors duration-300 cursor-pointer">Réservez votre lavage</div></Link>
        </div>
      </div>
    </section>
);;
};

export default About;
