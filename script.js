function colorChange() {
    let first = '#';
    let datas =['a','b','c','d','e','f',0,1,2,3,4,5,6,7,8,9];
    let second = Math.floor(Math.random()*9)
    let third = Math.floor(Math.random()*9);
    let fourth = Math.floor(Math.random()*9);
    let fifth = Math.floor(Math.random()*9);
    let sixth = Math.floor(Math.random()*9);
    let seventh = Math.floor(Math.random()*9);

    let border = document.querySelector('.border');
    let head = document.querySelector('.head');
    let click = document.querySelector('.click');
    border.style.background = `${first}${datas[second]}${datas[third]}${datas[fourth]}${datas[fifth]}${datas[sixth]}${datas[seventh]}`;
    head.style.color = `${first}${datas[seventh]}${datas[sixth]}${datas[fifth]}${datas[fourth]}${datas[third]}${datas[second]}`;
    click.innerHTML = `${first}${datas[second]}${datas[third]}${datas[fourth]}${datas[fifth]}${datas[sixth]}${datas[seventh]}`;
}

let remove = document.querySelector('.remove');
remove.addEventListener('click',()=>{
   let border = document.querySelector('.border');
   border.style.background = '#ffffff';
   let click = document.querySelector('.click');
   click.innerHTML = 'Click';
   let head = document.querySelector('.head');
   head.style.color = '#ebd217'

})