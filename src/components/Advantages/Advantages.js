import { Advantage } from "./Advantage";
import './Advantages.css';

import {advantages} from './data';

export const Advantages = () => {
    const result = advantages.map((advantage, index) =>
        <Advantage
            key={index}
            value={advantage.value}
            label={advantage.label}
        />
    )

    return (
        <div className="advantages">
           {result} 
        </div>
    )
}