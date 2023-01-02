import "../Button/Button.css";
import "./DropdownItem.css";

export default function DropdownItem(props) {
    const {text, hr, onClick} = props;
    return <div onClick={() => onClick(text)} className="dropdown-item">
        <p className="btn-medium">#{text}</p>
        {hr && <hr />}
    </div>
}