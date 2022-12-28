import { ref } from "vue";
import { auth } from "@/firebase/config";
import { createUserWithEmailAndPassword,updateProfile } from "firebase/auth";

let error = ref(null);

let createAccount = async(email, password, displayName) => {
    try {
        let res = await createUserWithEmailAndPassword(auth, email,password);

        if(!res) {
            throw new Error('could not create new user');
        };
    
        updateProfile(auth.currentUser, {displayName : displayName});

        return res;
    
      }catch(err){
        error.value = err.message;
      }
}


let signUpC = () => {
    return {error, createAccount}
}

export default signUpC;
