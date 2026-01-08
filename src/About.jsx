import './about.css';
import "./hero.css";
import TextField from '@mui/material/TextField';
import { useForm } from '@formspree/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ClipLoader } from "react-spinners";
import { useEffect } from 'react';
import { useRef } from 'react';

const override = {
  display: "block",
  margin: "0 auto",
};

function About() {
    const [state, handleSubmit] = useForm("mjgknpyj");
    const formRef = useRef(null);

    const onSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();

        // 🔒 Validation
        if (!name || !email || !message) {
            toast.error("All fields are required");
            return;
        }

        if (!email.includes("@")) {
            toast.error("Enter a valid email address");
            return;
        }

        await handleSubmit(e);
    };

    useEffect(() => {
        if (state.succeeded) {
            toast.success("Message sent successfully 🚀" , {theme: "colored"});
            formRef.current.reset();
        }
    }, [state.succeeded])

    
    return (
        <div className="container-fluid mb-5">
            <div className="row p-1 p-lg-5 p-md-5 m-3" id='About'>
                <div className="col-lg-7 col-md-12 mb-5">
                    <h3 className=" fs-1 p-lg-5">About Me</h3>
                    <div className='descriptionBox mb-4'>
                        <div className='aboutImgWrapper'>
                            <img src="junaid_pfp.jpg" alt="" className="aboutImg" />
                        </div>
                        <div className='description'>
                            <p className='m-0'>Hello! I'm Junaid, a passionate Frontend and MERN Stack Developer with a knack for creating dynamic and responsive web applications. With a strong foundation in JavaScript, React, Node.js, and MongoDB, I thrive on turning complex problems into elegant solutions</p>
                        </div>
                    </div>
                    <div className='pt-3'>
                        <p>👨‍💻 naive algorist</p>
                        <p>📚 BCA 2nd Year | Tech Enthusiast</p>
                        <p>💻 MERN STACK Dev</p>
                        <p>🚀 Learning MERN Stack & ML</p>
                    </div>
                </div>
                <div className="col-lg-5 col-md-12" id='contact'>
                    <h3 className="fs-1 p-lg-5">Contact</h3>
                    <div className='contactBox p-lg-4 p-md-
                    4 pt-4'>
                        <form ref={formRef} onSubmit={onSubmit} >
                            <div className='contactForm d-flex flex-column gap-3 mb-4'>
                                <TextField name='name' id="outlined-basic" label="Name" variant="outlined" />
                                <TextField name='email' type='email' id="outlined-basic" label="Email" variant="outlined" />
                                <TextField name='message' id="outlined-basic" label="Message" variant="outlined" multiline rows={4} />
                            </div>
                            <button type="submit" className='hireMe abtBtn' disabled={state.submitting}>
                                {state.submitting ? <ClipLoader
                                    color={"white"}
                                    cssOverride={override}
                                    // loading={loading}
                                    size={24}
                                    aria-label="Loading Spinner"
                                    data-testid="loader"
                                /> : "Send" }
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer position="top-right" autoClose={3000} />
        </div>
    );
}

export default About;