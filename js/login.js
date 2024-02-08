function Login(form){
    var email = form.email.value;
    var pass = form.password.value;
    if(email === 'admin@admin.com' && pass === '123456'){
        alert('Login Successful');
    }
    else{
        alert('Incorrect email or password')
    }
}