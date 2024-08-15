import './App.css';
import Box from './component/Box';
import {useState} from "react"

// 1. 박스 2개 (타이틀, 사진, 결과)
// 2. 가위 바위 보 버튼
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보임
// 4. 컴퓨터는 랜덤하게 아이템 선택
// 5. 3, 4의 결과로 누가 이겼는지 승패 가림
// 6. 승패 결과에 따라 테두리 색이 바뀜 (이기면 초록, 지면 빨강, 비기면 검정)

const choice = {
  rock:{
    name: "Rock",
    img: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FpSJwo%2FbtqXJV1lACE%2Fnx5XrxkCLWXh9UsnoS8vbK%2Fimg.png"
  },
  scissors: {
    name: "Scissors",
    img: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FHfURw%2FbtqXKvOTNWK%2FgWTwPXEg9QzSV0ilOuwuak%2Fimg.png"
  },
  paper:{
    name: "Paper",
    img: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbmjB2s%2FbtqXHhp6kpG%2FTH14W4U612SxKo9uuR2sB0%2Fimg.png"
  }
}

function App() {
  const [userSelect, setUserSelect] = useState(null)
  const [computerSelect, setComputerSelect] = useState(null)
  const [result, setResult] = useState("")

  const play = (userChoice) => {
    setUserSelect(choice[userChoice])
    const computerChoice = randomChoice()
    setComputerSelect(computerChoice)
    setResult(judgement(choice[userChoice], computerChoice))
  }

  const judgement = (user, computer) => {
    // user == computer tie
    // user == rock, computer == scissors user win
    // user == rock, computer == paper user lose
    // user == scissors, computer == paper user win
    // user == scissors, computer == rock user lose
    // user == paper, computer == rock user win
    // user == paper, computer == scissors user lose

    if(user.name === computer.name) return "tie"
    else if(user.name === "Rock") return computer.name === "Scissors" ? "win" : "lose"
    else if(user.name === "Scissors") return computer.name === "Paper" ? "win" : "lose"
    else if(user.name === "Paper") return computer.name === "Rock" ? "win" : "lose"
  }

  const randomChoice = () => {
    let itemArray = Object.keys(choice);  // Object.keys는 객체의 키 값만 뽑아서 배열로 만들어주는 함수
    let randomItem = Math.floor(Math.random() * itemArray.length)
    let final = itemArray[randomItem]
    return choice[final]
  }

  return (
    <div>
      <div className='main'>
        <h1>Rock Scissors Paper Game</h1>
      </div>
      <div className='main'>
        <Box title="You" item={userSelect} result={result}/>
        <Box title="Computer" item={computerSelect} result={result}/>
      </div>
      <div className='main'>
        <div className="d-grid gap-2 col-7 mx-auto">
          <button onClick={()=>play("scissors")} type="button" class="btn btn-outline-primary">가위</button>
          <button onClick={()=>play("rock")} type="button" class="btn btn-outline-primary">바위</button>
          <button onClick={()=>play("paper")} type="button" class="btn btn-outline-primary">보</button>
        </div>
      </div>
    </div>
  );
}

export default App;
