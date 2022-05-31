import React, { useEffect, useState } from 'react'
import './Ifoodcounter.css'

export default function Ifoodcounter() {

    const [value, setValue] = useState(1)
    const [buttonStyle, setButtonStyle] = useState('counter-button-minus-active')
    
    

    
    useEffect(() => {
        alert('quantidade deve ser maior que 0')
        },[buttonStyle]); 
        
        useEffect(() => {
        document.getElementById("moeda").innerHTML = 2.00 * value
        },[value]);

    function down() {

        if (value <=1) {
            setButtonStyle('counter-button-minus-desactive')

            //mudar o css
        }

        if(value > 0) {
        setValue(value-1)
    }
}

    function up() {
        setButtonStyle('counter-button-minus-active')
        setValue(value+1)
    }

    return (
        < div className='counter-wrapper'>
            <button className={buttonStyle}
                    onClick={down}
             
            >

                -

            </button>
            <p>{value}</p>


            <button

                className='counter-wrapper-plus-active'
                onClick={up}
            >
                +

            </button>

            <button id='moeda'> 0,00 </button>


        </div>

    )
}


