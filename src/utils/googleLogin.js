
import emitter from "@/main.js";

class GoogleLogin {
    constructor() {
        this.auth2 = null

    }
    initLogin() {
        console.log(window.gapi)
        window.gapi.load('auth2', ()=>{
            // Retrieve the singleton for the GoogleAuth library and set up the client.
            const auth2 = window.gapi.auth2.init({
              client_id: '363762775324-5kj2ghd6hdf9dtcpfu5r19r9utiv6feb.apps.googleusercontent.com',
              cookiepolicy: 'single_host_origin',
              // Request scopes in addition to 'profile' and 'email'
              //scope: 'additional_scope'
            });
            this.auth2 = auth2
            console.log("auth2||",this.auth2 )
            const btnInfo = document.getElementById('google--login')
            this.attachSignin(btnInfo);
          });
    }
    attachSignin(element) {
        let userDetails={}
        console.log(element.id);
        this.auth2.attachClickHandler(element, {},
            (googleUser)=> {
                userDetails.name = googleUser.getBasicProfile().getName() 
                userDetails.email = googleUser.getBasicProfile().getEmail()
                userDetails.image = googleUser.getBasicProfile().getImageUrl()
                emitter.emit('google--login',userDetails)

            }, (error) =>{
                userDetails.error = error
            });     
      }
}

export default GoogleLogin