import './Button.css';

export const Button = ({text}) => {
    return (
        <input className='btn' type="button" value={text} />
    )
}