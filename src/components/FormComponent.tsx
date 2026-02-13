import React from "react";
import type { Users, Field } from "../types/uiTypes";
import ButtonComponent from "./ButtonComponent";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

interface FormProps {
    user: Users;
    fields: Field[];
    Category: number[];
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    placeHolder: {[K in keyof Users]: string};
};

const containerStyle ={
    width:'100%',
    height:'100%'
};

const center = {
    lat: -23.55052,
    lng: -46.633308
};

const FormComponent = ({fields, Category, handleChange, handleSubmit, user, placeHolder}: FormProps) => {
  return (
    <div className="w-full sm:max-w-[606px] md:max-w-[674px] lg:max-w-full xl:max-w-full py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-10 md:px-10 lg:px-10 xl:px-10 grid grid-cols-1 sm:grid-cols-1 
        md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6">
            <form onSubmit={handleSubmit} className="h-[480px] gap-y-4 flex flex-col place-items-center sm:place-items-center
            lg:place-items-start xl:place-items-start">
                <h2 className="font-[Dancing_Script] font-bold text-4xl text-[#222831]">Book A Table</h2>
                {fields.map((field )=> (
                    <input 
                        key={field.name}
                        name={field.name}
                        onChange={handleChange} 
                        placeholder={field.name === 'data'
                            ? (user.data ? '' : placeHolder.data)
                            : placeHolder[field.name]
                        }
                        type={field.type}
                        value={field.name === 'data'
                            ? ( user.data instanceof Date
                                ? user.data.toISOString().split('T')[0]
                                : ''
                            ) : user[field.name] ?? ''
                        }
                        className={
                            ` w-full 
                              sm:max-w-[560px] 
                              md:max-w-[560px] 
                              lg:max-w-[460px] 
                              xl:max-w-[595px] 
                              h-[50px] 
                              border border-[#222831] 
                              rounded-sm 
                              outline-0 
                              ${field.name === 'data' ? 'appearance-none p-4': 'p-6'}
                              ${field.className}`
                        }
                    />
                ))}
                <select 
                    name="category" 
                    onChange={handleChange}
                    value={user.category}
                    className="w-full sm:max-w-[560px] md:max-w-[560px] lg:max-w-[460px] xl:max-w-[595px] h-[50px] rounded-md border border-[#222831] p-4 outline-none"
                >
                    <option value="" disabled>
                        How many persons?
                    </option>
                    {Category.map((opt, i)=> (
                        <option key={i}>{opt}</option>
                    ))}
                </select>
            <ButtonComponent variant="Book Now" className="p-3"/>
            </form>
            <div className="w-full h-[325px] flex mt-14">
                <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_KEY}>
                    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
                        <Marker position={center} />
                    </GoogleMap>
                </LoadScript>
            </div>
        </div>
    </div>
  )
}

export default FormComponent