console.log("welcome to game logic file");
let container=document.getElementById("game-container");

let objects=[  [0,0],[200,0],[400,0],[600,0],[800,0],
               [0,30],[200,30],[400,30],[600,30],[800,30],
               [0,60],[200,60],[400,60],[600,60],[800,60]
            ];

objects.forEach(element,index => {
    
    let ele=`<div class="obstruction">
             ele.style.left=element[index];
             ele.style.top=elemen

             </div>`
    container.appendChild(ele);   
});

