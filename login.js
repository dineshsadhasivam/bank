import { useState, useContext } from "react";
import UserContext from "./context";
import Card from './card';


export default function Login(){
    const [show, setShow]         = useState(true);
    const [status, setStatus]     = useState('');
    const [email, setEmail]       = useState('');
    const [password, setPassword] = useState('');
    const ctx = useContext(UserContext);  
    var ctx2 = Array(ctx);
  
    function validate(field, label){
        if (!field) {
          setStatus('Error: ' + label);
          setTimeout(() => setStatus(''),3000);
          return false;
        }
        return true;
    }
  
    function handleCreate(){
      console.log(email,password);
      if (!validate(email,    'email'))    return;
      if (!validate(password, 'password')) return;
      ctx2.push({email});
      ctx2.push({password});
      setShow(false);
      console.log(ctx);
      console.log(ctx2);
    } 
  
    return (
      <Card class="card-headers"
        bgcolor="secondary"
        header="Login"
        status={status}
        body={show ? (  
                <>
                Email<br/>
                <input type="input" class="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)} /><br/>
                Password<br/>
                <input type="password" class="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
                <button type="submit" class="btn btn-light" onClick={handleCreate}>Login</button> </>
              ):(
                <>
                <h5>Success</h5>
                </>
              )}
      />
    )
  }