import { useState } from "react"

import style from './Formulario.module.css'

const Formulario = () => {
    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);
    const [resultadoVisivel, setResultadoVisivel] = useState(false)


    const Calcular = () => {
        // const quadradoDaAltura = altura * altura;
        const resultadoImc = peso / (altura * altura);
        //return resultadoImc.toFixed(2);
        if (resultadoImc < 18.5) {
            return (
                <p>{resultadoImc.toFixed(2)} - Abaixo do peso</p>
            )
        }
        else if (resultadoImc > 18.5 && resultadoImc < 24.9 ) {
            return (
                <p>{resultadoImc.toFixed(2)} - Peso normal </p>
            )
        }
        else if (resultadoImc > 25 && resultadoImc < 29.9 ) {
            return (
                <p>{resultadoImc.toFixed(2)} - Sobre peso </p>
            )
        }
        else if (resultadoImc > 30 && resultadoImc < 34.9 ) {
            
            return (
                <p>{resultadoImc.toFixed(2)} - Obesidade Grau 1 </p>
            )
        }
        else if (resultadoImc > 35 && resultadoImc < 39.9 ) {
            return (
                <p>{resultadoImc.toFixed(2)} - Obesidade Grau 2 </p>
            )
        }
        else if (resultadoImc >= 40 ) {
            return (
                <p>{resultadoImc.toFixed(2)} - Obesidade mórbida</p>
            )
        }
        else {
            return (
                <p>Insira os dados para efeturar o cálculo.</p>
            )
        }
    }


    

    return (
        <>
            <form className={style.formulario}>
                <input type="number" placeholder="Altura" onChange={evento => setAltura(parseFloat(evento.target.value))} required/>
                <input type="number" placeholder="Peso" onChange={evento => setPeso(parseFloat(evento.target.value))} required/>
            </form>
            <div>
                <button type="button" onClick={() => setResultadoVisivel(!resultadoVisivel)}>Calcular</button>
            </div>
            <div className={style.resultado}>
                {resultadoVisivel && (
                    Calcular()
                )}  
            </div>

        </>
    )
}

export default Formulario