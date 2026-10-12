val = [2,3,1,4];
wei = [3,4,6,5];
limit = 8;
function solver(profit,weight,limit,i,w){
    if(i >= profit.length){
        return 0;
    }
    if(w+weight[i] <= limit){
        return Math.max(solver(profit,weight,limit,i+1,w),profit[i]+solver(profit,weight,limit,i+1,weight[i]+w));
    }
    return solver(profit,weight,limit,i+1,w);
}

console.log(solver(val,wei,limit,0,0));