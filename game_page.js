player1_name = localStorage.getItem("p1key");
player2_name = localStorage.getItem("p2key");
document.getElementById("player1_name").innerHTML = player1_name;
document.getElementById("player2_name").innerHTML = player2_name;
document.getElementById("q_turn").innerHTML = "Question turn: " + player1_name;
document.getElementById("a_turn").innerHTML = "Answer turn" + player2_name;
player1_score = 0;
player2_score = 0;
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

function send() {
    q_word = document.getElementById("word").value;
    q_word = q_word.toLowerCase();
    length = q_word.length;
    s_letter = q_word.charAt(1);
    m_letter = q_word.charAt(Math.floor(length / 2));
    l_letter = q_word.charAt(length - 1);

    q_tag = '<h4 id="q_w">q:'  + '</h4>';
    i_tag = '<br>Ans:<input id="answer_input">';
    b_tag = '<br><br><button class="btn btn-info" onclick="check()">Check</button>';
    document.getElementById("output").innerHTML = q_tag + i_tag + b_tag;
document.getElementById("word").value = "";
}