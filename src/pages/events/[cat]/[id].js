import Image from 'next/image';
import {useRouter} from 'next/router';
import {Formik , Field , Form , ErrorMessage} from 'formik';
import error_text from 'src/components/formik_components/error_message';
import * as Yup from 'yup';
import axios from 'axios';

const SingleEventPage =({data}) => {
    const router = useRouter();

    const onSubmit = async(val,{resetForm})=> { 
        const emailValue = val.email;
        const eventId = router.query.id;

        try{
            const response = await fetch('/api/email-registration',{
                method: 'POST',
                headers: { 'Content-Type' : 'application/json'},
                body: JSON.stringify({email: emailValue, event: eventId})
            })

            if(!response.ok) throw new Error(`Error:${response.status}`);
            const data = await response.json();
            console.log('POST',data);
            alert(`You are registered successfully with ${emailValue} `);
            resetForm();
        }
        catch(err){
            console.log(err,'error');
        }

    }

    return(
        <div className='flex flex-col gap-y-10 mx-5 lg:mx-auto text-center lg:w-8/12 mt-28'>

            <h1 className='text-3xl font-serif'>{data.title}</h1>
            <Image width={900} height={500} alt={data.title} src={data.image} />
            <p >{data.description}</p>
            {console.log(data)}

            <Formik
            initialValues={{email:''}}
            validationSchema = {
                Yup.object({
                    email: Yup.string().email('Invalid email address').required('Email is required')
                })
            }
            onSubmit={onSubmit} >
                {
                    formik =>{
                        return(
                            <Form className=' flex lg:flex-row flex-col items-center justify-center '>
                                <label>Sign up for event : </label>
                                <Field name='email' type='email' className='bg-inherit text-inherit w-4/5 lg:w-auto  px-1 border-[0.5px] rounded ' />
                                <ErrorMessage name='email' component={error_text}/>
                                <button type='submit' 
                                className={(!formik.isValid || formik.isSubmitting)|| !formik.dirty?'rounded p-1 mx-1 my-2 w-4/5 lg:w-auto cursor-not-allowed bg-zinc-900':'rounded p-1 mx-1 my-2 w-4/5 lg:w-auto bg-white text-black'}
                                disabled={(!formik.isValid || formik.isSubmitting) || !formik.dirty}> Submit </button>
                            </Form>
                        )
                    }
                }
               
            </Formik>
        </div>
    )
}

export default SingleEventPage;

export async function getStaticPaths(){

    const response = await axios.get(process.env.NEXT_PUBLIC_ENV_LOCAL_VARIABLE_2);
    const allEvents = response.data;
    const allPaths = allEvents.map( ev => {
        return({
            params: {
                cat : ev.city,
                id: ev.id
            }
        })
       }
    )
     return{
        paths : allPaths,
        fallback : false
    }
}

export async function getStaticProps(context){
    const id = context.params.id;
    const response = await axios.get(process.env.NEXT_PUBLIC_ENV_LOCAL_VARIABLE_2);
    const allEvents = response.data;
    const eventData = allEvents.find(e => e.id === id);
    return{
        props:{data : eventData}
    }
}