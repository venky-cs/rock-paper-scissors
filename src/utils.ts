export function randomNumber(min:number,max:number){
    return Math.floor(Math.random() *(max-min +1)) +min
}

export function housePick(min:number,max:number){
    let random = randomNumber(min,max);
    let arr = ["rock","paper","scissors"]
    return arr[random]
}

export function check(select:string,com:string){
    let a = select;
    let b = com;

    if(a==='rock' && b==='paper'){
    return 'you lose'
    }else if(a==='paper' && b==='rock'){
        return 'you won'
    }else if(a==='rock' && b==='scissors'){
        return 'you won'
    }else if(a==='scissors' && b==='rock'){
        return 'you lose'
    }
    else if(a==='paper' && b==='scissors'){
        return 'you lose'
    }else if(a==='scissors' && b==='paper'){
        return 'you won'
    }
    else if(a === b){
        return 'draw'
    }
}

