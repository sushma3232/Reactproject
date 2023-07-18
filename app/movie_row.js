import Buttons from "./page.js"
import Delete from "./delete.js"
const Movierow=(props)=>{
    return(
        <div className="firstr">
            <div className="column">
                <img className="img" src={props.image} alt={props.name}/>
            </div>
            <div className="scol">
                <h1> {props.name}</h1>
                <p> {props.year}|{props.duration}|{props.genere} </p>
                <h3> Description</h3>
                <p>{props.description}</p>
               
                 <Delete
                        {...props}
                    />  
            </div>
        </div>
    );
     
};
export default Movierow;


        
    
    
    
    
    
    
    
    
      






 



