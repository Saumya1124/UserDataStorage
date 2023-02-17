const myForm = document.querySelector('#my-form');
const myName = document.querySelector('#name');
const myEmail = document.querySelector('#email');
const msg = document.querySelector('.msg');
const phone = document.querySelector('#phone');

const itemList = document.querySelector('#item');

myForm.addEventListener('submit',addData);

itemList.addEventListener('click', removeItem);

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

    const li = document.createElement('li');
    li.appendChild(document.createTextNode(myName.value))

    var del = document.createElement('button');
    del.className = 'li_btn';
    del.appendChild(document.createTextNode('delete'));
    li.appendChild(del);

    itemList.appendChild(li);

    
    

    localStorage.setItem('user',myName.value);

    let user = {
        'name':myName.value ,
        'email': myEmail.value ,
        'phone' : phone.value,
    }

    // converting object to string

    userString = JSON.stringify(user);

    localStorage.setItem('userDetails',userString)

    // let userObj = JSON.parse(userString)
    // console.log(userObj)

    // Storing multiple data

    localStorage.setItem(myEmail.value,userString)


}




function removeItem(event){
    if(event.target.classList.contains('li_btn')){
      
        var li = event.target.parentElement;
        itemList.removeChild(li);
        var userName=document.getElementById('name').value;
        var userEmail=document.getElementById('email').value;
        var userPhone=document.getElementById('phone').value;
        let myObj ={
            name:userName,
            email:userEmail ,
            phone:userPhone   
        }
        let myObj_serialized=JSON.stringify(myObj);
        localStorage.removeItem(myObj.email,myObj_serialized)
      
    }

  }

