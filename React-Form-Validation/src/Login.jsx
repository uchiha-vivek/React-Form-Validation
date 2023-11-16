import React,{ useState} from 'react'
import "./login.css"


function Login(){
    const [user,setUser]  = useState("")
    const [password,setPassword] = useState("")
    const [userErr,setUserErr]=  useState(false)
    const [passErr,setPassErr] = useState(false)

    function loginHandle(e){
         if(user.length<5 || password.length<5)
         {
            alert("Enter specified value")
         }
         else{
            alert('successfully')
         }
        e.preventDefault()
    }
      // User Handler
     function userHandler(e){
        let item =e.target.value;
        if(item.length<5)
        {

           setUserErr(true)
        }
        else{
            setUserErr(false)
        }
        setUser(item)
        // console.warn(e.target.value.length)
    }

    // User Password

    function passwordHandler(e){
        let item = e.target.value;

        if(item.length<5){
            setPassErr(true)
        }
        else{
            setPassErr(false)
        }

        setPassword(item)




    }

    return (
    <div>
        <form className="form" onSubmit={loginHandle}> 
        <h1 className='login'>Login</h1>
        <br/> 
        <input className='id' type='text' placeholder="Enter user id"  onChange={userHandler} />{userErr?<span>User not valid</span>:""}
        <br/> <br/>
        <input className="password"type='password' placeholder="Enter user password" onChange={passwordHandler}/> {passErr?<span>Password not valid </span>:""}

        <br/> <br/>

        <button className="button"type="submit">Login</button>
        </form>

    </div>
    )
}

export default  Login