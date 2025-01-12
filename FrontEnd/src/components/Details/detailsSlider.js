export default function SliderRendered(){
    const black=document.getElementById('black');
    const right=document.getElementById("sliderRight");
    const left=document.getElementById("sliderLeft");
    const slider=document.querySelector(".sliderwrapper .slider");
    if(black!=null && right!=null && left!=null && slider!=null){
        let step=slider.firstElementChild.clientWidth+5;

        if(!black.getAttributeNames().includes('done')){
            black.addEventListener("click",(e)=>{
                if(e.target.id==='black'){
                    black.style.visibility="hidden";
                    console.log(black.firstElementChild);
                    if(black.firstElementChild!=null){
                        black.firstElementChild.remove();
                    }
                }
            })
            black.setAttribute('done',true);
        }

        for(let i=0;i<slider.children.length;i++){
            slider.children[i].addEventListener("click",(e)=>{imgPop(slider.children[i].firstElementChild)});
        }

        ButtonSH();
        window.addEventListener('resize',ButtonSH)
        slider.addEventListener("scroll",ButtonSH)
        
        if(!right.getAttributeNames().includes('done')){
            right.addEventListener("click",(e)=>{
                slider.scrollLeft=slider.scrollLeft+step;
            })
            right.setAttribute('done',true);
        }
        if(!left.getAttributeNames().includes('done')){
            left.addEventListener("click",(e)=>{
                slider.scrollLeft=slider.scrollLeft-step;
            })
            left.setAttribute('done',true);
        }
        function ButtonSH(){
            if(slider.scrollWidth>=slider.clientWidth){
                if(slider.scrollLeft>=0){
                    right.style.visibility='hidden';
                }
                else{
                    right.style.visibility='visible';
                }
                if(slider.scrollLeft<=-(slider.scrollWidth-slider.clientWidth)+1){
                    left.style.visibility='hidden';
                }
                else{
                    left.style.visibility='visible';
                }
            }
            else{
                right.style.visibility='hidden';
                left.style.visibility='hidden';
            }
        }

        function imgPop(img){
            if(black.style.visibility==="hidden" || black.style.visibility===""){
                black.style.visibility='visible';
                let image=img.cloneNode(img);
                image.style.cursor='auto';
                image.style.maxHeight="80%";
                image.style.maxWidth="80%";
                image.style.height="100%";
                black.appendChild(image);
            }
        }
    }
}