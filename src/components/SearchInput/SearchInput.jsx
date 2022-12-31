import "./SearchInput.css";

export default function SearchInput(props) {
    const {className, children, ...rest} = props;

    return <div className="search-input-div">
        <input className={`search-input ${className}`} {...rest}/>
        <img src="src/assets/search-icon.svg"/>
    </div>
}