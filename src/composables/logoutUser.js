import { ref } from "vue";
import { auth } from "@/firebase/config";
import { signOut } from "firebase/auth";


let error = ref(null);

let logout = async () => {
    try {
        await signOut(auth);
        console.log('user logout');
    }catch (err) {
        error.value = err.message;
    }
}



let logoutUser = () => {
    return { error, logout }
}

export default logoutUser;