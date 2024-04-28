import React from 'react'
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import SectionHeading from '../../componants/SectionHeading';
import Image from '../../componants/Image';
import Input from '../../componants/Input';
import CustomBtn from '../../componants/CustomBtn';
import AuthNavigate from '../../componants/AuthNavigate';
import PeraGrap from '../../componants/PeraGrap';


const Registration = () => {
  return (
    <>
       <Box>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <div className="flex w-full h-[100vh] justify-center items-center ">
                <div className='w-[505px] registaion_main'>
                    <SectionHeading style="text-text-color text-[28px] font-bold font-montserrat capitalize " text="Get Started With Easily Register"/>
                    <PeraGrap text="Free register and you can enjoy it" style="text-pera-color text-xl font-montserrat font-normal	pt-3"/>
                    <form>
                       <div className='flex flex-col gap-9 my-8'>
                            <div>
                                <Input style="w-full text-text-color text-2xl font-lato placeholder:text-text-color placeholder:font-loto placeholder:text-2xl" name="email" type="text" lebelTxt="Your Name" variant="outlined" placeholder="Your Full Name"/>
                            </div>
                            <div>
                                <Input style="w-full text-text-color text-2xl font-lato placeholder:text-text-color placeholder:font-loto placeholder:text-2xl" name="email" type="email" lebelTxt="Email Adress" variant="outlined" placeholder="Your Email"/>
                            </div>
                            <div>
                                <Input style="w-full text-text-color text-2xl font-lato placeholder:text-text-color placeholder:font-loto placeholder:text-2xl" name="password" type="password" lebelTxt="Password" variant="outlined" placeholder="Enter your password"/>
                            </div>
                            <CustomBtn styling="submitBtn" variant="Contained" text="Sing Up"/>
                       </div>
                    </form>
                    <div>
                      <AuthNavigate style="font-text-color text-xl font-montserrat font-normal sign_txt" link="/" linktext="Sign In" text="Already have an account ?"/>
                    </div>
                </div>
            </div>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Registration