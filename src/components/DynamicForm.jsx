import React from 'react'

const DynamicForm = ({id}) => {

    
    return (
        
        <form style={{margin: '1rem 0'}}>
                <p>{id}</p>
                <input type="text" name="" id="" placeholder='Name'/>
                <input type="number" name="" id="" placeholder='Age'/>
                <div className='gender'>
                    <label>Gender: </label>
                    <input type="radio" name="gender" value='male' id='male'/> <label htmlFor="male">Male</label>
                    <input type="radio" name="gender" value='female' id='female' /><label htmlFor="female">Female</label>
                    <input type="radio" name="gender" value='other' id='other' /><label htmlFor="other">Other</label>
                </div>
            </form>
        
    )
}


export default DynamicForm;