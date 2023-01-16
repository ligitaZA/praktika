const Kalnas = ({kalnas}) => {
  return (
    <div>
      <h1>{kalnas.pavadinimas}</h1>
      <p>randasi: {kalnas.lokacija}</p>
      <p>aukštis: {kalnas.aukstis}</p>
      <p>{kalnas.arEsuIveikes ? 'esu' : 'nesu'}</p>
    </div>
  );
}

export default Kalnas;