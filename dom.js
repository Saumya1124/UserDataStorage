const myForm = document.querySelector('#my-form');
const myName = document.querySelector('#name');
const myEmail = document.querySelector('#email');
const msg = document.querySelector('.msg');
const phone = document.querySelector('#phone');

const itemList = document.querySelector('#item');

myForm.addEventListener('submit',addData);

itemList.addEventListener('click', removeItem);

itemList.addEventListener('click', removeItem1);

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
     axios.post('https://crudcrud.com/api/2214652e01f54ab9b124e7e97953a379/UserDetails',user1)
                .then(e=>{a=e.data._id,console.log(e)})
                .catch(e=>{console.log(e)})
     
     // get
     axios.get('https://crudcrud.com/api/2214652e01f54ab9b124e7e97953a379/UserDetails')
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
        edit.className = 'edit-btn';
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
        
     axios.delete(`https://crudcrud.com/api/2214652e01f54ab9b124e7e97953a379/UserDetails/${id}`)
     .then(response=>{
       console.log(response)
    })
     .catch(e=>{console.log(e)})

     itemList.removeChild(li);
      
    }



  }

  function removeItem1(event){
    if(event.target.classList.contains('edit-btn')){

        // myName = localStorage.getItem('name')
      
        var li = event.target.parentElement;
        itemList.removeChild(li);
        
        
      
    }
  }


