import React from 'react';
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

                { answerText: "Mother", isCorrect: false },
                { answerText: "Father", isCorrect: false },
                { answerText: "Brother", isCorrect: false },
                { answerText: "Love", isCorrect: false },
                { answerText: "Allah", isCorrect: true },

            ]


        },
    ]

    console.log(Questions);

    return (
        <>
            <div className="container ">
                <div className="row">

                    <div className="Homecontainer text-light ">
                        <div className="col-sm-12 col-md-6 leftSection">


                            <div className="contentSection ">

                                <h3> Question 1/{Questions.length} </h3>
                            </div>
                            <div className="questionSection">

                                <p>{Questions[0].questionText}.</p>
                            </div>

                        </div>


                        <div className="col-sm-12 col-md-6 rightSection">
                            <div className="answearSection">
                                <ul>

                                    {Questions[0].answerOptions.map((answer)=><li> <input id="answearSectionForm" type="text" disabled value={answer.answerText} /> </li> )}
                                    
                                </ul>
                            </div>


                        </div>



                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;