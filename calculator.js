function add(num1,num2){
    return num1+num2;
}
function subtract(num1,num2){
    return num1-num2;
}
function multiply(num1,num2){
    return num1*num2;
}
function divide(num1,num2){
    return num1/num2;
}
function operate(num1,op,num2){
    let temp =  num1;
   
    let temp2 =  num2;
    switch(op){
        case '+':
            if(decimalp==false){
            return parseInt(temp)+parseInt(temp2);
            }else{
                return parseFloat(temp)+parseFloat(temp2);
            }
            
        case '-':
            return temp-temp2;
            
        case 'x':
            return temp*temp2;

        case '/':
            if(num2==0){
                return NaN;
            }
            return temp/temp2;
            
    }
}
let decimalp=false;
let queue = [];
function update(screen,text){
    let display = document.querySelector(screen);
    display.innerHTML=text;
}
let btns = document.querySelectorAll('.num');
btns.forEach(btn => {
    let text = btn.innerHTML;
    let display = document.querySelector('.display2');
    btn.addEventListener("click",function(){
        if(queue[0]!=undefined && queue[1]==undefined){
            display.innerHTML = text;
            update('.display1',"");
            let empty=[];
            queue=empty;
            console.log('unjdefid');
        }else{
            display.innerHTML = display.innerHTML+text;
            console.log("else");
        }
        
    });
});
let ops = document.querySelectorAll('.op');
ops.forEach(btn => {
    let text = btn.innerHTML;
    let display = document.querySelector('.display1');
    let nums = document.querySelector('.display2');
    btn.addEventListener("click",function(){
        
        
        if(queue[0]==undefined){
            if(decimal_button==false){
                let temp = parseInt(nums.innerHTML);
                queue.push(temp);
            }else{
                let temp = parseFloat(nums.innerHTML);
                        queue.push(temp);
            }
            queue.push(text);
            display.innerHTML = queue[0]+" "+text;
        }else{
            if(nums.innerHTML!=""){
                if(decimal_button==false){
                    let temp = parseInt(nums.innerHTML);
                    queue.push(temp);
                    }else{
                        let temp = parseFloat(nums.innerHTML);
                        queue.push(temp);
                    }
            queue.push(text);
            update('.display1',operate(queue[0],queue[1],queue[2]) +" "+queue[3]);
            
           let temp = operate(queue[0],queue[1],queue[2]);
            queue.shift();
            queue.shift();
            queue.shift();
            queue.unshift(temp);
            console.log("ADASDDS");
            }else{
                if(queue[1]==undefined){
                update('.display1',queue[0]+" "+text);
                queue.push(text);
                console.log("here");
                }
            }
            
        }
        decimalp=false;
        nums.innerHTML="";
        //console.log(queue);
    });
});

let reset = document.querySelector('.reset');
reset.addEventListener("click",function(){
    let empty=[];
    queue=empty;
    decimalp=false;
    update('.display1',"");
    update('.display2',"");
});

let operate_button = document.querySelector('.operate');
operate_button.addEventListener("click",function(){
    let display = document.querySelector('.display2');
    let temp = operate(queue[0],queue[1],display.innerHTML);
    
    update('.display1',temp);
    let empty=[];
    queue=empty;
    queue.push(temp);
    
    update('.display2',"");
    decimalp=false;
    console.log (queue);

});
let decimal_button = document.querySelector('.decimal');
decimal_button.addEventListener("click",function(){
    if(decimalp==false){
        let display = document.querySelector('.display2');
        display.innerHTML=display.innerHTML+'.';
        decimalp=true;
    }
});