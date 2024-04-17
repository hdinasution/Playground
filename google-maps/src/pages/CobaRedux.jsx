import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../redux/actions/counterSlice";

const CobaRedux = () => {
  const dispatch = useDispatch(); // untuk mengirimkan action pada redux
  const sum = useSelector((state) => state.counter.count); // untuk mengambil state tertentu pada redux

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="m-5">Coba Redux</h1>
          </div>
        </div>
        <div className="d-flex justify-align-center m-5">
          <button
            className="btn btn-primary"
            type="button"
            onClick={handleDecrement}
          >
            <strong>-</strong>
          </button>
          <h2 className="m-3">{sum}</h2>
          <button
            className="btn btn-primary"
            type="button"
            onClick={handleIncrement}
          >
            <strong>+</strong>
          </button>
        </div>
      </div>
    </>
  );
};

export default CobaRedux;
