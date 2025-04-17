
import React, {useState} from "react";



const Budget=()=>{

    const [cost, setCost]= useState(0);

    const budgetObj = [
        { id: 1, name: "Apple", price: 20 },
        { id: 2, name: "Banana", price: 10 },
        { id: 3, name: "Apple", price: 30 },
        { id: 4, name: "Apple", price: 5 },
        { id: 5, name: "Apple", price: 15 },
        { id: 6, name: "Apple", price: 50 },
        { id: 7, name: "Iphone", price: 80 }
      ]
            

    return(
        <div>
        <h1>Enter your budget to check available items:</h1>

        <input type="number" placeholder="type price here"  onChange={(e)=>setCost(e.target.value)}/>

        <h1>Items you can buy are in green Color</h1>
        <table>
            <thead>
            <th>name</th>
            <th>price</th>
            </thead>
            
        <tbody>
            {
                budgetObj.map((value)=>{
                    let budget = value.price<=cost;
                   return  <tr key={value.id}>
                        <td>{value.name}</td>
                        <td style={{ color: budget ? "green" : "red" }}>{value.price}</td>
                    </tr>
})
            }

        </tbody>

        </table>
        
        
        </div>
    )
}
export default Budget;