import React from "react";

const ContactForm = () => {

   const HandleSubmit =(evt) => {
     evt.preventDefault();
     const form  = evt.target ;
     const formData = new FormData(form);
     const jsonData = Object.fromEntries(formData.entries())
     console.log(jsonData)


}
   

  return (
    <>
    
    <form className="p-3" onSubmit={HandleSubmit}>
  <div className="form-group">
    <label HTMLFor="exampleInputEmail1">Email address</label>
    <input type="email" name ="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label HTMLFor="exampleInputPassword1">Password</label>
    <input type="password" name =" mdp" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div className="form-check">
    <input type="checkbox" name="check" className="form-check-input" id="exampleCheck1"  />
    <label className="form-check-label" HTMLFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    
    </>
  );
};

export default ContactForm;
