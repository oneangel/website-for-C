import Page from "../components/Page"
import bgImage from "../assets/bgImage.jpg"
import Footer from "../components/Footer"
import Cam from "../assets/Cam.png"
import Contact from "../components/Contact"

function SobreMi() {
  return (
    <div>
        <Page 
            videoSrc={bgImage} 
            title="MI ENFOQUE EN LA PASTELERÍA" 
            description="Aprenderás todos los trucos para que tus postres sean más sabrosos y sencillos de hacer. Ahorrá tiempo y dinero, sumate hoy!" 
            buttonText="CURSOS DISPONIBLES" />
        <div className="text-center pt-4 sm:py-12 text-brown bg-white">
            <p className="text-3xl font-bold mb-4">¿Quién soy?</p>
            <div className="sm:flex sm:flex-row sm:items-center sm:justify-center">
                <div className="sm:w-1/4">
                    <p className="font-bold text-2xl py-2">Cam Villalobos</p>
                    <p className="px-4 mb-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate dignissimos iure quas maxime commodi possimus, quasi dolorem harum ipsa amet, dolore provident error odio temporibus fuga! Possimus eius laborum velit a tempore suscipit aliquam quia. Ipsa ratione tempora laborum obcaecati, pariatur neque?
                    </p>
                    <p className="px-6 text-xl font-bold mb-4">Si buscas comenzar o seguir aprendiendo, ¡te espero!</p>
                </div>
                <img src={Cam} className="object-cover mt-4 mx-auto sm:mx-0 sm:w-1/5 sm:h-auto sm:mr-4" alt="Cam Villalobos" />
            </div>
        </div>
        FALTA PROCESO DE VIDA
        FALTA LUGARES
        <Contact />
        <Footer />
    </div>
  )
}

export default SobreMi