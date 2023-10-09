import { useState } from "react"
import "../Assets/ProductTable.css"

const data = [
    { name: "Anom", age: 19, gender: "Male" },
    { name: "Megha", age: 19, gender: "Female" },
    { name: "Subham", age: 25, gender: "Male" },
]

const ProductTable = () => {
    const [productName, setProductName] = ['']
    return(
        <>
        <div className="productTable">
            <div className="search">
                <input placeholder="Search product by name"/>
            </div>
            <div className="tableContent">
                <table className="table">
                <tbody>
                <tr>
                   
                        <th className="tableHeading">Name</th>
                        <th className="tableHeading">Age</th>
                        <th className="tableHeading">Gender</th>
                      
                </tr>
                </tbody>
                {data.map((val, key) => {
                    return (
                        <tbody>
                        <tr key={key}>
                            <td className="tableData">{val.name}</td>
                            <td className="tableData">{val.age}</td>
                            <td className="tableData">{val.gender}</td>
                        </tr>
                        </tbody>
                    )
                })}
            </table>
            </div>
            <div className="addProduct">
            <button>Add Product</button>
            </div>
            <div className="deleteProduct">
                <button>Delete Product</button>
            </div>
        </div>
        
        </>
    )
}

export default ProductTable;