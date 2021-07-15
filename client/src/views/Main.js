import Axios from 'axios';
import { useState, useEffect } from 'react';
import {Link, navigate} from '@reach/router';

const Main = props => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        Axios.get('http://localhost:8000/api/products')
        .then(res => setProducts(res.data.results), setLoaded(true))
        .catch(err => console.log(err))

    },[])

    const deleteOne = (product_id) => {
        Axios.delete(`http://localhost:8000/api/products/delete/${product_id}/`)
            .then(res => {
                navigate('/')
    })}

    return(
        <table className=" col-3 table table-hover mx-auto">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                    {console.log(products)}
                {
                    products.map((product,index) => <tr key={index}>
                        <td>
                            <Link to = {`/${product._id}`}> {product.title}</Link>
                            </td>
                        <td>{product.price}</td>
                        <td>{product.description}</td>
                        <td><Link to = {`/update/${product._id}`} className="btn-primary"> Edit</Link></td>
                        <td><button onClick={(e)=>{deleteOne(product._id)}}>
                        Delete
                    </button></td>
                    </tr>
                    )
                }
            </tbody>
        </table>
    )
}
export default Main;