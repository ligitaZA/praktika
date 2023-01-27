import { createContext, useState, useEffect } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {

  const [loggedInUser, setLoggedInUser] = useState();

    const [users, setUsers] = useState([]);
  //   {
  //     id: 0,
  //     level: 'admin',
  //     isBanned: false,
  //     userName: 'PetrasDidysis',
  //     password: '123',
  //     avatar: 'https://cdn-icons-png.flaticon.com/512/3305/3305427.png'
  //   }, {
  //     id: 1,
  //     level: 'user',
  //     isBanned: false,
  //     userName: 'Petriukas',
  //     password: '456',
  //     avatar: 'https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_1280.png'
  //   }, {
  //     id: 2,
  //     level: 'user',
  //     isBanned: false,
  //     userName: 'Jonukas',
  //     password: '789',
  //     avatar: 'https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png'
  //   }
  // ]);

  useEffect(() => {
    fetch('http://localhost:5000/users')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        setUsers(data);
      }).catch(error => {
        console.error('Error:', error);
    });
  }, []);

  //pridedamas naujas vartotojas i masyva
  const addNewUser = (newUser) => {
    setUsers([...users, newUser]);
  }

  //funkcija ban ar unban, naudojamas map, palyginamas kiekvieno vartotojo id su nurodytu id, jei vartotojo id sutampa, jo busena yra pakeiciama
  const banOrUnbanUser = (id) => {
    setUsers(users.map(user => user.id.toString() === id.toString() ? {...user, isBanned:!user.isBanned} : user)); 
    console.log(banOrUnbanUser)
  }

  return (
    <UserContext.Provider
      value={{
        users,
        addNewUser,
        banOrUnbanUser,
        loggedInUser,
        setLoggedInUser
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export { UserProvider };
export default UserContext;