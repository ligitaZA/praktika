const Card = ({data}) => {
  return (
    <div className="card">
      <img src={data.src} alt="Card" />
      <p>{data.info}</p>
    </div>
  );
}
export default Card;