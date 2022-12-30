import { ref } from "vue";
import { auth } from "@/firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";



let error = ref(null);

let logIn = async(email,password) => {
    try {

        let res = await signInWithEmailAndPassword(auth, email, password);
        if (!res) {
            throw new Error ("couldn't login your account");
        }
        return res;

    }catch (err) {
        error.value = err.message;
    }
}

let signInC = () => {
    return {error, logIn}
}

export default signInC;