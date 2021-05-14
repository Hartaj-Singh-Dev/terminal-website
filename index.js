const data ={name:"",email:"",phone:"",message:""}
const {name ,email ,phone,message} =data

const displayAbout =()=>{
     document.getElementById('aboutdata').style.display = "flex";
     document.getElementById('aboutdata').style.flexDirection = "column"
}
 
const displayContact =()=>{
     document.getElementById('contactdata').style.display = "flex";
     document.getElementById('contactdata').style.flexDirection = "column";
}

const hideAbout =()=>{
     document.getElementById('aboutdata').style.display = "none";
}

const hideContact = ()=>{
     document.getElementById('contactdata').style.display = "none";
}

const enterPhone =(event)=>{
     const value = event.target.value;
     console.log(value);
     data.phone = value;
}

const enterName = (event)=>{
     const value = event.target.value;
     console.log(value);
     data.name = value
}

const enterEmail = (event)=>{
     const value = event.target.value;
     console.log(value);
     data.email =value
}

const enterMessage = (event)=>{
     const value = event.target.value;
     console.log(value);
     data.message =value
}

const sendData =(event)=>{
     event.preventDefault()
     console.log(data);
     const{name,email,phone,message}=data

     if(!name || !email || !phone || !message){
          document.getElementById('errorHead').innerHTML = "<h5>Sorry Something is missing </h5>";
     }else{
      document.getElementById('errorHead').innerHTML = " ";
     fetch("https://hartajsingh.herokuapp.com/postData",{
          mode:'cors',
          method:"POST",
          headers:{
               "Content-Type":"application/json"
          },
          body:JSON.stringify(data)
     }).then(function(res){
          const data =  res.json()
          return data
     }).then((data)=>{console.log(data);}).catch((err)=>{console.log(err);})
    }
}