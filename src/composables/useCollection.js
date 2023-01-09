import { ref } from "vue";
import { db } from "@/firebase/config";
import { addDoc,collection } from "firebase/firestore";

let useCollection = (Collection) => {
    let error = ref(null);

    let addDocFunc = async(doc) => {
        try{
            await addDoc(collection(db,Collection),doc);
        }catch(err) {
            console.log(err.message);
            error.value = "could not send the message";
        }
    }   

    return { error,addDocFunc };
}

export default useCollection;