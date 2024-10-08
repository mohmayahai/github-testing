function fun(task){
    return new Promise((resolve,reject)=>
    {
        if(task)
            {
                resolve('Completed');
            }
        else{
            reject('NotCompleted');
        }
    })
};

let onresolve =(res)=>{
    console.log(res);
};

let onreject = (err)=>{
    console.log(err);

let onreject = (err)=>{
    console.log(err);
}

fun(true).then(onresolve).catch(onreject);