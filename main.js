let spinning = false;
const nums = [];
for (let i = 1; i <= 16; i++) nums.push(i);
const drawLots = () => {
    if (spinning) return;
    spinning = true;
    for (let i = 2; i <= 19; i++){
        document.getElementById('n' + i).innerText = Math.ceil(Math.random()*16);
    }
    let num;
    if (document.getElementById('traverse').checked){
        num = nums[Math.floor(Math.random()*nums.length)];
    }else {
        num = Math.ceil(Math.random()*16);
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === num){
            nums.splice(i, 1);
            break;
        }
    }
    document.getElementById('n20').innerText = num
    console.log(nums);
    if (nums.length === 0) {
        for (let i = 1; i <= 16; i++) nums.push(i);
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