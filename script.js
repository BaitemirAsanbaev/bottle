let dare = document.querySelector('.dare');
let bottle = document.querySelector(".bottle");
let nameInp = document.querySelector('#name');
let btn = document.querySelector('.btn');
let ind = 0;
btn.addEventListener("click", () => {
    ind++;
    let player = document.createElement('div');
    document.body.append(player);
    player.className = "player";
    player.id = `player${ind}`
    player.innerHTML = nameInp.value
})

bottle.addEventListener("click", () => {
    let randomNum = Math.floor(Math.random() * (1080 - 360)) + 360;
    bottle.style.transform = `rotate(${randomNum}deg)`;
    bottle.style.transition = 'transform 2s';
    dare.style.opacity = '100%';
    dare.style.zIndex = '3';
    dare.style.transitionDelay = '3s'
    dare.innerText = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem dolor quaerat non facilis tenetur magni, aut odit, odio ea reiciendis at delectus, tempora accusamus voluptas dolorum! Quibusdam voluptas iure cupiditate."
})
