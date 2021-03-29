import React from 'react';
import { useState } from 'react';
import './home.css'




const Home = () => {

    

    const Questions = [
        {
            questionText: "Who is My fav player ?",
            answerOptions: [


                { answerText: "Leo Messi", isCorrect: true },
                { answerText: "CR7", isCorrect: false },
                { answerText: "M.Salah", isCorrect: false },
                { answerText: "Paul Pogba", isCorrect: false },


            ]


        },{
            questionText: "what is your fav food",
            answerOptions: [


                { answerText: "Rice", isCorrect: false },
                { answerText: "Chickn", isCorrect: false },
                { answerText: "Burger", isCorrect: true },
                { answerText: "Bread", isCorrect: false }


            ]


        },{
            questionText: "Who do you love most",
            answerOptions: [


                { answerText: "Father", isCorrect: false },
                { answerText: "Mother", isCorrect: true },
                { answerText: "sister", isCorrect: false },
                { answerText: "Brother", isCorrect: false }


            ]


        },{
            questionText: "wh do you cry for ?",
            answerOptions: [
                
                { answerText: "Allah", isCorrect: true },
                { answerText: "Mother", isCorrect: false },
                { answerText: "Father", isCorrect: false },
                { answerText: "Love", isCorrect: false },


            ]


        },
    ]

    const [score, settScore] = useState(0)
    const [currentQuestion, setCurrentQuestion]  = useState(0);
    const [showScore, setScore] = useState(false);

     const clickHandlar = (isCorrect) =>{

        if(isCorrect ===  true){
            alert("this ans is true")
            settScore( score + 1 )
        }

        const nextQuestion = currentQuestion +1 ;

        if(nextQuestion < Questions.length){

            setCurrentQuestion(nextQuestion)
            
        } else{
            setScore(true)
        }

      
       
    
    } 

         let OutPut = null;
        
        if(showScore === true){

            OutPut = (

                <div className="scoreSection">

                      <p> Your Score is {score}  Out of  {Questions.length}

                      </p>

                </div>
            )

        } else{

            OutPut = (

                <> 

                <div className="col-sm-12 col-md-6 leftSection">
        
                <div className="contentSection ">

                    <h3> Question {currentQuestion + 1}/{Questions.length} </h3>
                </div>
                <div className="questionSection">

                    <p>{Questions[currentQuestion].questionText}.</p>
                </div>

            </div>


            <div className="col-sm-12 col-md-6 rightSection">
                <div className="answearSection">
                    <ul >

                        {Questions[currentQuestion].answerOptions.map((answer)=> <button onClick={()=>clickHandlar(answer.isCorrect)}  className="btn btn-lg btn-primary" id="answearSectionForm">  {answer.answerText} </button>  )}
                        
                    </ul>
                </div>


            </div>

            </>
            )
        }

     



    return (

  
        <>
            <div className="container ">
                <div className="row">

                    <div className="Homecontainer text-light ">
 

                        {OutPut}


                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;