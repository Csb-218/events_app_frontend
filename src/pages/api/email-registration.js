import axios from 'axios';
export default function handler(req, res) {
    const {method} = req;
    if(method === 'POST'){
        //our code
        const {email,eventId} = req.body;
        
        axios.post(process.env.NEXT_PUBLIC_ENV_LOCAL_VARIABLE_2_ADD,req.body)
        .then((response) => {console.log(response);})
        .catch((err) => {console.log(err);});

        res.status(200).json({message: `You have successfully registered with the email ${email} at ${eventId}`})

    }
}