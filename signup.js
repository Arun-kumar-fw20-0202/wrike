
var count = 0;
var user_data = JSON.parse(localStorage.getItem('user_data')) || [];
document.querySelector('form').addEventListener('submit',function(e){
    e.preventDefault();

    var name = document.querySelector('.name').value;
    var password = document.querySelector('.password').value;
    var c_code = document.querySelector('.c_code').value;
    var phone = document.querySelector('.phone').value;
    var email = document.querySelector('.email').value;
    var c_name = document.querySelector('.c_name').value;
    var country = document.querySelector('.country').value;
    var someCheckbox = document.querySelector('.term');

    var new_mobile = c_code + " " + phone;
    
    var obj = {name,password,new_mobile,email,c_name,country};
    user_data.push(obj);

   localStorage.setItem('user_details',JSON.stringify(user_data));
    
   window.location.href = 'login.html';
})