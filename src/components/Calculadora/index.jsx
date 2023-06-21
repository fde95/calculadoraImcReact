import { useState } from 'react';
import styles from './Calculadora.module.css';

const Calculadora = () => {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [resultado, setResultado] = useState(null);

    const entradaDeValores = (event) => {
        const { name, value } = event.target;
        if (name === 'peso') {
        setPeso(value);
        } else if (name === 'altura') {
        setAltura(value);
        }
    };

    const calcularIMC = (event) => {
        event.preventDefault();
        const imc = peso / (altura * altura);
        setResultado(imc.toFixed(2));
    };

    return (
        <form className={styles.container} onSubmit={calcularIMC}>
            <input className={styles.input} type="number" name="peso" value={peso} placeholder="Insira o seu peso atual (ex.: 79,10)" onChange={entradaDeValores} required/>
            <input className={styles.input} type="number" name="altura" value={altura} placeholder="Insira a sua altura (ex.: 1,79)" onChange={entradaDeValores} required />
            <button className={styles.btn} type="submit">Calcular IMC</button>
            {resultado && <p className={styles.resultado}>Seu IMC é: {resultado}</p>}
            </form>
    );
};

export default Calculadora;