import styles from './Cabecalho.module.css'

const Cabecalho = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <img className={styles.img} src="../../src/assets/user.svg" alt="" />
                <h1 className={styles.title}>Calculadora de IMC</h1>
            </div>
        </header>
    )
}


export default Cabecalho;