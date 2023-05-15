// @ts-nocheck
import styles from "./style.css"
import React, { useEffect, useState } from 'react';
//import { canUseDOM } from 'vtex.render-runtime'

const CustomNewsletter = ({children}) => {
    return(
        <section className={styles.newsletterSection}>
            <div className={styles.newsletterCard}>
                {children[0]}
                {children[1]}
                <form >
                    <input type="email" placeholder="Seu e-mail"  required/>
                    <select name="tipo" required>
                        <option value="" selected disabled>Você é</option>
                        <option value="maquiador">Maquiador</option>
                        <option value="fa">Fã da marca</option>
                    </select>
                    <button type="submit">Cadastrar</button>
                </form>
            </div>
        </section>
    )

}
export default CustomNewsletter