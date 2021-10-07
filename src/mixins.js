const Mixins = {
    methods: {
        emailValidation(email) {
            const re =
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (re.test(email)) {
                return false;
            } else {
                return true;
            }
        },
        initFunction(){
            console.log("Mixins method")
        }
    }
}

export default Mixins