import Input from "./Input";
import Button from "./Button";

const UserLogin = () => {
  return ( 
    <>
    <h1>User Login</h1>
    <Input 
        text="Vardas"
        type="text"
      />
      <Button 
        text="Pateikti"
      />
    </>
   );
}
 
export default UserLogin;