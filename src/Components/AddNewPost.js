import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import './form.css';

const AddNewPost = () => {
    const navigate = useNavigate();
    const [author,setAuthor] = useState(null)
    const [description,setDescription] = useState(null)
    const [location,setLocation] = useState("")
    const [image,setImage] = useState("")
    async function upLoadpost(e){
        let formData = new FormData();
        e.preventDefault()   
        if(author===""||description===""|| location===""||image===""){
            alert("Please Enter all fields")
        }
        else{
        formData.append("author",author);
        formData.append("description",description);
        formData.append("location",location);
        formData.append("image",image);
        console.log(formData)
        await fetch("https://instaclone-node-backend-6llm.onrender.com/",{
            method:"POST",
            body:formData,
            redirect:"follow"
        })
        .then(res => {
            return res.text();
        })
        .then(text => {
            console.log(text);
        })
        .catch(err => {
            console.log(err);
        })
        navigate("/postview");
    }
}
    
    return (
        <>
        <Header/><hr/>
        <div id="form">
            <input className="input" type="file" required={true}  onChange={(e)=>setImage(e.target.files[0])}  /><br/>
            <input className="input" type = "text" placeholder = "Author" required={true} onChange={(e)=>setAuthor(e.target.value)} value = {author}/><br/>
            <input className="input" type = "text" placeholder = "Description" required={true} onChange={(e)=>setDescription(e.target.value)} value = {description}/><br/>
            <input className="input" type = "text" placeholder = "location" required={true} onChange={(e)=>setLocation(e.target.value)} value = {location} /><br/>
            <button id="button" onClick={upLoadpost}>POST</button>
        </div>
        </>
    )
}

export default AddNewPost