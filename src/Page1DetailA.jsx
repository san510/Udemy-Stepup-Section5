import { useLocation, useHistory } from "react-router-dom";

export const Page1DetailA = () => {
  const { state } = useLocation();
  console.log(state);

  const history = useHistory();

  const onClickBack = () => {
    history.goBack();
  };

  const onClickDetailB = () => {
    history.push("/page1/detailB");
  };

  return (
    <div>
      <h1>Page1DetailAページです</h1>
      <button onClick={onClickBack}>戻る</button>
      <br />
      <button onClick={onClickDetailB}>DetailB</button>
    </div>
  );
};
