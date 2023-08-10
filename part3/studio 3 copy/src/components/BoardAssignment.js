import { useState } from 'react';

export default function BoardAssignment () {
   const boards = [
      {
         "label": "board1",
         "value": "squareboard"
      }, 
      {
         "label": "board2",
         "value": "roundboard"
      }, 
      {
         "label": "board3",
         "value": "whiteboard"
      }
   ];

   let optionBoards = boards.map((board, index) => {
      return <option key={index} value={board.value}>{board.label}</option>

   });

   function SetName() {
      const [boardName, setBoardName] = useState("No boards yet!");
   
   
   const handleChange = (event) => {
      setBoardName (boardName = event.target.value);

   }

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
         {optionBoards}
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
   }
}