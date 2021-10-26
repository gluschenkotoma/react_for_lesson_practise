import ReactDOM from "react-dom";
import App from "../App";
import paintings from "./paintings.json";

// ВСЕГДА 1 параметр PROPS
function Painting(props) {
  const { url, title, profileUrl, author, price } = props;
  console.log(props);
  return (
    <div>
      <img src={url} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Автор: <a href={profileUrl}>{author}</a>
      </p>
      <p>Цена:{price} кредитов</p>
      <p>Доступность: заканчивается или есть в наличии</p>
      <button type="button">Добавить в корзину</button>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));

// const painting = paintings[1];
{
  /* <Painting
    url={painting.url}
    title={painting.title}
    author={painting.author.tag}
    profileUrl={painting.author.url}
    price={painting.price}
  /> */
}
