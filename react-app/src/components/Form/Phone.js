import React from 'react'

export default function Phone({phone, setPhone, submitClicked}) {
    
    const [errors, setErrors] = React.useState([]);
    
    React.useEffect(
        () => {
            const errors = [];
            
        },
        [
            errors,
            phone,
            setPhone,
            submitClicked
        ]
    )

    return (
        <div>
            <label>Phone</label>
            <input
                type={"input"} 
                value={phone} 
                onChange={e => {setPhone(e.target.value)}}
            />
        </div>
    )
}
