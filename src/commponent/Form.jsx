import React, { useState } from 'react'
import {  Navigate } from 'react-router-dom'




function Form() {
    const [values,setvalues] =useState({
      firstname:'',
      email:'',
      contact:'',
      address:'',
      gender:'',
      subject:'',
      languages:[]
  
    })
  
  // new 
 
  const [goToValid, setGoToValid]=React.useState(false);
  const [formErrors,setFormErrors]=useState({});

   // Form validation logic
   const validateForm = () => {
    const errors = {};

    if (!values.firstname) errors.firstname = 'First name is required';
    if (!values.email) errors.email = 'Email is required';
    if (!values.contact) errors.contact = 'Contact number is required';
    if (!values.address) errors.address = 'Address is required';
    if (!values.gender) errors.gender = 'Gender is required';
    if (!values.subject) errors.subject = 'Course is required';
    if (values.languages.length === 0) errors.languages = 'At least one language must be selected';

    return errors;
};
 // This will handle the redirection after form submission if validation passes
 const handleSubmit = (e) => {
  e.preventDefault();

  const errors = validateForm();
  setFormErrors(errors); // Set form errors if validation fails

  if (Object.keys(errors).length === 0) {
      console.log(values); // Log the form values
      setGoToValid(true); // Set goToValid to true, which triggers redirection
  } else {
      alert('Please fill all required fields');
  }
};
  
    const handleChanges = (e) =>{
      const{name,value,type,checked}=e.target;

      if(type==='checkbox')
      {
        setvalues({
          ...values,languages:checked
               ?[...values.languages,value]
               :values.languages.filter((lang)=>lang !==value)
        });
      }else if(type==='radio'){
        setvalues({
          ...values,
          gender:value
        });
      }else{
        setvalues({
          ...values,[name]:value
        });
      
      }
    }
  
  
    const ResetFun = () =>
    {
      setvalues({firstname:'',email:'',contact:'',address:'',gender:'',subject:'',languages:[]});
      setFormErrors({}); // Reset form errors
    };
     // Redirect to the Valid page if goToValid is true
     if (goToValid) {
      return <Navigate to="/Valid" />;
  }
    return (
      <>
        <div className='container'>
          <h1>Registration Form</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="firstname">Name</label>
            <input type="text" id='firstname' placeholder='Enter First Name' name='firstname'
            onChange={handleChanges}   value={values.firstname}/>
            {formErrors.firstname && <p className="error">{formErrors.firstname}</p>}
          
            <label htmlFor="email"> Email</label>
            <input type="email" id='email' placeholder='Enter Email' name='email'
            onChange={handleChanges}  value={values.email}/>
            {formErrors.email && <p className="error">{formErrors.email}</p>}

            <label htmlFor="contact">Phone Number</label>
            <input type="text" id='phone' placeholder='Enter Phone number' name='contact'
            onChange={handleChanges}  value={values.contact}/>
            {formErrors.contact && <p className="error">{formErrors.contact}</p>}

            <label htmlFor="address">Address</label>
            <textarea id="address" name="address" cols='30' rows='5' onChange={handleChanges} placeholder='Enter your Address' value={values.address}/>
            {formErrors.address && <p className="error">{formErrors.address}</p>}

            <label htmlFor="gender">Gender</label>
            <input type="radio" name="gender"  value="male"
            onChange={handleChanges} checked={values.gender === 'male'} />Male
            <input type="radio" name="gender" value="female"
            onChange={handleChanges}  checked={values.gender === 'female'}/>Female
            <input type="radio" name="gender" value="other"
            onChange={handleChanges} checked={values.gender === 'other'}/>Other 
            {formErrors.gender && <p className="error">{formErrors.gender}</p>}

             <label htmlFor='languages'  >Languages:</label>
             <input name='languages' type="checkbox" value="English" onChange={handleChanges} checked={values.languages.includes('English')}/>English
             <input name='languages' type="checkbox" value="Malayalam" onChange={handleChanges} checked={values.languages.includes('Malayalam')}/>Malayalam
             <input  name='languages' type="checkbox" value="Hindi" onChange={handleChanges} checked={values.languages.includes('Hindi')}/>Hindi
             {formErrors.languages && <p className="error">{formErrors.languages}</p>}

            <label htmlFor="subject">Course</label>
            <select name="subject" id="subject" onChange={handleChanges} value={values.subject} >
                <option value="">Select a course</option>
                <option value="math">Bsc</option>
                <option value="math">BCA</option>
                <option value="math">BCom</option>
                <option value="math">BA</option>
                <option value="math">BBA</option>
            </select>
            {formErrors.subject && <p className="error">{formErrors.subject}</p>}
  
           <button type='button'onClick={ResetFun}>Reset</button>
           <button  type='submit'>Submit</button>
  
          </form>
        </div>
  
     
     </>
    )
  }
  
  export default Form
  