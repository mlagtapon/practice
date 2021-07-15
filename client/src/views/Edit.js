import {useState} from 'react';
import Axios from 'axios';
import {navigate} from '@reach/router';

const Edit = props => {
    const [form, setForm] = useState({
        title: "",
        price: 0,
        desc: ""
    })
    const handleForm = e => {
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }
    const onSubmit = e => {
        e.preventDefault();
        Axios.put(`http://localhost:8000/api/update/${props.id}`, form)
            .then(res => console.log(res))
            .then(navigate("/"))
            .catch(err => console.log(err))
        
    }

    return (
        <form  onSubmit={onSubmit}>
            <div className="col-8">
            <label>Title:</label>
            <input type="text" onForm={handleForm} name="title" />
            <label>Price:</label>
            <input step="0.01" type="number" onForm={handleForm} name="price" />
            <label>Description:</label>
            <input type="text" onForm={handleForm} name="desc" />
            <input type="submit" value="Update" className="btn btn-primary"/>
            </div>
        </form>
    )
}

export default Edit;