import {
  getFirestore,
  collection,
  getDocs,
  doc,
  setDoc,
} from 'firebase/firestore'

export const getOrders = async () => {
  const db = getFirestore()
  const querySnapshot = await getDocs(collection(db, 'order'))
  querySnapshot.forEach((doc) => {
    console.log(doc.data())
  })
}

export const createOrder = (data) => {
  const db = getFirestore()
  const orderRef = collection(db, 'order')
  return setDoc(doc(orderRef), {
    ...data,
  })
}
