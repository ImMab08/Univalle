'use client'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'

import styles from './RegistrarSesion.module.sass'
import Image from 'next/image'
import Link from 'next/link'
import axios, { AxiosError} from 'axios'

export const RegistrarSesion = () => {

  const [error, setError] = useState();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget);
    try {
      const res = await axios.post('/api/auth/singup', {
        code: formData.get('code'),
        email: formData.get('email'),
        password: formData.get('password'),
      })
      console.log(res);
    } catch (error) {
      if (error instanceof AxiosError) {
        setError(error.response?.data.message);
      }
    }
  }
  return (
    <section className={`${styles.container} ${styles.forms}`}>
      <div className={`${styles.form} ${styles.login}`}>
        <div className={styles.form_content}>
          <Image src="/images/logo-uv.jpg" alt="" width={100} height={140}/>
          <header className="">Registro</header>
          
          <form onSubmit={handleSubmit}>
            {error && <div className={styles.error}>{error}</div>}
            <div className={`${styles.field} ${styles.input_field}`}>
              <input 
                type="text" 
                name='code' 
                className={styles.input}/>
              <label htmlFor="text">Código</label>
            </div>

            <div className={`${styles.field} ${styles.input_field}`}>
              <input 
                type="email"
                name='email' 
                className={styles.input} />
              <label htmlFor="email">Email</label>
            </div>

            <div className={`${styles.field} ${styles.input_field}`}>
              <input 
                type="password" 
                name='password'
                autoComplete='off' 
                className={styles.password}/>
              <label htmlFor="password">Password</label>
            </div>

            <button type='submit' className={`${styles.field} ${styles.button_field}`}>Registrarme</button>
            <div className={styles.form_link}>
              <Link href="/auth/login" className={styles.forgot_pass}>Iniciar Sesion</Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

// const { register, handleSubmit, formState: {errors} } = useForm();
// const router = useRouter();

// const onSubmit = handleSubmit(async (data) => {

//   if (data.password !== data.confirmPassword) {
//     return alert("Passwords do not match");
//   }

//   const res = await fetch('/api/auth/singup', {
//     method: 'POST',
//     body: JSON.stringify({
//       username: data.username,
//       email: data.email,
//       password: data.password
//     }),
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   });
  
//   if (res.ok) {
//     router.push('/auth/login')
//   }
  
//   console.log(errors);
// });

{/* <form onSubmit={onSubmit}>
<div className={`${styles.field} ${styles.input_field}`}>
  <input 
    type="text" 
    className={styles.input}
    {...(register("codigo", {
      required: {
        value: true,
        message: "Ingresa tu codigo"
      }
    }))}/>
    {errors.codigo && (
      <span className={styles.errors}>{errors.codigo.message?.toString()}</span>
    )}
  <label htmlFor="text">Código</label>
</div>

<div className={`${styles.field} ${styles.input_field}`}>
  <input 
    type="text" 
    className={styles.input} 
    {...(register("email", {
      required: {
        value: true,
        message: "Ingresa un correo"
      }
    }))}/>
    {errors.email && (
      <span className={styles.errors}>{errors.email.message?.toString()}</span>
    )}
  <label htmlFor="email">Email</label>
</div>

<div className={`${styles.field} ${styles.input_field}`}>
  <input 
    type="password" 
    autoComplete='off' 
    className={styles.password}
    {...(register("password", {
      required: {
        value: true,
        message: "Ingresa una contraseña"
      }
    }))}/>
    {errors.password && (
      <span className={styles.errors}>{errors.password.message?.toString()}</span>
    )}
  <label htmlFor="password">Password</label>
</div>

<div className={`${styles.field} ${styles.input_field}`}>
  <input 
    type="confirmPassword" 
    autoComplete='off' 
    className={styles.password}
    {...(register("confirmPassword", {
      required: {
        value: true,
        message: "La contraseña no coincide"
      }
    }))}/>
    {errors.confirmPassword && (
      <span className={styles.errors}>{errors.confirmPassword.message?.toString()}</span>
    )}
  <label htmlFor="confirmPassword">Password Confirm</label>
</div>
<button className={`${styles.field} ${styles.button_field}`}>Registrarme</button>
<div className={styles.form_link}>
  <Link href="/auth/login" className={styles.forgot_pass}>Iniciar Sesion</Link>
</div>
</form> */}