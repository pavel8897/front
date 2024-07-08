export const Social = ({way, name, img}) => {
    
    return (
        <div className="social">
            <img src={img} />
            <div className="desc">
                <span>{way}</span>
                <h2>{name}</h2>
            </div>
        </div>
    )
}
