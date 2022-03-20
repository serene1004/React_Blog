import React, { useState } from 'react';
import './css/reset.css';
import './css/App.css';

function App() {
  let [studyList, studyListFn] = useState(['JavaScript', 'React', 'Vue'])
  let [like, likeFn] = useState(0);

  function changeList () {
    // 1. 일단 기존 state 사본을 만들고
    // 2. 사본에 수정사항을 반영하고
    // 3. 변경함수()에 집어넣기
    let newArray = [...studyList];
    newArray[0] = 'Hello World'
    studyListFn(newArray);
  }
  
  return (
    <div className="App">
      <header className="header">
        <div className="container">
          <h1>👻</h1>
        </div>
      </header>
      <main className="main">
        <div className="container">
          <ul className="study-list">
            <li className="study-list__item">
              <h3>{studyList[0]}</h3>
              <p>3월 14일</p>
              <div className="study-list__btn-wrap">
                <button type="button" className="study-list__btn" onClick={ ()=>{likeFn(like+1)} }>👍</button>
                <span>{like}</span>
              </div>
            </li>
            <li className="study-list__item">
              <h3>{studyList[1]}</h3>
              <p>3월 15일</p>
            </li>
            <li className="study-list__item">
              <h3>{studyList[2]}</h3>
              <p>3월 16일</p>
            </li>
          </ul>
          <div className="btn-wrap">
            <button type="button" className="change-btn" onClick={changeList}>바꿔!</button>
          </div>
          <Modal/>
        </div>
      </main>
    </div>
  );
}

// component를 만들어서 사용하면 좋은것들.
// 반복적으로 사용하는 HTML덩어리들
// 자주 변경되는 HTMl UI들
// 다른페이지를 만들때도 컴포넌트로 만듬

// component를 많이 만들었을때 단점
// state쓸때 복잡해짐
// 상위 component에서 만든 state를 사용하려면 props문법을 이용해야함
function Modal () {
  return (
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <div>내용</div>
    </div>
  )
}

export default App;