import { useState, useEffect } from "react";

const Header = () => {

  const [markedCount, setClickCount] = useState(0);

  useEffect(() => {
    console.log('1');
    return () => {
      console.log('2');
    }
  }, [setClickCount]);

  return (
    <>
      <nav>
        <img src="https://cdn-icons-png.flaticon.com/512/1404/1404835.png" alt="logo" />
        <div>
          <i className="fa fa-user-o"></i>
          <p>Mauricijus</p>
          <p>Pažymėta : {markedCount}</p>
        </div>
      </nav>
    </>
  );
}

export default Header; 