'use client';

import axios from 'axios';
import {AiFillFacebook} from 'react-icons/ai';
import {FcGoogle} from 'react-icons/fc';
import {useCallback,useState} from 'react';
import userRegisterModal from '@/app/hooks/userRegisterModal';
import {FieldValues,SubmitHandler,useForm} from 'react-hook-form'
import Modal from './Modal';
import Heading from '../Heading';
import Input from '../inputs/Input'
import { error } from 'console';
import {toast} from 'react-hot-toast';
import Button from '../Button';
import { signIn } from 'next-auth/react';
import useLoginModal from '@/app/hooks/useLoginModal';

const RegisterModal = () => {
    const registerModal = userRegisterModal();
    const loginModal = useLoginModal();
    const [isLoading,setIsLoading] = useState(false);
    const {register,handleSubmit,formState:{
        errors
    }} = useForm<FieldValues>({
        defaultValues : {
            name : '',
            email : '',
            password : ''
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);
        axios.post('/api/register',data)
          .then(()=>{
            registerModal.onClose();
            })
          .catch((error)=>{
            toast.error(`Something went wrong`)
          })
          .finally(()=>{
            setIsLoading(false)
          })
    }

    const toggle = useCallback(()=>{
      loginModal.onOpen();
      registerModal.onClose();
  },[loginModal,registerModal]);

    const bodyContent = (
        <div className='flex flex-col gap-4 text-slate-800'>
          <Heading 
           title='Welcome a SopeFincas'
           subtitle='Create an account'
          />
          <Input
           id='email'
           label='Email'
           disabled={isLoading}
           register={register}
           errors={errors}
           required
          />
           <Input
           id='name'
           label='Nombre'
           disabled={isLoading}
           register={register}
           errors={errors}
           required
          />
           <Input
           id='password'
           type='password'
           label='Password'
           disabled={isLoading}
           register={register}
           errors={errors}
           required
          />
        </div>
    );


    const footerContent = (
       <div className='flex flex-col gap-4 mt-3'>
          <hr />
          <Button 
          onClick={()=> signIn('google')}
          outline label='Continue with Google' icon={FcGoogle}/>
           <Button 
          onClick={()=> signIn('facebook')}
          outline label='Continue with Facebook' icon={AiFillFacebook}/>
          <div className='text-neutral-500 text-center mt-4 font-light'>
           <div className='flex justify-center text-center flex-row items-center gap-2'>
            <div>
                <div>Already have an account</div>
              </div>
              <div 
              onClick={toggle}
              className='text-neutral-800 cursor-pointer hover:underline'>
                <div>LogIn</div>
              </div>
            </div>
          </div>
       </div>
    )

  return (
    <Modal
     disabled={isLoading}
     isOpen= {registerModal.isOpen}
     title='Register'
     actionLabel='Continue'
     onClose={registerModal.onClose}
     onSubmit={handleSubmit(onSubmit)}
     body={bodyContent}
     footer={footerContent}
    />
  )
}

export default RegisterModal