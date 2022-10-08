import Row from "./Row";
import "./Chessboard.css";

const arr = [
  [0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0]
];

function ChessBoard() {
  const newArr = arr.map((row, i) => {
    return <Row row={row} key={i} />;
  });
  console.log(newArr);
  return <div className="chessbrd">{newArr}</div>;
}

export default ChessBoard;