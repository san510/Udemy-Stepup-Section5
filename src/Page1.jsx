import { Link } from "react-router-dom";

export const Page1 = () => {
  const arr = [...Array(100).keys()];
  console.log(arr);

  return (
    <div>
      <h1>Page1ページです</h1>
      <Link
        to={{
          pathname: "/page1/detailA",
          state: { userId: 100, data: arr, isAdmin: false }
        }}
      >
        DetailA
      </Link>
      <br />
      <Link to="/page1/detailB">DetailB</Link>
    </div>
  );
};
