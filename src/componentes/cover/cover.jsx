import { useEffect, useState } from "react";
import "./cover.css";
import portada1 from "../../img/portada1.jpg";
import portada2 from "../../img/portada2.jpg";
import { useLocation, useParams } from "react-router-dom";

const Cover = () => {
    const { categoryId } = useParams();
    const location = useLocation();
    const [imagenPortada, setImagenPortada] = useState(portada1);

    // Actualiza la imagen según el ancho de la pantalla
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setImagenPortada(portada2); // Usa portada2 si el ancho es menor a 768px
            } else {
                setImagenPortada(portada1); // Usa portada1 si el ancho es mayor o igual a 768px
            }
        };

        // Ejecuta la función al cargar el componente
        handleResize();

        // Agrega el event listener para detectar cambios en el tamaño de la pantalla
        window.addEventListener("resize", handleResize);

        // Limpia el event listener cuando el componente se desmonta
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="portada">
            {location.pathname === "/" ? (
                <img src={imagenPortada} alt="portada" />
            ) : (
                <h1>{categoryId}</h1> // Texto alternativo si la ruta no es "/"
            )}
        </div>
    );
};

export default Cover;
