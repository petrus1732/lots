let spinning = false;
const drawLots = () => {
    if (spinning) return;
    spinning = true;
    for (let i = 2; i <= 20; i++){
        document.getElementById('n' + i).innerText = Math.ceil(Math.random()*16);
    }
    document.getElementById('reel').style.animation = 'roll 3s ease-out forwards';
    document.getElementById('button').style.animation = 'pushed 3s ease-out';
    
    setTimeout(() => {
        document.getElementById('n1').innerText = document.getElementById('n20').innerText
        document.getElementById('reel').style.animation ='none'
        document.getElementById('reel').style.Left = '-570vh';
        document.getElementById('button').style.animation = 'none';
        spinning = false
    }, 3000);
}