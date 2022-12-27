import { useEffect, useState } from 'react';
import './App.css';
import {db} from './firebase-config';
import {collection, getDocs, addDoc, updateDoc, deleteDoc,  doc} from 'firebase/firestore'; 
import './App.css'


function App() {
  const [newUserName, setNewUserName] = useState("");
  const [newUserCount, setNewUserCount] = useState(0);

  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  const createUser = async() => {
    await addDoc(usersCollectionRef, {username: newUserName, usercount: Number(newUserCount)});
  }

  const updateUser = async(id, usercount) => {
    const userDoc = doc(db, "users", id)
    const newFields = {usercount: usercount+ 1}
    await updateDoc( userDoc, newFields)
  }

  const deleteUser = async(id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);  
  }

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
      console.log(data.docs)
    }

    getUsers();
  }, [usersCollectionRef])
  

  return (
    <div className="App">
      <input placeholder="username"
       onChange={(e) => {
        setNewUserName(e.target.value);
       }}
      />
      <input 
        type= "Number" 
        placeholder="usercount" 
        onChange={(e) => {
          setNewUserCount(e.target.value);
       }}/>

      <button onClick={createUser}> Create Username</button>

      {users.map((user) => { 
        return(
          <div>
            {" "}
            <h1>username: {user.username}</h1>
            <h1>usercount: {user.usercount}</h1>
            <button onClick={() => {updateUser(user.id, user.usercount)}}> {""} Add usercount</button>
            <button onClick={() => {deleteUser(user.id)}}> {""} delete username </button>
          </div>
        );
      })}
 
    </div>
  );
}

export default App;
