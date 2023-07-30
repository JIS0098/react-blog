
import './App.css';
import { useState } from 'react';

function App() {
  let [글제목, 글제목변경] = useState([])
  let [따봉, 따봉변경] = useState([]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값 , 입력값변경] = useState('');
  let [날짜 , 날짜변경] = useState('');



  return (
    <div className="App">
      <div className='black-nav'>
        <h4>블로그</h4>
      </div>


      {글제목.map((a, i) => {
        return (
          <div className='list' key={i}>
            <div className='post'>
            <h4 onClick={() => { setModal(true); setTitle(i) }}>{글제목[i]}
            <span onClick={(e) => {
              e.stopPropagation();
              let count = [...따봉]
              count[i]+=1
              따봉변경(count);
            }}>👍</span>{따봉[i]}
            </h4>
            <p>{날짜} 발행</p>
            </div>
            <button className='delete' onClick={(e)=>{
              let copy = [...글제목]
              copy.splice(i,1)
              글제목변경(copy);
            }}>삭제</button>
          </div>
        )
      })}

    <input type='' onChange={(e)=>{
      입력값변경(e.target.value);
    }}/> 
    <button onClick={()=>{
      if(입력값==''){
        alert('빈칸을 입력해주세요')
      }else{
        let date = new Date();
        let copy = [...글제목]
        let count = [...따봉]
        copy.unshift(입력값)
        count.unshift(0);
        글제목변경(copy);
        따봉변경(count);
        날짜변경(`${date.getMonth()+1}월 ${date.getDate()}일`);
      }
    }} >글작성</button>   
      {
        modal == true ? <Modal 날짜={날짜} title={title} 글제목={글제목} /> : null
      }
    </div>
  );

  function Modal(props) {
    return (
      <div className='modal'>
        <h4>{props.글제목[props.title]}</h4>
        <p>{props.날짜}</p>
        <p>상세내용</p>
      </div>
    )
  }
}


export default App;
