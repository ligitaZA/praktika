import Article from "./Article"

const Articles = ({ data }) => {

  return (
    <>
      <div className="articles">
        {
          data.map((item, index) => {
            return (
              <Article
                data={item}
                key={index}
                
              />
            )
          })
        }
      </div>
    </>
  );
}

export default Articles;