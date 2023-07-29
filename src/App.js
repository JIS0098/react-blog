
import './App.css';
import { useState } from 'react';

function App() {
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학'])
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title,setTitle] = useState(0);


  return (
    <div className="App">
      <div className='black-nav'>
        <h4>블로그</h4>
      </div>


      {글제목.map((a, i) => {
        return (
          <div className='list' key={i}>
            <h4 onClick={() => { setModal(true); setTitle(i)}}>{글제목[i]}</h4>
            <span onClick={() => {
              let copy = [...따봉]
              copy[i] = copy[i] + 1
              따봉변경(copy)
            }}>👍</span>{따봉[i]}
            <p>2월 17일 발행</p>
          </div>
        )
      })}

      {
        modal == true ? <Modal title={title} 글제목={글제목} /> : null
      }
    </div>
  );


  function Modal(props) {
    return (
      <div className='modal'>
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
    )
  }
}


export default App;
