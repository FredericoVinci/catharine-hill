// @ts-nocheck
import styles from "./style.css"
import React, { useEffect, useState } from 'react';
import { canUseDOM } from 'vtex.render-runtime'

const CustomLogin = () => {
    const [isLogged, setIsLogged] = useState();

    useEffect( ()=>{
        const fetchData = async () => {
            const data = await (await fetch("/no-cache/profileSystem/getProfile")).json()
            if (canUseDOM){
                console.log(data);
            }
            setIsLogged(data.isUserDefined)
        }
        fetchData()
    },[]) 

    return(
        <>
            {canUseDOM ? <p>{isLogged ? "logged": "not logged"}</p> : ""}
        </>
    )

}
export default CustomLogin