import { db } from "../../firebaseinit";
import { getDocs, addDoc, doc, collection } from "firebase/firestore";

export async function getProduct() {
    try {
        const querySnapshot = await getDocs(collection("products", db));
        const products = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        return products
    } catch (error) {
        console.log(error)
    }
}

export function addDoc() {

}