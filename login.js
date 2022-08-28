
var login_data = JSON.parse(localStorage.getItem('user_details')) || []

document.querySelector('#emailFm').addEventListener("submit",function(e) {
    e.preventDefault();
    var user_email = document.querySelector('.user_email').value;
    var new_user = user_email.trim();
    
    var backBtn = document.querySelector('.box + p').innerHTML = '<span class="back"> Back <span>';
    
    document.querySelector('.back').addEventListener('click',function(){    
        var backBtn = document.querySelector('.box + p').innerHTML = "Don't have a Wrike account yet? <a href='signup.html'>Get started now</a>";
        document.querySelector('.details').innerHTML = '<form id="emailFm"><div class="inputBx"><input type="text" class="user_email" placeholder="Email or Corporate ID"></div><div class="inputBx"><input type="submit" class="next" value="Next"></div><div class="forg"><a href="#">Forget password?</a></div><div class="other"><span>or log in with</span><div class="icons"><span><i class="fa fa-google"></i> Google</span><span><i class="fa fa-apple"></i> Signup with Apple</span><span><i class="fa-brands fa-microsoft"></i> Office</span></div></div></form>';
    })

    if(new_user != ""){
        document.querySelector('.details').innerHTML = '<form id="passwordFm"><div class="data2"><span>Enter your password</span><small>'+" "+user_email+" "+' <a href="#">Wrong email?</a></small></div><div class="inputBx"><input type="password" class="password" placeholder="Password"></div><div class="inputBx"><input type="submit" value="Log in"></div><div class="forg"><a href="#">Forget password?</a></div></form>';
    }else{
        alert("Please fill this field")
    }



    document.querySelector('#passwordFm').addEventListener("submit",function(e){
        e.preventDefault();

        var password = document.querySelector(".password").value;

            for(let i = 0; i<= login_data.length-1; i++){
                var ele = login_data[i];
                if(ele.email == new_user && ele.password == password){
                    window.location.href = 'project.html';
                    break;
                }else{
                    alert("user not found")
                    break;
                }
            }
        })
})


