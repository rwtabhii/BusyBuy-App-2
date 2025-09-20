import { collection, getDocs,addDoc, query, updateDoc,deleteDoc, where } from "firebase/firestore";
import {db} from "../../firebaseinit.js" // adjust path

export async function getCartItemApi(userId) {
    try {
        const q = query(
            collection(db, "carts"),
            where("userId", "==", userId)
        );

        const snapshot = await getDocs(q);

        const userCartItems = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));

        return userCartItems;
    } catch (err) {
        console.log("Error fetching cart items:", err);
        return [];
    }
}


export async function addCartItemApi(data) {
    try {
        const cartCollectionRef = collection(db, "cart");

        // add a new doc for each cart item
        await addDoc(cartCollectionRef, data);

        console.log("Cart item added successfully!");
    } catch (error) {
        console.error("Error setting cart item:", error);
    }
}

export async function updateCartItemApi(id, quantity) {
    try {
        const cartDocRef = doc(db, "cart", id); // id is the Firestore doc ID
        await updateDoc(cartDocRef, { quantity: quantity });
        console.log("Cart item quantity updated successfully!");
    } catch (error) {
        console.error("Error updating cart item quantity:", error);
        throw error;
    }
}

export async function removeCartItemApi(id) {
    try {
        const cartDocRef = doc(db, "cart", id); // id is the Firestore doc ID
        await deleteDoc(cartDocRef);
        console.log("Cart item removed successfully!");
    } catch (error) {
        console.error("Error deleting cart item:", error);
        throw error;
    }
}