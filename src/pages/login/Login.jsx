import React from 'react'
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import Image from '../../componants/Image';
import SectionHeading from '../../componants/SectionHeading';
import googleIcon from '../../assets/images/google.png'
import Input from '../../componants/Input';
import CustomBtn from '../../componants/CustomBtn';
import AuthNavigate from '../../componants/AuthNavigate';
import loginImg from '../../assets/images/login_img.jpg'
import Modal from '@mui/material/Modal';
import { ImCross } from "react-icons/im";


// forgate modal style start
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
// forgate modal style end
const Login = () => {
  // forgate password part start 
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleModleClose = ()=>{
    setOpen(false)
  }
  // forgate password part end
  return (
    <>
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
                    <div>
                      <AuthNavigate style="font-text-color text-xl font-montserrat font-normal sign_txt" link="/registration" linktext="Snig Up" text="Don’t have an account ?"/>

                      <p onClick={handleOpen} className='font-2xl cursor-pointer text-link-color font-montserrat font-medium capitalize underline pt-6'>
                        Forgotten password?
                      </p>
                    </div>
                </div>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className='login_imgbox'>
              <div>
                <Image source={loginImg} alt="not found" className="w-full h-full object-cover"/>
              </div>
            </div>
          </Grid>
        </Grid>
    </Box>


    {/* forgate part start  */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
         <div className='flex flex-col gap-8 relative'>
         <button className='bg-link-color w-10 h-10 border-0 outline-0 center flex justify-center items-center text-white absolute right-[-15px]  top-[-15px]' onClick={handleModleClose}><ImCross /></button>
           <h2 className='text-text-color text-xl font-bold font-montserrat capitalize'>Find Your Account</h2>
           <div>
              <Input style="w-full text-text-color text-2xl font-lato placeholder:text-text-color placeholder:font-loto placeholder:text-2xl" name="email" type="email" lebelTxt="Email Adress" variant="outlined" placeholder="Your Email"/>
           </div>
            <CustomBtn styling="submitBtn" variant="Contained" text="Send Link"/>
         </div>
        </Box>
      </Modal>
    {/* forgate part end  */}
    </>
  )
}

export default Login