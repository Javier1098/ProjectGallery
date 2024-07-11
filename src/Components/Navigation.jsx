import { Link } from "react-router-dom";
import { Casquito1 } from "./Casquito1";
import { Casquito2 } from "./Casquito2";
import { Casquito3 } from "./Casquito3";
import { Casquito4 } from "./Casquito4";
import { Casquito5 } from "./Casquito5";
import { Casquito6 } from "./Casquito6";

export const Navigation = () => {
  return (
    <div className="container mt-4 father">
        <Link to = "/mishi1"className="links">
            <figure  className="image-size">
               <Casquito1 />
                <figcaption>Mishi 1</figcaption>
            </figure>
        </Link>

        <Link to = "/mishi2"className="links">
            <figure className="image-size">
               <Casquito2 />
                <figcaption>Mishi 2</figcaption>
            </figure>
        </Link>

        <Link to = "/mishi3"className="links">
            <figure className="image-size">
               <Casquito3 />
                <figcaption>Mishi 3</figcaption>
            </figure>
        </Link>

        <Link to = "/mishi4"className="links">
            <figure className="image-size">
               <Casquito4 />
                <figcaption>Mishi 4</figcaption>
            </figure>
        </Link>

        <Link to = "/mishi5"className="links">
            <figure className="image-size">
               <Casquito5 />
                <figcaption>Mishi 5</figcaption>
            </figure>
        </Link>

        <Link to = "/mishi6"className="links">
            <figure className="image-size">
               <Casquito6 />    
                <figcaption>Mishi 6</figcaption>
            </figure>
        </Link>
    </div>
  )
}
