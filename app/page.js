import LikeButton from "./like-button";

function Header(props){
    console.log(props);
    return <h1>{props.title ? props.title : "Deafult Title"}</h1>;
}

export default function HomePage(){
    const names = ["Aliza", "Sajeel", "Salman"];

    return (
    <div>
        {/* Nesting the Header component */}
        <Header title="Develop. Preview. Ship" />
        <ul>
        {names.map((name) => (
            <li>{name}</li>
        ))}
        </ul>  
    <LikeButton />
    </div>);
}

