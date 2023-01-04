import "./Loader.css";

export default function Loader(props) {
    const {...rest} = props;
    return <div {...rest} id="loader-div">
        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
    </div> 
}