
if(localStorage.length > 0)
    {
        document.body.style.background = localStorage.Color;
    }
function SetColor(color){
document.body.style.background = color;
localStorage.setItem('Color',color);
};