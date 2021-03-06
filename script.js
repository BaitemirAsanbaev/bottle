let dare = document.querySelector('.dare');
let bottle = document.querySelector(".bottle");
let nameInp = document.querySelector('#name');
let btn = document.querySelector('.btn');
let ind = 0;

const dareList = [
    "Съесть пачку мятных жвачек и запить минералкой",
    "Смотреть на одного кажодого из участников и если кто то засмеётся то они целуются",
    "Если захочет в туалет, то он должен спросить разрешение у каждого",
    "Позвонить на рандомный номер и начать петь",
    "Спародируй любого человека из присутствующих",
    "Укуси сам себя за ногу или другого игрока",
    "Понюхай других игроков и скажи, чем пахнет каждый",
    "Встань возле туалета и как швейцар открывай двери всем входящим",
]

btn.addEventListener("click", () => {
    ind++;
    if(ind >= 7){
        ind = 7;
    }
    let player = document.createElement('div');
    document.body.append(player);
    player.className = "player";
    player.id = `player${ind}`;
    player.innerHTML = nameInp.value;
    nameInp.value = '';
})

bottle.addEventListener("click", () => {
    let randomNum = Math.floor(Math.random() * (1080 - 360)) + 360;
    let randomNumb = Math.floor(Math.random() * ((dareList.length + 1) - 0)) + 0;
    bottle.style.transform = `rotate(${randomNum}deg)`;
    bottle.style.transition = 'transform 2s';
    dare.style.opacity = '100%';
    dare.style.zIndex = '3';
    dare.style.transitionDelay = '3s'
    dare.style.transitionDuration = '1s'
    dare.innerText = dareList[randomNumb]

})

dare.addEventListener("click", () => {
    dare.style.opacity = "0%";
    dare.style.zIndex = '1';
    
})