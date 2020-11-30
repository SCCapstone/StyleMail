import React from 'react'
import { useHistory } from "react-router-dom"


const TemplateEdit = (props)  => {
    const history = useHistory()  

    
    
   
    
    
    
    
    const {handleBack} =props;
    return (
        <div>
            <h1>Edit Your Template Here</h1>

            <button onClick={() => history.goBack()}>Back</button>

        </div>
    )
}

export default TemplateEdit
