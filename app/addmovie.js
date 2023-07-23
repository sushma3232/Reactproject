import React, {useState} from "react";
export default function Form(){
     const [isFormOpen, setIsFormOpen] = useState(false);

  const handleClick = () => {
    setIsFormOpen(!isFormOpen);
  };

    return(
         <div className="form2">
            <h1>Add A New Movie</h1>
            
            <button onClick={handleClick}>Submit</button>
            {isFormOpen&&(
                <div className="form3">
                    <h1 className="hi"> Fill this form to add Movie</h1>
                    <form>
                        <label className="lab1">
                            Name of Movie:
                            <br/>
                            <div className="in">
                                <input type="text" name="movieName"/>
                            </div>
                        </label>
                    
                    
                        <label className="lab1">
                            Year of Release:
                            <br/>
                            <div className="in">
                                <input type="text" name="year" />
                            </div>
                        </label> 
                        
                    
                        <label className="lab1">
                            Movie Duration:
                            <br/>
                            <br/>  
                            <label className="lab1">
                                Hours: 
                                <div  className="in">
                                    <input type="text" name="duration" />
                                </div>
                            </label>
                               
                        </label>
                        <label className="lab1">
                              Movie Genre:
                              <p className="space"> Select all that is applicable</p>   
                              <div className="in">
                                  <input type="checkbox" name="genre" value="Drama" />Drama
                                  <br/>
                                  <input type="checkbox" name="genre" value="biography"/>Biography
                                  <br/>
                                  <input type="checkbox" name="genre" value="romance"/>Romance
                                  <br/>
                                  <input type="checkbox" name="genre" value="comedy"/>Comedy
                                  <br/>
                                  <input type="checkbox" name="genre" value="adventure"/>Adventure
                                  <br/>
                                  <input type="checkbox" name="genre" value="family"/>Family
                                  <br/>
                                  <input type="checkbox" name="genre" value="documentary"/> Documentary    
                              </div>
                        </label> 
                 
                        <label className="lab1">
                            Description:
                            <br/>
                            <div className="in">
                                <textarea type="description" rows="5" cals="50" />
                            </div>
                        </label>
                        
                    
                        <label className="lab1">
                          Movie Genre:
                          <br/>
                          <div className="in">
                            <input type="text" name="genre" />
                          </div>
                        </label>
                        <button type="submit">Submit Form</button>
                    </form>
                </div>  
            )}
            
        </div>
          
    ); 
}


