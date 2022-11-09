import {useState} from 'react'
export default function Calculator(){
    let [ob,setOb]=useState({price:undefined,discount:undefined,calculated:0})
    function Calculation(){
        let rate=ob.price
        let fare=ob.discount
        let computed=rate-rate*(fare/100)
        setOb({...ob, calculated: computed});
    }
    return(
        <>
        <h3>Tip : {ob.calculated}</h3>
        <br/>
        <label>Total Amount <input value={ob.price} onChange={(e)=>{setOb({...ob, price: e.target.value})}} /></label><br/>
        <label>Discount upto  <input value={ob.discount} onChange={(e)=>{setOb({...ob, discount: e.target.value})}} /></label><br/>
        <button onClick={Calculation}>Discount {ob.discount}%</button>
        </>
    )
    
}