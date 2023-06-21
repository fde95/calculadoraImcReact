import styles from './Tabela.module.css'

const Tabela = () => {
    return (
        <section>
            <div className={styles.container}>
                <h3 className={styles.text}>Consulte o seu resultado</h3>
                <img className={styles.img} src="../../src/assets/tabelaIMC.png" alt="" />
            </div>
        </section>
    )
}


export default Tabela;