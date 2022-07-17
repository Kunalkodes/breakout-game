
let container=document.getElementById("game-container");
let bat=document.getElementById("bat");
let ball=document.getElementById("ball");
// let hit = new Audio("hit.mp3");
// let win = new Audio("win.mp3");
// let los =new Audio("los.mp3");

let batposn=[500,0];
let ballposn=[500,50];
bat.style.bottom=batposn[1]+'px';
bat.style.left=batposn[0]+'px';
let directionx=2;
let directiony=2;
let scorecard=0;




let objects=[  [0,0],[200,0],[400,0],[600,0],[800,0],
               [0,30],[200,30],[400,30],[600,30],[800,30],
               [0,60],[200,60],[400,60],[600,60],[800,60]
            ];

            

function addobject(){
    for (let i=0;i<objects.length;i++){
        let  ele=document.createElement("div");
        ele.className="hurdle";
       ele.style.left= objects[i][0]+'px';
       ele.style.top=objects[i][1]+'px';
       container.appendChild(ele);
    }
}
addobject();
            
bat.addEventListener('keydown', (e)=>{  
    switch (e.key){
        case 'ArrowLeft': if( batposn[0]>0){
                           batposn[0]-=10;
                           bat.style.left=batposn[0]+'px';
                           
                          }
                          break;
         case 'ArrowRight': if (batpos[0]< 800) {
                              batposn[0]+=10;
                               bat.style.left=batposn[0]+'px';
                               

                           }                
    }
    
});

function ballmove(){
    ballposn[0]+=directionx;
    ballposn[1]+=directiony;
    ball.style.left=ballposn[0]+'px';
    ball.style.bottom=ballposn[1]+'px';
  
    
    // collision with the hurdle blocks

    for (let i=0;i<objects.length;i++){

        if (ballposn[0] > objects[i][0] && ballposn[0] < objects[i][0]+200 && ballposn[1] >500-30-20- objects[i][1]){
            const allBlocks = Array.from(document.querySelectorAll('.hurdle'));
             allBlocks[i].classList.remove('hurdle');
             objects.splice(i,1);
             horizontal();
             scorecard=15-objects.length;
             
            
        }
       
    }

    if(scorecard == 15){
        clearInterval(time);
    }
     
    // let score=document.getElementById("score");
    // score.innerHTML=`<b>${scorecard}</b>`;

    if  (ballposn[0]== 970 || ballposn[0]== 0 ){
        console.log("striking the vertical walls");
        // hit.play();
        vertical();
    }
    if  (ballposn[1]== 470 || ballposn[1]==0){
        console.log("striking the top wall");
        horizontal();
        // hit.play();
    }


    //collison with the bat
    else if (ballposn[0]>batposn[0] && ballposn[0]<batposn[0]+200 && ballposn[1]<30){
        
    
        horizontal();
        
    }

    // collision with floor of the container
    // else if (ballposn[1] < 6)
    // {    
    //     clearInterval(time);
    // }
   
}



//collision with the right wall boundary
function vertical(){
    directionx=-1*directionx;
    return;
}

function horizontal(){
    directiony=-1*directiony;
    return;
}


let time= setInterval(ballmove,10);



