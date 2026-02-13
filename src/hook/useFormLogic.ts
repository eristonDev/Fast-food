import React, { useState, useRef, useEffect } from "react";
import type { Users, Field } from "../types/uiTypes";


const formModelo: Users = {
    name: '',
    phone: '',
    email: '',
    category: '',
    data: null,
};

const placeHolder = {
  name: 'Your Name',
  phone:'Phone Number',
  email: 'Your Email',
  category: 'How many persons?',
  data: 'dd/mm/aaaa',
}

const useFormLogic = () => {

  const fields: Field[] = (Object.keys(formModelo) as (keyof Users)[])
  .filter((key): key is Exclude<keyof Users, 'category'> => key !== 'category')
  .map(key => {
    let type: 'text' | 'number' | 'date';

    if (key === 'phone') type = 'number';
    else if (key === 'data') type = 'date'
    else type = 'text';

    return {
      name: key, 
      type,
      className: key === 'data' ? 'date-placeholder' : ''
    };

  });

  const Category: number[] = [2, 3, 4, 5];

  const[user, setUser] = useState<Users>({
    name: '',
    phone: '',
    email: '',
    category: '',
    data: null,
  });

  const[data, setData] = useState<Users[]>([]);

  const fielfile = useRef<HTMLInputElement>(null);

  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {

    const {name, type, value} = e.target;
    const key = name as keyof Users;

    const parsed = type === 'number' ? Number(value) : key === 'data' ? new Date(value) : value
    setUser((prev) =>({
      ...prev,
      [key]: parsed,
    }));
    
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    

    setData([...data, user]);

    setUser({
      name: '',
      phone: '',
      email: '',
      category: '',
      data: new Date(),
    });

  };

  useEffect(() => {
    console.log(data)
  },[data]);

  return { fields, Category, handleChange, handleSubmit, fielfile, user, placeHolder }

}

export default useFormLogic