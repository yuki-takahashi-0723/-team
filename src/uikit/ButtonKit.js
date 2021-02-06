import React from 'react'

import Button from '@material-ui/core/Button';


const ButtonKit = (props) => {
  
    return(
        <>
           
                <Button variant="outlined" color="primary" onClick={()=>props.onClick()}>
                    {props.label}
                </Button>
            

        </>
    )
}

export default ButtonKit