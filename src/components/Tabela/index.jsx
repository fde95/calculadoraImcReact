import styles from './Tabela.module.css'

const Tabela = () => {
    return (
        <section>
            <div className={styles.container}>
                <h3 className={styles.text}>Consulte o seu resultado</h3>
                <table className={styles.table}>
                    <thead>
                    <tr>
                        <th>IMC</th>
                        <th>CLASSIFICAÇÃO</th>
                        <th>OBESIDADE (GRAU)</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>MENOR QUE 18,5</td>
                        <td>MAGREZA</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>ENTRE 18,5 E 24,9</td>
                        <td>NORMAL</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>ENTRE 25,0 E 29,9</td>
                        <td>SOBREPESO</td>
                        <td>I</td>
                    </tr>
                    <tr>
                        <td>ENTRE 30,0 E 39,9</td>
                        <td>OBESIDADE</td>
                        <td>II</td>
                    </tr>
                    <tr>
                        <td>MAIOR QUE 40,0</td>
                        <td>OBESIDADE GRAVE</td>
                        <td>III</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </section>
    )
}


export default Tabela;