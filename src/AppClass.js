import React, { Component } from 'react'
import './App.css';
import BoxClass from "./component/BoxClass";

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

export default class AppClass extends Component {
    constructor(){
        super()
        this.state = {
            userSelect: null,
            computerSelect: null,
            result: ""
        }
    }

    play = (userChoice) => {
        let computerChoice = this.randomChoice()
        this.setState({
            userSelect: choice[userChoice],
            computerSelect: computerChoice,
            result: this.judgement(choice[userChoice], computerChoice)
        })
      }

    randomChoice = () => {
        let itemArray = Object.keys(choice);  // Object.keys는 객체의 키 값만 뽑아서 배열로 만들어주는 함수
        let randomItem = Math.floor(Math.random() * itemArray.length)
        let final = itemArray[randomItem]
        return choice[final]
      }

      judgement = (user, computer) => {
        if(user.name === computer.name) return "tie"
        else if(user.name === "Rock") return computer.name === "Scissors" ? "win" : "lose"
        else if(user.name === "Scissors") return computer.name === "Paper" ? "win" : "lose"
        else if(user.name === "Paper") return computer.name === "Rock" ? "win" : "lose"
      }

  render() {
    return (
        <div>
            <div className='main'>
            <h1>Rock Scissors Paper Game</h1>
            </div>
            <div className='main'>
            <BoxClass title="You" item={this.state.userSelect} result={this.state.result}/>
            <BoxClass title="Computer" item={this.state.computerSelect} result={this.state.result}/>
            </div>
            <div className='main'>
            <div className="d-grid gap-2 col-7 mx-auto">
                <button onClick={()=>this.play("scissors")} type="button" class="btn btn-outline-primary">가위</button>
                <button onClick={()=>this.play("rock")} type="button" class="btn btn-outline-primary">바위</button>
                <button onClick={()=>this.play("paper")} type="button" class="btn btn-outline-primary">보</button>
            </div>
            </div>
        </div>
    )
  }
}
