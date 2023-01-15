import Article from "./Article"

const Articles = ({ data, setClickCount }) => {

  return (
    <>
      <div className="articles">
        {
          data.map((item, index) => {
            return (
              <Article
                data={item}
                key={index}
                setClickCount={setClickCount}
              />
            )
          })
        }
      </div>
    </>
  );
}

export default Articles;