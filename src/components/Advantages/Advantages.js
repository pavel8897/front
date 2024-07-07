import { Advantage } from "./Advantage";
import './Advantages.css';

import {advantages} from './data';

export const Advantages = () => {
    const result = advantages.map(item =>
        <Advantage value={item.value} label={item.label} />
    )

    return (
        <div className="advantages">
           {result} 
        </div>
    )
}