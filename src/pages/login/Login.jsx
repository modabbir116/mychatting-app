import React from 'react'
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import Image from '../../componants/Image';
import SectionHeading from '../../componants/SectionHeading';
import googleIcon from '../../assets/images/google.png'
import Input from '../../componants/Input';
import CustomBtn from '../../componants/CustomBtn';

const Login = () => {
  return (
    <Box>
        <Grid container spacing={0}>
          <Grid item xs={6}>
            <div className="flex w-full h-[100vh] justify-center items-center">
                <div className='w-[380px]'>
                    <SectionHeading style="text-text-color text-3xl font-bold font-montserrat capitalize " text="Login to your account!"/>
                    <div className='inline-flex justify-center items-center gap-x-2.5 border-2 border-text-color py-4 px-8 mt-10 rounded-md'>
                       <div className='w-6 h-6 overflow-hidden'>
                        <Image source={googleIcon} alt="not found" className='w-full h-full object-cover'/>
                       </div>
                        <span>Login with Google</span>
                    </div>
                    <form>
                       <div className='flex flex-col gap-10 my-12'>
                            <div>
                                <Input style="w-full text-text-color text-2xl font-lato placeholder:text-text-color placeholder:font-loto placeholder:text-2xl" name="email" type="email" lebelTxt="Email Adress" variant="outlined" placeholder="Your Email"/>
                            </div>
                            <div>
                                <Input style="w-full text-text-color text-2xl font-lato placeholder:text-text-color placeholder:font-loto placeholder:text-2xl" name="password" type="password" lebelTxt="Password" variant="outlined" placeholder="Enter your password"/>
                            </div>
                            <CustomBtn styling="submitBtn" variant="Contained" text="Login to Continue"/>
                       </div>
                    </form>
                </div>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className="login_imgbox">
              <div>
                <Image source="" alt="not found"/>
              </div>
            </div>
          </Grid>
        </Grid>
    </Box>
  )
}

export default Login