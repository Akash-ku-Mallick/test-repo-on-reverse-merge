import { getDocs, collection } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { db, FREBASE_APP } from "../Configs/FirebaseConfig";

const storage = getStorage(FREBASE_APP, "gs://akash-my-portfolio.appspot.com");


const getCertificateList = async () => {
    let list = [];

    let result = new Promise(async (resolve, reject) => {
        const data = await getDocs(collection(db, "certifications"));

        data.forEach(async (doc) => {
            let temp = doc.data();
            temp.image = await getCertificateImage(temp.image);
            console.log(temp.id);
            console.log(temp);
            list.push(temp);
        });

        resolve(list);
    });

    return result;
}




const getCertificateImage = async (path) => {
        const storageRef = ref(storage, path);

        const res = new Promise((resolve, reject) => {
            
            getDownloadURL(storageRef).then((url) => {
                resolve(url);
            }).catch((error) => {
                resolve("error");
            });
        });

    return res;
}

export { getCertificateList };

