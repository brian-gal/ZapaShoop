import "./cover.css"
import portada1 from "../../img/portada1.jpg";
import { useLocation, useParams } from 'react-router-dom';

const Cover = ({products}) => {
    const { categoryId } = useParams();
    const location = useLocation(); // Obtén la ruta actual

    return (
        <div className="portada">
            {location.pathname === '/' ? (
                <img src={portada1} alt="portada" />
            ) : (
                <h1>{categoryId}</h1> // Texto alternativo si la ruta no es "/"
            )}
        </div>
    )
}

export default Cover