const myForm = document.querySelector('#my-form');
const myName = document.querySelector('#name');
const myEmail = document.querySelector('#email');
const msg = document.querySelector('.msg');
const phone = document.querySelector('#phone');

const itemList = document.querySelector('#item');

myForm.addEventListener('submit',addData);

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

    itemList.appendChild(li);

    localStorage.setItem('user',myName.value);

    let user = {
        'name':myName.value ,
        'email': myEmail.value ,
        'phone' : phone.value,
    }

    userString = JSON.stringify(user);

    localStorage.setItem('userDetails',userString)

    // let userObj = JSON.parse(userString)
    // console.log(userObj)

    localStorage.setItem(myEmail.value,userString)

}


