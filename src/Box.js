import './Box.css';

const Box = ({ children }) => {
    return (
        <div className="row">
            <div className="column">
                {children}
            </div>
        </div>
    )
};

export default Box;