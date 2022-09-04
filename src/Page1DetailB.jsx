import { useHistory } from "react-router-dom";

export const Page1DetailB = () => {
  const history = useHistory();

  const onClickBack = () => {
    history.goBack();
  };

  return (
    <div>
      <h1>Page1DetailBページです</h1>
      <button onClick={onClickBack}>戻る</button>
    </div>
  );
};
