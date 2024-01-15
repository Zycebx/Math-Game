player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");

player1_score=0;
player2_score=0;

document.getElementById("player1_name").innerHTML=player1_name+":";
document.getElementById("player2_name").innerHTML=player2_name+":";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="Question Turn - "+player1_name;
document.getElementById("player_answer").innerHTML="Answer Turn - "+player2_name;

function send()
{
    n1=document.getElementById("n1").value;
n1=Number(n1);

n2=document.getElementById("n2").value;
n2=Number(n2);
actual_answer=n1*n2;


    qw="<h4>"+n1 + " X "+ n2 +"</h4>";
    ibox="<br>Answer : <input type='text' id='input_check_box'>";
    cbtn="<br><br><button class='btn-grad3' onclick='check()'>Check</button>";
    row=qw+ibox+cbtn;
    document.getElementById("output").innerHTML=row;
    document.getElementById("n1").value="";
    document.getElementById("n2").value="";


}
question_turn="player1";
answer_turn="player2";

function check()
{
    get_answer=document.getElementById("input_check_box").value;
    answer=Number(get_answer)
    if(answer==actual_answer)
    {

        if(answer_turn=="player1")
        {
            player1_score+=1;
            document.getElementById("player1_score").innerHTML=player1_score;
        }
        else
        {
        player2_score+=1;
        document.getElementById("player2_score").innerHTML=player2_score;
        }

    }




    if(question_turn=="player1")
    {
        question_turn="player2"
       document.getElementById("player_question").innerHTML="Question Turn- "+player2_name; 
    }
    else
    {
        question_turn="player1"
       document.getElementById("player_question").innerHTML="Question Turn- "+player1_name; 
    }




    if(answer_turn=="player1")
    {
        answer_turn="player2"
       document.getElementById("player_answer").innerHTML="Answer Turn- "+player2_name; 
    }
    else
    {
        answer_turn="player1"
       document.getElementById("player_answer").innerHTML="Answer Turn- "+player1_name; 
    }

document.getElementById("output").innerHTML="";



}
