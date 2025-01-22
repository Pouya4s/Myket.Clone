export default function Rain(element){
    const imgArr=[
        require('../../assets/Apps/Filimo.webp'),
        require('../../assets/Apps/MyIrancell.webp'),
        require('../../assets/Apps/4kWallpaper.webp'),
        require('../../assets/Games/ClashofClans.webp'),
        require('../../assets/Games/FruitCraft.webp'),
        require('../../assets/Games/Mafia.webp'),
        require('../../assets/Games/StepBoy.webp'),
        require('../../assets/Games/SubwaySurfers.webp'),
        require('../../assets/Games/QuizofKings.webp'),
        require('../../assets/Games/PrisonBreak.webp'),
    ];

    let newIMG=setInterval(()=>{
        if(element!=="" && element!==undefined){
            let img=document.createElement("img");
            let Rangle=randInt(0,359);
            let Rspeed=randInt(.2,.4);
            let speed=randInt(.3,1);
            img.src=imgArr[randInt(0,imgArr.length-1)];
            img.alt="AppIcone";
            img.style.opacity=0.5;
            img.style.borderRadius=`8px`;
            img.style.position='absolute';
            img.style.width=`${randInt(50,130)}px`;
            img.style.height="auto";
            img.style.left=`${randInt(3,97)}%`;
            img.style.transform=`rotate(${Rangle}deg)`;
            img.style.top="-140px";
            element.appendChild(img);
            let fall=setInterval(()=>{
                if(element.getClientRects().length!==0 && element.getClientRects()[0]!==undefined){
                    let top=Number(img.style.top.substring(0,img.style.top.length-2));
                    img.style.top = `${top+speed}px`;
                    Rangle+=Rspeed;
                    img.style.transform=`rotate(${Rangle}deg)`;
                    if(top > element.getClientRects()[0].height){
                        img.remove();
                    }
                }
                else{
                    clearInterval(fall)
                }
            },10)
        }
        else{
            clearInterval(newIMG);
        }
    },randInt(500,5000))


    function randInt(start,end){
        return Math.floor(Math.random()*(end-start+1))+start;
    }
}