import  React from "react" 
import Buttonupload from '../components/uploadButton'
import "../styles/registration.css"
import MainLayout from "../layout/mainLayout"
function form() {
  
  return (

    <MainLayout>

<div className="form">
     
     <div className="form-body">
         <div className="username">
             <label className="form__label" for="firstName">First Name </label>
             <input className="form__input" type="text" id="firstName" placeholder="First Name"/>
         </div>
         <div className="lastname">
             <label className="form__label" for="lastName">Last Name </label>
             <input  type="text" name="" id="lastName"  className="form__input"placeholder="LastName"/>
         </div>
         <div className="email">
             <label className="form__label" for="email">Email </label>
             <input  type="email" id="email" className="form__input" placeholder="Email"/>
         </div>
         <div className="password">
             <label className="form__label" for="password">Password </label>
             <input className="form__input" type="password"  id="password" placeholder="Password"/>
         </div>
         <div className="confirm-password">
             <label className="form__label" for="confirmPassword">Confirm Password </label>
             <input className="form__input" type="password" id="confirmPassword" placeholder="Confirm Password"/>
         </div>
         <div className="adress">
             <label className="form__label" for="adress">Adress </label>
             <input className="form__input" type="text" id="adress" placeholder="Adress"/>
         </div>
         <div className="zip">
             <label className="form__label" for="zip">ZIP </label>
             <input className="form__input" type="text" id="zip" placeholder="zip"/>
         </div>
         <div className="number">
             <label className="form__label" for="number">Phone number </label>
             <input className="form__input" type="text" id="number" placeholder="number"/>
         </div>
         <div className="idNum">
             <label className="form__label" for="idNum">ID number </label>
             <input className="form__input" type="text" id="idNum" placeholder="idNum"/>
         </div>
         <div className="JMBG">
             <label className="form__label" for="JMBG">Identification number </label>
             <input className="form__input" type="text" id="JMBG" placeholder="JMBG"/>
         </div>
     </div>
    
<p>Upload ID picture</p>
<Buttonupload></Buttonupload>
<div class="footer">
         <button type="submit" class="btn">Register</button>
     </div>
    <div className="login-button">
<p>Already have an account?</p>
<a href="/login">
<button >Log in</button>
</a>
</div>
 </div> 
    </MainLayout>


    
        
    
  )
}

export default form