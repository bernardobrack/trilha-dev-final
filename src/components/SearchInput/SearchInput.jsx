import "./SearchInput.css";

export default function SearchInput(props) {
    const {onSearch, className, children, ...rest} = props;

    return <div className="search-input-div">
        <input className={`search-input ${className}`} {...rest}/>
        <img onClick={onSearch} src="src/assets/search-icon.svg"/>
    </div>
}