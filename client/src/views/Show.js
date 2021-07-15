import {useState, useEffect} from 'react';
import {navigate} from '@reach/router';
import Axios from 'axios';

const Create = props => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        Axios.get(`http://localhost:8000/api/products/${props.id}`)
        .then(res => setProduct(res.data.results))
        .catch(err => console.log(err))
    }, [props]);
    
    const deleteThis = (product_id) => {
        Axios.delete(`http://localhost:8000/api/products/delete/${product_id}`)
            .then(navigate('/'))
    }

    return ( 
        <div>
        <h1>{product.title}</h1>
        <h1>{product.price}</h1>
        <h1>{product.desc}</h1>
        <button onClick={(e)=>{deleteThis(product._id)}}>Delete</button>
        </div>
    )
}

export default Create;