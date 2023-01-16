const Filmas = ({filmas, deleteFilm}) => {
  return (
      <div>
        <button onClick={() => deleteFilm(filmas.id)}><i className="fa fa-close"></i></button>
        <img src={filmas.image} alt="filmas" />
        <h1>{filmas.name}</h1>
        <p>{filmas.metai}</p>
        <p>{filmas.zanras}</p>
        <p>{filmas.arMatytas ? 'Matytas' : 'Nematytas'}</p>
      </div>

  );
}

export default Filmas;
