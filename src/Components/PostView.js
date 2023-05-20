import { useEffect, useState } from "react";
import Header from "./Header";
import Card from "./PostCard";


const PostView = () => {
    const [response, setResponse] = useState([{}]);
    
    //fetching all data via posts
    const fetchAllPosts = async () => {
        await fetch("https://instaclone-node-backend-6llm.onrender.com/all")
            .then(res => { return res.json() })
            .then(data => {
                console.log(data)
                setResponse(data)
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        fetchAllPosts()
    }, []);


    return (
        <>
            <Header/>
            {
                response.map((user) => {
                    const key = new Date().getTime() - Math.random().toString();
                    return <Card user={user} key={key} />
                })
            }
        </>
    )
}

export default PostView