function score()
{
    var points = 0;
    var ans1 = document.getElementById('cor1').checked;
    var ans2 = document.getElementById('cor2').checked;
    var ans3 = document.getElementById('cor3').checked;
    if(ans1 == true)
    {
        points++;
    }
    if(ans2 == true)
    {
        points++;
    }
    if(ans3 == true)
    {
        points++;
    }
    alert(document.getElementById("username").value + " got " + points + " correct");
}