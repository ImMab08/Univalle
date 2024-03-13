import Image from 'next/image'
import styles from './IniciarSesion.module.sass'

export const IniciarSesion = () => {
  return (
    <section className={`${styles.container} ${styles.forms}`}>
      <div className={`${styles.form} ${styles.login}`}>
        <div className={styles.form_content}>
          <Image src="/images/logo-uv.jpg" alt="" width={100} height={140}/>
          <header className="">Iniciar Sesión</header>
          
          <form action="#">
            <div className={`${styles.field} ${styles.input_field}`}>
              <input type="text" required className={styles.input}/>
              <label htmlFor="password">Código</label>

            </div>
            <div className={`${styles.field} ${styles.input_field}`}>
              <input type="password" autoComplete='off' required className={styles.password}/>
              <label htmlFor="password">Password</label>
            </div>

            <div className={`${styles.field} ${styles.button_field}`}>
              <a>Iniciar Sesión</a>
            </div>

            <div className={styles.form_link}>
              <a href="#" className={styles.forgot_pass}>Olvide mi contraseña</a>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}