

function solver(profit,weight,limit,i,w){
    if(i >= profit.length){
        return 0;
    }
    if(w+weight[i] <= limit){
        return Math.max(solver(profit,weight,limit,i+1,w),profit[i]+solver(profit,weight,limit,i+1,weight[i]+w));
    }
    return solver(profit,weight,limit,i+1,w);
}

export function kSolver(value,weight,limit){
    return `Max Profit IS :${solver(value,weight,limit,0,0)}`;
}
