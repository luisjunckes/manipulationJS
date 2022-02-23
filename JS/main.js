

var numImg = 1;

function alternarImg()
{
    
    let capa = null;
    capa = document.getElementById('capa');
    if(numImg == 1)
    {

        numImg = capa.src='img/off.png';
        numImg = 2;
    }
    else
    {

        capa.src = 'img/on.png';
        numImg = 1;
    }  
    console.log(numImg);
}

function AlternarAutomatico()
{
    window.setInterval(()=>{
        alternarImg();
    }, 300)

}

