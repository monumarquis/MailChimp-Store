import axios from "axios";
import { POST_USERS } from "./user.types";

export const getdata = (Users) =>{
    let res =  axios.post("http://localhost:8080/users", async (req, res) =>{
        try{
            let user = await Users.create({
               ...req.body,
               
            });
            res.send(user);
         }
         catch (e){
               res.status(404).send(e.message);
         }
    })
    return res
}