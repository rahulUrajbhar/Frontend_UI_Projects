const myImg = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShywwD9O95P-hCdYto0gzRJWMtwLWQ2Ly7Tg&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6dRFjamhi1dY_6rtlT6sNRjz2vSD_2PEvPA&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX9Ib_5RSFuGLyf-LAFkipC1PyxBbvsS3eRA&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaD2C8vpMuxzi01urSEt4HJLitEOpkEde-Vg&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUbjvuJ_HEOsmbVO6XspC7ncZqYQ4GPR53tg&usqp=CAU"]
let currentImg = 0;
document.getElementById("previous").onclick = myPrevious;
document.getElementById("next").onclick = myNext;
function myPrevious(){
    currentImg--
    if(currentImg < 0){
        currentImg = myImg.length-1
    }
    document.getElementById("img").src = myImg[currentImg];
}
function myNext(){
    currentImg++
    if(currentImg > myImg.length-1){
        currentImg =0
    }
    document.getElementById("img").src = myImg[currentImg];
}