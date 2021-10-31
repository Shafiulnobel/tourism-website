import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddServices.css'
const AddServices = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('https://eerie-phantom-27491.herokuapp.com/services',data)
        .then(res=>{
            if(res.data.insertedId){
                alert('successfully added service! ')
                reset();
            }
        })
    };
    return (
        
<div className="add-service">
 <h2>Please add a service</h2>
    <form  onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true})} placeholder="service name"/>
      <textarea style={{width:'40%'}} {...register("description")} placeholder="service description"/>
      <input type="number" {...register("days")} placeholder="days of package"/>
      <input type="number" {...register("price")} placeholder="service price"/>
      <input {...register("img")} placeholder="image url"/>
      
      <input type="submit" />
    </form>
        </div>
    );
};

export default AddServices;