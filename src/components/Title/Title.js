import './Title.css';

const defaultText = "Do you want to Learn more About cryptocurrencies ";
const colorText = 'quickly and easily ?';

export const Title = ({text, colorText, view = 'title'}) => {
    return (
        <div className={view}>{defaultText}{colorText ? <span className='colorText'>{colorText}</span> : ''}</div>
    )
}