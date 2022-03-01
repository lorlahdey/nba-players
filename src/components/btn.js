import { Link } from "react-router-dom";


export const BtnLarge = ( props ) =>{
    const { className } = props;
    return (
        <button className={`btn btn-large ${ className }`}>{props.label}</button>
    );
};

export const SmallBtn = ( props ) =>{
    const { to, icon, label, className } = props;
    return (
        <Link to={to} className={`btn btn-${ className }`}>
            <div className="btn-small-label">
                <span> {icon} </span>
                <span className="m-1">{label}</span>
            </div>
        </Link>
    );
};
