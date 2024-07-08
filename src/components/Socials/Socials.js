import { Social } from './Social';
import './Socials.css';

import {socials} from './data';

export const Socials = () => {
    const result = socials.map((social, index) =>
        <Social
            key={index}
            way={social.way}
            name={social.name}
            img={social.img}
        />
    )

    return (
        <div className="socials">
            {result}
        </div>
    )
}

