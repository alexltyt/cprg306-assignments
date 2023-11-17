import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query, doc,deleteDoc } from "firebase/firestore";

export async function getItems(userId) {
    try {
        const itemsCollectionRef = collection(db, "users", userId, "items");
        const q = query(itemsCollectionRef);
        const querySnapshot = await getDocs(q);

        const items = [];
        querySnapshot.forEach((docSnapshot) => {
            const itemData = docSnapshot.data();
            items.push({ 
                id: docSnapshot.id, 
                name: itemData.name,
                category: itemData.category,
                quantity: itemData.quantity
            });
        });
        return items;
    } catch (error) {
        console.error("Error fetching items from Firestore:", error);
        return []; 
    }
}




export async function addItem(userId, item) {
    const itemsCollectionRef = collection(db, "users", userId, "items");
    const docRef = await addDoc(itemsCollectionRef, item);
    return docRef.id;
}


export async function deleteItem(userId, itemId) {
    try {
        console.log('itemID: ',itemId);
        const itemDocRef = doc(db, "users", userId, "items", itemId);
        await deleteDoc(itemDocRef);
        console.log("Item deleted from Firestore");
    } catch (error) {
        console.error("Error deleting item from Firestore:", error);
    }
}