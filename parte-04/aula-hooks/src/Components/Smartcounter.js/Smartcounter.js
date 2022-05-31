import {useState} from 'react';



function SmartCounter() {
    //retorna um vetor
    //1. variavel stateful
    //2. função amarrada a essa variavel atualiza esse valor
    const  [quantity, upQuantity] = useState(1);
    return (
        <>
            <h1>{quantity}</h1>
                <button onClick={()=> upQuantity(quantity +1)}> AumentarSmart</button>
            
        </>
    )
}

export default SmartCounter;