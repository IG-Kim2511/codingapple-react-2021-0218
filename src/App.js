/* eslint-disable */
{/* 2 */}

import React,{useState} from 'react';
import './App.css';

function App() {
  
  let [title, setTitle] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let posts = '강남 고기 맛집';

    {/* 1 */}
  const [thumb, setThumb] = useState(0);

  {/* 2 */}
  // function titleChange(){
  //   var newArray = [...title];
  //   newArray[0] = 'girl 코트 추천';
  //   setTitle(newArray);
  // }


  {/* 5 */}
  const [modalVar, setmodalVar] = useState(false);


  return (
    <div className="App">
      <div className="black-nav">
        <div>Shoping shoes</div>
      </div>

      {/* 2 */}
      {/* <button onClick={titleChange}>btn</button> */}

       {/* 4 */}
       {/* 5 */}
       <button onClick={()=>{ setmodalVar(true)}}>modal show</button>
      {
        modalVar ===true
        ?<Modal></Modal>
        :null        
      }

      {/* 6 */}
      {
        title.map(function(a,i){
          return <div className="list">
          <h3 >{a}</h3>
          <button onClick={()=>{setThumb(thumb+1)}}>👍</button> {thumb}
          <p>Feb 20</p>        
        </div>   
        })
      }


    </div>
  );
}

{/* 4 */}
function Modal(){
  return(
    <div className="modal">
    <h2>제목</h2>
    <p>날짜</p>
    <p>상세내용</p>
  </div>

  )
}

export default App;

