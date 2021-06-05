import React, { useState } from 'react'
import { FormikErrors, useFormik } from 'formik';
import Image from 'next/image'

const ContactForm = () => {

    const [success, setSuccess] = useState(false);

    const validate = (values: Values) => {
        let errors: FormikErrors<Values> = {};

        if (!values.name) {
            errors.name = 'Your name is required';
        }

        if (!values.message) {
            errors.message = 'Project description is required';
        }


        if (!values.email) {
            errors.email = 'Your email is required';
        } else if (!isValidEmail(values.email)) {
            errors.email = 'Invalid email address';
        }
        return errors;
    }

    const isValidEmail = (email = '') => {
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(email);
    };

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },
        validate,
        onSubmit: values => {
            (async () => {
                try {
                    const rawResponse = await fetch('https://thedefi.network/api/sendMail.php/sendMail', {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(values)
                    });
                    const content = await rawResponse.json();
                    if (content) {
                        setSuccess(true);
                        setTimeout(() => {
                            setSuccess(false);
                        }, 200);
                    }
                } catch (error) {
                    alert('Error on sending email');
                }
            })();

        },
    });

    return (
        <div id="contact" className="mt-32 lg:max-w-4xl xl:max-w-5xl xl:pl-8 2xl:max-w-7xl lg:mx-auto ">
            <h2 className="text-lg text-center">Get in touch</h2>
            <p className="text-5xl font-bold my-5 text-center">Have a project in mind?  <br className="hidden lg:inline-block" /> Let's work together.</p>
            <p className="text-xl text-center">Please fill out the form below and we will be in touch soon.</p>

            <form onSubmit={formik.handleSubmit} className="flex flex-col max-w-lg mx-auto mt-12 px-4 lg:px-0">
                <div className="my-8">
                    <div className="border-b-2 focus-within:border-defi-blue relative ">
                        <input
                            className="block w-full appearance-none focus:outline-none bg-transparent pb-4"
                            id="name"
                            name="name"
                            type="text"
                            placeholder=" "
                            onChange={formik.handleChange}
                            value={formik.values.name}
                        />
                        <label className="absolute top-0 -z-1 duration-300 origin-0 text-gray-500" htmlFor="name">Your Name</label>
                    </div>
                    {formik.errors.name ? <div className="text-red-600">{formik.errors.name}</div> : null}
                </div>


                <div className="my-8">
                    <div className="border-b-2 focus-within:border-defi-blue relative">
                        <input
                            className="block w-full appearance-none focus:outline-none bg-transparent pb-4"
                            id="email"
                            name="email"
                            type="email"
                            placeholder=" "
                            onChange={formik.handleChange}
                            value={formik.values.email}
                        />
                        <label className="absolute top-0 -z-1 duration-300 origin-0 text-gray-500" htmlFor="email">Your email address</label>
                    </div>
                    {formik.errors.email ? <div className="text-red-600">{formik.errors.email}</div> : null}
                </div>


                <div className="my-8">
                    <div className="border-b-2 focus-within:border-defi-blue relative">
                        <textarea
                            className="block w-full appearance-none focus:outline-none bg-transparent"
                            id="message"
                            name="message"
                            placeholder=" "
                            rows={5}
                            onChange={formik.handleChange}
                            value={formik.values.message}
                        />
                        <label className="absolute top-0 -z-1 duration-300 origin-0 text-gray-500" htmlFor="message">Describe your project</label>
                    </div>
                    {formik.errors.message ? <div className="text-red-600">{formik.errors.message}</div> : null}
                </div>
                <button type="submit" className="px-8 py-3 mt-5 bg-defi-blue text-white lg:self-end">Submit</button>
            </form>
            <div className="flex justify-center items-center">
                <div className="relative">
                    <div className="absolute inset-0 w-full h-full flex justify-center items-center z-10">
                        <Image src="/success.svg" alt="email successfully sent" width={190} height={190} />
                    </div>
                    <Image src="/successArt.svg" alt="email successfully sent" width={362} height={362} />
                </div>
            </div>
        </div>
    )
}

interface Values {
    name: string;
    email: string;
    message: string;
}

export default ContactForm
