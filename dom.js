const myForm = document.querySelector('#my-form');
const myName = document.querySelector('#name');
const myEmail = document.querySelector('#email');
const msg = document.querySelector('.msg');
const phone = document.querySelector('#phone');

const itemList = document.querySelector('#item');

myForm.addEventListener('submit',addData);

itemList.addEventListener('click', removeItem);

itemList.addEventListener('click', editData);

function addData(e){
    e.preventDefault();

    

    if (myName.value === '' || myEmail.value === ''){
        msg.classList.add('error');
        // msg.innerHTML = 'Please enter all feilds';
        setTimeout(()=> msg.remove(),2000);

    }
    else{
        console.log('success')
    }

    let user1 = {
        'name':myName.value ,
        'email': myEmail.value ,
        'phone' : phone.value,
    }



     // post
     var a = 0
     axios.post('https://crudcrud.com/api/d85b4ef4a0354447b5962899e694cbe3/UserDetails',user1)
                .then(e=>{a=e.data._id,console.log(e)})
                .catch(e=>{console.log(e)})
     
     // get
     axios.get('https://crudcrud.com/api/d85b4ef4a0354447b5962899e694cbe3/UserDetails')
     .then(response=>{
      console.log(response)
      for(var i = 0;i<response.data.length;i++){
        
          showUserDetails(response.data[i])
      }
    })
     .catch(e=>{console.log(e)})

  


    function showUserDetails(user){
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(user.name + '--' + user.email +'--'+ user.phone+'--' +user._id +'--'));
    
        var del = document.createElement('button');
        del.className = 'li_btn';
        del.appendChild(document.createTextNode('delete'));
        li.appendChild(del);
    
        var edit = document.createElement('button');
        edit.className = 'edit_btn';
        li.appendChild(document.createTextNode('edit'));
        li.appendChild(edit);
    
        itemList.appendChild(li);
    }
    showUserDetails()
   


   

    // ------------------------converting object to string

    // userString = JSON.stringify(user);

    // localStorage.setItem('userDetails',userString)

    // let userObj = JSON.parse(userString)
    // console.log(userObj)

    //----------------------------Storing multiple data

    // localStorage.setItem(myEmail.value,userString)


}




function removeItem(event){
    if(event.target.classList.contains('li_btn')){
        var li = event.target.parentElement;
        var data = li.textContent;
        data = data.split('--')
        const id = data[3]
        console.log(id)
        
     axios.delete(`https://crudcrud.com/api/d85b4ef4a0354447b5962899e694cbe3/UserDetails/${id}`)
     .then(response=>{
       console.log(response)
    })
     .catch(e=>{console.log(e)})

     itemList.removeChild(li);
      
    }



  }


  function editData(event){
    if (event.target.classList.contains('edit_btn')){
        let li = event.target.parentElement;
        let data = li.textContent;
        data = data.split('--') ;
        myName.value = data[0]
        myEmail.value = data[1]
        phone.value = data[2]
        const id = data[3]

        let obj1 = {
            name :myName.value,
            email:myEmail.value,
            phone : phone.value
        }

        axios.put(`https://crudcrud.com/api/d85b4ef4a0354447b5962899e694cbe3/UserDetails/${id}`,obj1)
     .then(response=>{
       console.log(response)
    })
     .catch(e=>{console.log(e)})
     .then(
        axios.get(`https://crudcrud.com/api/d85b4ef4a0354447b5962899e694cbe3/UserDetails/${id}`)
     .then(response=>{
      console.log(response)
      for(var i = 0;i<response.data.length;i++){
        
          showUserDetails(response.data[i])
      }
    })
     .catch(e=>{console.log(e)})
     )


     itemList.removeChild(li);
      
    }
    



        
        

        // removing from dom
        itemList.removeChild(li)

       



    }
