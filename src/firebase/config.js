import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyD__YdLAafCW_j5P6_YBprvrVGymTlbiNA",
    authDomain: "live-chat-5f3f5.firebaseapp.com",
    projectId: "live-chat-5f3f5",
    storageBucket: "live-chat-5f3f5.appspot.com",
    messagingSenderId: "696621124819",
    appId: "1:696621124819:web:e48a59f2b1b3b050a89826"
  };

  let app = initializeApp(firebaseConfig);

  let db = getFirestore(app);

  export default  {db};