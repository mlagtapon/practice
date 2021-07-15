import {useState} from 'react';
import Axios from 'axios';
import {navigate} from '@reach/router';

const Create = props => {
    const [form, setForm] = useState("")

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }
    const handleSubmit = e => {
        e.preventDefault();
        Axios.post('http://localhost:8000/api/products/new', form)
            .then(
                navigate('/')
                )
            .catch(err => console.log(err))
        
    }

    return (
        <form  onSubmit={handleSubmit}>
            <div className="col-8">
            <label>Title:</label>
            <input type="text" onChange={handleChange} name="title" />
            <label>Price:</label>
            <input step="0.01" type="number" onChange={handleChange} name="price" />

            <label>Description:</label>
            <input type="text" onChange={handleChange} name="description" />

            <input type="submit" value="Submit" className="btn btn-primary"/>
            </div>
        </form>
    )
}

export default Create;