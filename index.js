let screen= document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue='';
let Check = false;
let hide = false;
let temp = false;
for(item of buttons){
item.addEventListener('click',(e)=>{
buttonText = e.target.innerText;
if(buttonText!='()')
{
    hide = true;

}

if(buttonText=='*'||buttonText=='/'||buttonText=='-'||buttonText=='+'||buttonText=='%')
{
    hide = false;
}
if(temp == true && buttonText!='()'&&buttonText!='*'&&buttonText!='/'&&buttonText!='-'&&buttonText!='+'&&buttonText!='%'&&buttonText!='=')
{
    screenValue+='*';
    screen.value = screenValue;
    temp = false;
}
console.log('Button text is ',buttonText); 
if(buttonText=='X'){
buttonText = '*';
screenValue += buttonText;
screen.value = screenValue;
}
if(buttonText=='π'){
    buttonText = 3.14;
    
    screenValue += buttonText;
    screen.value = screenValue;
    }
else if (buttonText =='C')
{
    screenValue = "";
    screen.value = screenValue;
    Check = false;
    hide = false;
}
else if(buttonText =='()') 
 { 
    if(Check)
    {
        temp = true;
        buttonText = ')';
        
        screenValue += buttonText;
        screen.value = screenValue;
        Check=false; 
      
    }
    else
    {
        if(hide == true)
        {
            temp = false;
            buttonText = '*(';
        
            screenValue += buttonText;
            screen.value = screenValue;
            Check=true;
        }
        else{
        buttonText = '(';
        
        screenValue += buttonText;
        screen.value = screenValue;
        Check=true;
        }
    }
}

else if(buttonText =='=')
{
    temp = false;
    screen.value = eval(screenValue);
}
else
{
    temp = false;
    screenValue += buttonText;
    screen.value = screenValue;
}
})
} 