const Asmuo = ({data, keistiStatusa}) => {

  const handleStatusoKeitimas = () => {
    keistiStatusa(data.id)
  }
  return ( 
    <>
    <div>
      <h1>{data.vardas} {data.pavarde}</h1>
    <p>šis asmuo </p>
    <button
    onClick={() => keistiStatusa}
    ></button>
    </div>

    </>


   );
}
 
export default Asmuo;{data, keistiStatusa}