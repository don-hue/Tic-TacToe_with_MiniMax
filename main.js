//########################Global Variables########################|
let currentTurn="Player";                                       //|
let CurrentDifficulty="Easy";                                   //|
let GameResult=null;                                            //|
//################################################################|




//########################GameBoard###############################|
const GameBoard = ()=> {                                        //|
    const NodeBoard=document.querySelectorAll('.line');         //|
    const Grid=document.querySelector('.grid')                  //|
    const Difficulty=document.querySelector('.buttons');        //|
    const selectedDifficulty=document.getElementById('selected')//|
    const Restart=document.querySelector('.restart');           //|
                                                                //|
    const createBoard= (e)=>{                                   //|
        ArrayBoard.push(e.innerHTML);                           //|
    }                                                           //|
                                                                //|
    const availableMove=()=>{                                   //|
        for(let i=0;i<ArrayBoard.length;i++){                   //|
            if (ArrayBoard[i]==''){                             //|
                free.push(i);                                   //|
            }                                                   //|
        }                                                       //|
    }                                                           //|
    let free=[];                                                //|
    let ArrayBoard = [];                                        //|
    NodeBoard.forEach(createBoard);                             //|
    availableMove();                                            //|
                                                                //|
    return {ArrayBoard, NodeBoard, Difficulty, Grid,            //|
        selectedDifficulty, Restart,free}                       //|
}                                                               //|
//##############################################################//|




//########################Set Difficulty#########################|
const setDifficulty=(e)=>{                                     //|
    let board=GameBoard();                                     //|
    CurrentDifficulty=board.selectedDifficulty.innerHTML;      //|
    if(e.target.id !='selected'){                              //|
        board.selectedDifficulty.id=''                         //|
        e.target.id='selected';                                //|
        CurrentDifficulty=e.target.innerHTML;                  //|
        restart();                                             //|
    }                                                          //|
};                                                             //|
//###############################################################|




//##########################Restart##############################|
const restart =()=>{                                           //|
    let board=GameBoard();                                     //|
                                                               //|
    for(i=0;i<board.ArrayBoard.length; i++){                   //|
        let temp=document.getElementById(i);                   //|
        temp.innerHTML="";                                     //|
    }                                                          //|
    board.ArrayBoard=[]                                        //|
    currentTurn='Player';                                      //|
    GameResult=null                                            //|
}                                                              //|
//###############################################################|




//###########################CheckWinning######################//|
const checkWinning=(input, terminator)=>{                                       //|
    let horizontalWin=[0,3,6];
    let verticalWin=[0,1,2];
    let diagonalWin=[0,2];
    let score=null
        
//--------------------Horizontal Win-------------------------------
//#################################################################
    if (input[horizontalWin[0]]=="x" 
    && input[horizontalWin[0]+1]=="x" 
    && input[horizontalWin[0]+2]=="x") {
        GameResult="Player Wins"
        score=100
    }

    if (input[horizontalWin[0]]=="o" 
    && input[horizontalWin[0]+1]=="o" 
    && input[horizontalWin[0]+2]=="o"){
    GameResult="AI Wins"
    score=-100
    }

    if (input[horizontalWin[1]]=="x" 
    && input[horizontalWin[1]+1]=="x" 
    && input[horizontalWin[1]+2]=="x"){
        GameResult="Player Wins"
        score=100
    }

    if (input[horizontalWin[1]]=="o" 
    && input[horizontalWin[1]+1]=="o" 
    && GameBoard().ArrayBoard[horizontalWin[1]+2]=="o"){
    GameResult="AI Wins"
    score=-100
    }

    if (input[horizontalWin[2]]=="x" 
    && input[horizontalWin[2]+1]=="x" 
    && input[horizontalWin[2]+2]=="x"){
        GameResult="Player Wins"
        score=100
    }

    if (input[horizontalWin[2]]=="o" 
    && input[horizontalWin[2]+1]=="o" 
    && input[horizontalWin[2]+2]=="o"){
    GameResult="AI Wins"
    score=-100
    }

//--------------------Vertical Win----------------------------------
//#################################################################
    if (input[verticalWin[0]]=="x" 
    && input[verticalWin[0]+3]=="x" 
    && input[verticalWin[0]+6]=="x"){
        GameResult="Player Wins"
        score=100
    }

    if (input[verticalWin[0]]=="o" 
    && input[verticalWin[0]+3]=="o" 
    && input[verticalWin[0]+6]=="o"){
        GameResult="AI Wins"
        score=-100
    }

    if (input[verticalWin[1]]=="x" 
    && input[verticalWin[1]+3]=="x" 
    && input[verticalWin[1]+6]=="x"){
        GameResult="Player Wins"
        score=100
    }

    if (input[verticalWin[1]]=="o" 
    && input[verticalWin[1]+3]=="o" 
    && input[verticalWin[1]+6]=="o"){
        GameResult="AI Wins"
        score=-100
    }

    if (input[verticalWin[2]]=="x" 
    && input[verticalWin[2]+3]=="x" 
    && input[verticalWin[2]+6] =="x"){
        GameResult="Player Wins"
        score=100
    }

    if (input[verticalWin[2]]=="o" 
    && input[verticalWin[2]+3]=="o" 
    && input[verticalWin[2]+6]=="o"){
        GameResult="AI Wins"
        score=-100
            }
//--------------------Diagonal Win----------------------------------
//#################################################################
    if (input[diagonalWin[0]]=="x" 
    && input[diagonalWin[0]+4]=="x" 
    && input[diagonalWin[0]+8]=="x"){
        GameResult="Player Wins";
        score=100
    }

    if (input[diagonalWin[0]]=="o" 
    && input[diagonalWin[0]+4]=="o" 
    && input[diagonalWin[0]+8]=="o"){
        GameResult="AI Wins";
        score -100;
    }

    if (input[diagonalWin[1]]=="x" 
    && input[diagonalWin[1]+2]=="x" 
    && input[diagonalWin[1]+4]=="x"){
        GameResult="Player Wins"
        score = 100
    }

    if (input[diagonalWin[1]]=="o" 
    && input[diagonalWin[1]+2]=="o" 
    && input[diagonalWin[1]+4]=="o"){
        GameResult="AI Wins"
        score=-100
    }

    if(terminator.length==0 && score==null){
        GameResult="It's a Tie";
        score=0
    }

    return {score}
    

}                                                              //|
//#############################################################//|



//###########################Player############################//|
const Player = (e)=>{                                          //|
    let board=GameBoard();                                     //|
                                                               //|
                                                               //|
    if(board.ArrayBoard[e.target.id]==""){                     //|
        e.target.innerHTML="x";                                //|
        currentTurn="AI";                                      //|
    }                                                          //|
                                                               //|
}                                                              //|
//###############################################################|




//##########################AI##############################################|
const AIModule =()=>{                                                     //|
                                                                          //|
    //################################################|                   //|
    const theDecision=()=>{                         //|                   //|
        let level=Math.floor(Math.random()*(100+1));

        if (CurrentDifficulty=="Easy"){
            let AIThreshold=70;

            if(level<AIThreshold){
                AI().randomDecision()
            }

            else {
                AI().AiMove()
            }
        }

        if (CurrentDifficulty=='Medium'){
            let AIThreshold=40;

            if(level<AIThreshold){
                AI().randomDecision()
            }

            else {
                AI().AiMove()
            }


        }

        if (CurrentDifficulty=='Difficult'){
            let AIThreshold=20;

            if(level<AIThreshold){
                AI().randomDecision()
            }

            else {
                AI().AiMove()
            }
        }

        if (CurrentDifficulty=='Unbeatable'){
            AI().AiMove()
        }
    }                                               //|                   //|
    //################################################|                   //|
                                                                          //|
                                                                          //|
    //############################################################|       //|
    const AI =()=>{                                             //|       //|
                                                                //|       //|
                                                                //|       //|
                                                                //|       //|
        //#############################################| //|      |       //|
        const randomDecision=()=>{                   //| //|      |       //|
            let board=GameBoard()                    //|     
            let minRange=0;                          //|
            let maxRange=board.free.length;          //|
            let number=0;                            //|
                                                     //|
            const getRandomInt=(min, max)=> {        //|
                min = Math.ceil(minRange);           //|
                max = Math.floor(maxRange-1);        //|
                return Math.floor(Math.random() *    //|
                (max - min +1)) + min;               //|
            }                                        //|
                                                     //|
            if(board.free.length!=0){                //|
                number=getRandomInt(minRange,maxRange);
                                                     //|
            let temp=document.                       //|
                getElementById(board.free[number]);  //|
            temp.innerHTML="o";                      //| 
            currentTurn="Player"                     //|
            }                                        //|
        }                                            //| //|      |       //|
        //#############################################| //|      |       //|
                                                                //|       //|
                                                                //|       //|
                                                                //|       //|
                                                                //|       //|
                                                                //|       //|
        //####################################################|   |       //|
        const AiMove=()=>{                                  //|   |       //|
            let boardCopy=GameBoard().ArrayBoard;
            let bestScore=Infinity;
            let bestMove='test';
            let free=[];


            const availableMove=()=>{                                   //|
                for(let i=0;i<boardCopy.length;i++){                   //|
                    if (boardCopy[i]==''){                             //|
                        free.push(i);                                   //|
                    }                                                   //|
                }                                                       //|
            }                                                           //|

            const miniMax=(depth, isMaximizing)=>{
                checkWinning(boardCopy,free);
                let check=checkWinning(boardCopy,free).score
                GameResult=null;

                if(check==100){
                    let bestScore
                    free=[]
                    return bestScore=100-depth;

                }

                if(check== -100){
                    let bestScore
                    free=[]
                    return bestScore=-100+depth;
                }
                
                if(check== 0){
                    let bestScore
                    free=[]
                    return bestScore=0;
                }
                
                free=[]

                if(isMaximizing){
                    let bestScore=-Infinity
                    for (let i=0; i<boardCopy.length;i++){
                        if (boardCopy[i]==''){
                            boardCopy[i]='x';
                            availableMove();
                            let score=miniMax(depth+1,false);
                            boardCopy[i]=''
                            availableMove();
                            if(score>bestScore){
                                bestScore=score
                            }
                        }
                    }
                    return bestScore
                }

                else {
                    let bestScore=Infinity
                    for (let i=0; i<boardCopy.length;i++){
                        if (boardCopy[i]==''){
                            boardCopy[i]='o';
                            availableMove();
                            let score=miniMax(depth+1,true);
                            boardCopy[i]='';
                            availableMove()
                            if(score<bestScore){
                                bestScore=score;
                            }
                        }
                    }
                    return bestScore 
                }
            }

            for (let i=0;i<boardCopy.length;i++){
                if (boardCopy[i]==''){
                    boardCopy[i]='o';
                    availableMove();
                    let score =miniMax(0,true);
                    boardCopy[i]=''
                    availableMove();
                    if(score<bestScore){
                        bestScore=score;
                        bestMove=i;
                    }
                }
            }

            if (free.length!=0){
            let temp=document.getElementById(bestMove);
            temp.innerHTML="o";
            currentTurn="Player";
            
            let board=GameBoard().ArrayBoard
            let end=GameBoard().free;
            checkWinning(board,end);

            boardCopy=[];
            free=[];
            bestScore=Infinity
            }
            
        
        }                                                   //|   |       //|
        //####################################################|   |       //|
                                                                //|       //|
                                                                //|       //|
                                                                //|       //|
                                                                //|       //|
                                                                //|       //|
        return {randomDecision, AiMove}                         //|       //|
    }                                                           //|       //|
    //############################################################|       //|
                                                                          //|
    return{AI, theDecision}                                               //|
    }                                                                     //|
//##########################################################################|
                                                                          

//###########################GamePlay#############################|
const GamePlay=(e)=>{        
                                                                //|
    if(GameResult==null){
        if(currentTurn=="Player"){
            Player(e);
            let board=GameBoard().ArrayBoard
            let end=GameBoard().free;
            checkWinning(board,end);
            AIModule().theDecision();
            checkWinning(board, end);
            
        }
    }
    if(GameBoard().free.length==0 || GameResult!=null){
        alert(GameResult);
    }

    }                                                           //|
//################################################################|
    

//#########################Event Listener#########################|
GameBoard().Grid.addEventListener('click', GamePlay);           //|
GameBoard().Difficulty.addEventListener('click', setDifficulty);//|
GameBoard().Restart.addEventListener('click', restart);         //|
//################################################################|