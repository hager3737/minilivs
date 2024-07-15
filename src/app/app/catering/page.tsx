"use client";

import api from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

export default function Catering () {

    const [ showing, setShowing ] = useState(false);

    const [ formData, setFormData ] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        order: ""
    })

    const createQuestion = useMutation({
        mutationFn: () => api.offert({
            fullName: formData.fullName,
            email: formData.email,
            phoneNumber: formData.phoneNumber,
            order: formData.order
        }),
        onSuccess: () => {
            setFormData({
                fullName: "",
                email: "",
                phoneNumber: "",
                order: ""
            })
        }
    })
   
    

    const handleFormChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
            }));
        }

        const handleClick = () => {
            setShowing(false);
            createQuestion.mutate()

        }

    return (
        <div className="flex flex-col gap-12 mx-12 md:mx-40 mt-20 mb-20">
            <div className="flex justify-center">
                <p className="text-center font-calistoga">Vänligen fyll i formuläret nedan så återkommer vi så snabbt som möjligt!</p>
            </div>
            <div className="flex flex-col items-center">
                <div className="">
                    {showing === true && <p className="text-red-600 font-semibold">Vänligen fyll i all information!</p>}
                    {createQuestion.isSuccess && <p className="text-green-600">Din offert har nu skickats in, tack!</p>}
                    <div>
                        <h1>Förnamn och efternamn:</h1>
                        <input name="fullName" value={formData.fullName} onChange={handleFormChange} className="border rounded-lg border-blue-900 px-1 outline-none"/>
                    </div>
                    <div>
                        <h2>Email:</h2>
                        <input name="email" value={formData.email} onChange={handleFormChange} className="border rounded-lg border-blue-900 px-1 outline-none"/>
                    </div>
                    <div>
                        <h3>Telefonnummer:</h3>
                        <input name="phoneNumber" value={formData.phoneNumber} onChange={handleFormChange} className="border rounded-lg border-blue-900 px-1 outline-none"/>
                    </div>
                    <div>
                        <h4>Vad du önskar beställa:</h4>
                        <textarea name="order" value={formData.order} onChange={handleFormChange} className="border rounded-lg border-blue-900 px-4 h-20 outline-none"/>
                    </div>
                    {formData.fullName.length < 1 || formData.email.length < 1 || formData.phoneNumber.length < 1 || formData.order.length < 1 ? 
                        <button onClick={() => setShowing(true)} className="bg-red-600 p-1 rounded-lg">Skicka in!</button>
                    :
                    <button onClick={handleClick} className="bg-green-600 p-1 rounded-lg">Skicka in!</button>
                    }
                    
                </div>
            </div>
        </div>
    )
}