"use client"
import React, {useState} from 'react'

const Form = () => {
    const [formData, setFormData] =useState({
        stuId: "",
        stuName: "",
        motherName: "",
        fatherName: "",
        phoneNum: "",
        email: "",
        gender: "",
        dob: "",
        address: "",
        city: "",
        province: "",
        zipCode: ""
    })

//console.log(e.target.value)
    const [message, setMessage] = useState('')
    const handleInputChange = (e) => {
        console.log(e);
        const {name, value}=e.target
        console.log(name,value)
        setFormData({
            ...formData,
            [name]:value
        })
    };

    const handleSubmit = async(e)=>{
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/users',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(formData)
            })
            if (response.ok) {
                setMessage('Student Added Successfully!')
                setFormData({
                    stuId: "",
                    stuName: "",
                    motherName: "",
                    fatherName: "",
                    phoneNum: "",
                    email: "",
                    gender: "",
                    dob: "",
                    address: "",
                    city: "",
                    province: "",
                    zipCode: ""
                })                
            } else {
                setMessage('Failed to add student')
            }
        } catch (error) {
            setMessage('Failed to add student.')
        }
    }

  return ( 
    <div className='w-2/4 mt-10 bg-white p-6 rounded-lg shadow-md'>
        <h2 className='text-2xl mb-11 mt-4 text-center'>Student Registration Form</h2>
        <form onSubmit={handleSubmit}>
            {/* Add handle Submit*/}
            <div className='mb-6'>
                <label htmlFor='stuId' className='Block text-md font-medium text-gray-600'>
                    Student ID 
                </label>
                {/* Add Value, onChange*/}
                <input 
                type='number' 
                id='stuId' 
                name='stuId'
                placeholder='Enter your 5 digit ID'
                min='10000'
                max='99999'
                className='mt-1 p-2 w-full border border-gray-300 rounded-md' 
                value={formData.stuId}
                onChange={handleInputChange} required/>
            </div>
            <div className='mb-6'>
                <label htmlFor='stuName' className='Block text-md font-medium text-gray-600'>
                    Student Name 
                </label>
                {/* Add Value, onChange*/}
                <input 
                type='text' 
                id='stuName' 
                name='stuName'
                className='mt-1 p-2 w-full border border-gray-300 rounded-md' 
                value={formData.stuName}
                onChange={handleInputChange} required/>
            </div>
            <div className='mb-6'>
                <label htmlFor='motherName' className='Block text-md font-medium text-gray-600'>
                    Mother Name 
                </label>
                {/* Add Value, onChange*/}
                <input 
                type='text' 
                id='motherName' 
                name='motherName'
                className='mt-1 p-2 w-full border border-gray-300 rounded-md' 
                value={formData.motherName}
                onChange={handleInputChange} required/>
            </div>
            <div className='mb-6'>
                <label htmlFor='fatherName' className='Block text-md font-medium text-gray-600'>
                    Father Name
                </label>
                {/* Add Value, onChange*/}
                <input 
                type='text' 
                id='fatherName'
                name='fatherName' 
                className='mt-1 p-2 w-full border border-gray-300 rounded-md'
                value={formData.fatherName}
                onChange={handleInputChange} 
                required/>
            </div>
            <div className='mb-6'>
                <label htmlFor='phoneNum' className='Block text-md font-medium text-gray-600'>
                    Phone Number 
                </label>
                {/* Add Value, onChange*/}
                <input 
                type='tel' 
                id='phoneNum'
                name='phoneNum'
                placeholder= 'Enter your 10 digit number' 
                pattern="[0-9]{10}"
                className='mt-1 p-2 w-full border border-gray-300 rounded-md' 
                value={formData.phoneNum}
                onChange={handleInputChange}
                required/>
            </div>
            <div className='mb-6'>
                <label htmlFor='email' className='Block text-md font-medium text-gray-600'>
                    Email 
                </label>
                {/* Add Value, onChange*/}
                <input 
                type='email' 
                id='email'
                name='email' 
                placeholder='john@gmail.com'
                pattern="[a-zA-Z0-9.]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}"
                title='Use lowercase, numbers, @, "." only'
                className='mt-1 p-2 w-full border border-gray-300 rounded-md'
                value={formData.email}
                onChange={handleInputChange}
                required/>
            </div>
            <div className='mb-6'>
                <label htmlFor='gender' className='Block text-md font-medium text-gray-600'>
                    Gender
                </label>
                {/* Add Value, onChange*/}
                <select id="gender" name="gender" onChange={handleInputChange} className='mt-1 p-2 block w-full border border-gray-300 rounded-md' required>
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                
            </div>
            <div className='mb-6'>
                <label htmlFor='dob' className='Block text-md font-medium text-gray-600'>
                    DOB 
                </label>
                {/* Add Value, onChange*/}
                <input 
                type='date' 
                id='dob'
                name='dob' 
                className='mt-1 p-2 w-full border border-gray-300 rounded-md'
                value={formData.dob}
                onChange={handleInputChange} 
                required/>
            </div>
            <div className='mb-6'>
                <label htmlFor='address' className='Block text-md font-medium text-gray-600'>
                    Address 
                </label>
                {/* Add Value, onChange*/}
                <input 
                type='text' 
                id='address'
                name='address' 
                className='mt-1 p-2 w-full border border-gray-300 rounded-md'
                value={formData.address}
                onChange={handleInputChange} 
                required/>
            </div>
            <div className='mb-6'>
                <label htmlFor='city' className='Block text-md font-medium text-gray-600'>
                    City 
                </label>
                {/* Add Value, onChange*/}
                <input 
                type='text' 
                id='city'
                name='city' 
                className='mt-1 p-2 w-full border border-gray-300 rounded-md'
                value={formData.city}
                onChange={handleInputChange} 
                required/>
            </div>
            <div className='mb-6'>
                <label htmlFor='province' className='Block text-md font-medium text-gray-600'>
                    Province 
                </label>
                {/* Add Value, onChange*/}
                <input 
                type='text' 
                id='province'
                name='province' 
                className='mt-1 p-2 w-full border border-gray-300 rounded-md'
                value={formData.province}
                onChange={handleInputChange} 
                required/>
            </div>
            <div className='mb-6'>
                <label htmlFor='zipCode' className='Block text-md font-medium text-gray-600'>
                    Zip Code 
                </label>
                {/* Add Value, onChange*/}
                <input 
                type='text' 
                id='zipCode'
                name='zipCode' 
                pattern="[A-Za-z][0-9][A-Za-z] [0-9][A-Za-z][0-9]"
                placeholder='A1A 1A1'
                className='mt-1 p-2 w-full border border-gray-300 rounded-md'
                value={formData.zipCode}
                onChange={handleInputChange} 
                required/>
            </div>
            <div className='mb-4'>
                <button type='submit' className='bg-blue-500 mt-4 text-white p-2 rounded-md w-full hover:bg-blue-600'>Add Student</button>
            </div>
        </form>
        {message && <div className='mt-4 text-center text-red-500'>{message}</div>}
    </div>
  )
}

export default Form