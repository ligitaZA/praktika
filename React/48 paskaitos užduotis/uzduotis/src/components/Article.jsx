import { useState, useEffect } from "react";

const Article = ({ data, setClickCount }) => {

  const [pazymetasStraipsnis, setPazymetasStraipsnis] = useState(false);

  const handlePazymetasStraipsnis = () => {
    setPazymetasStraipsnis(!pazymetasStraipsnis);
    setClickCount(prevCount => prevCount + 1);
  }

  useEffect(() => {
    console.log('pazymetas straipsnis');
  }, [pazymetasStraipsnis]);

  return (
    <>
      <div className='article'>
        <div className={`check ${pazymetasStraipsnis ? 'selected' : ''}`}>
          <p>Pažymėti</p>
          <button onClick={handlePazymetasStraipsnis} className={pazymetasStraipsnis ? 'selected' : ''}><i className='fa fa-check'></i></button>
        </div>

        <div className="content">
          <img src={data.src} alt="article" />
          <h2>{data.name}</h2>
          <p>{data.paragraph1}</p>
          <p>{data.paragraph2}</p>
          <p>{data.paragraph3}</p>
        </div>
      </div>
    </>
  );
}

export default Article;