import React from 'react'
import { useHistory } from "react-router-dom"

function TemplateEdit () {
    const history = useHistory()  
    
    
    return (
        <div>
            <h1>Edit Your Template Here</h1>
            <button onClick={() => history.goBack()}>Back</button>
        </div>
    )
}

export default TemplateEdit



