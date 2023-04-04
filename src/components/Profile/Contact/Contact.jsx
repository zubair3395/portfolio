import React from 'react'
import Button from '../../common/Button';
import InputField from '../../common/InputField';
import Stars from '../../common/Stars';
import useForm from './useForm';
import { validation } from './validation';

const Contact = () => {
  const {handleChange, users, getError, error} = useForm(validation)
    const handleSubmit=()=>{
      getError();
      let isValid= true;
       const errorFree= validation(users);
       Object.values(errorFree).forEach(value=>{
        if(value){
          isValid= false;
        }
       })
       if (isValid){
        console.log({users})
       }
        
    }
  return (
    <>
       <section className="page-section">
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
            Contact Me
          </h2>

          <Stars color="dark" />

          <div className="row justify-content-center">
            <div className="col-lg-8 col-xl-7">
              <div>
                <div className="mb-3">
                  <InputField type="text" placeholder="Enter your name" name="name" onChange={handleChange}/>
                  {error?.name && <p className='text-danger'>{error?.name}</p>}
                </div>

                <div className="mb-3">
                  <InputField type="text" placeholder="Enter your email" name="email" onChange={handleChange}/>
                  {error?.email && <p className='text-danger'>{error?.email}</p>}
                </div>

                <div className="mb-3">
                  <InputField
                    type="number"
                    placeholder="Enter your phone number"
                    name="number"
                    onChange={handleChange}
                  />
                  {error?.number && <p className='text-danger'>{error?.number}</p>}
                </div>

                <div className="mb-3">
                  <InputField type="text" placeholder="Message" name="message" onChange={handleChange}/>
                  {error?.message && <p className='text-danger'>{error?.message}</p>}
                </div>
                <Button value="Submit" onClick={handleSubmit} style={{width: "100%"}}/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
