import Board from "./Board";

import '../styles/board-list.css'
function BoardList() {
  const statuses = ["todo", "inprogress", "done"]

  return ( 
    <div className="board-list">
      {statuses.map((status, idx) => (
        <Board key={idx} status={status} />
      ))}
    </div>
   );
}

export default BoardList;