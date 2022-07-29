
let searchBtn=document.querySelector('#searchBtn');
let searchUser=document.querySelector('#searchUser');
let ui =new UI()

searchBtn.addEventListener('click',(e)=>{
    let userText=searchUser.value;
    if (userText!=''){
        fetch(`https://api.github.com/users/${userText}`)
        .then(result =>result.json())
        .then(data =>{
            if (data.message=='Not Found') {
                ui.clearAlert()
                ui.showAlert('User not found!','alert alert-danger');
            }else{
                ui.clearAlert()
                ui.showProfile(data);
            }
        
        })
    }else{
        ui.clearProfile();
    }
})