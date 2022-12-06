import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection, getDocs } from "firebase/firestore"
import { getAuth, signInAnonymously } from "firebase/auth";

// импорт конфига
import { firebaseConfig } from "./fbConfig";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app) // база данных 
const auth = getAuth(app); // аутентификация
signInAnonymously(auth)  // анонимная аутентификация пользователя

export const addMessage = async (message) => {
    try {
        // добавление документа в коллекцию
        await addDoc(collection(db, 'messages'), {
            header: message.header,
            text: message.text,
            date: new Date(),
            imgURI: '/uri/img.jpg'
        });
    } catch (error) {
        console.log(error);
    }
}

export const readMessages = async () => {
    let messages = [] // временный массив, хз может он и не нужен
    try {
        // считывание всех документов коллекции
        const querySnapshot = await getDocs(collection(db, "messages"));
        // перебор документов и добавление их в массив
        querySnapshot.forEach(async doc => {
            let tmp = await {header: doc.data().header, text: doc.data().text, date: doc.data().date, imgURI: doc.data().imgURI}
            messages.push(tmp)
        })
        return messages
    } catch (error) {
        console.log(error);
    }
}

