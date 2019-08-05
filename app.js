function sleep(ms,msg) {
   return new Promise((resolve, reject)=>{
       if(ms<=300){
            return reject('Muy Poco');
       }else{
            setTimeout(()=>{
                return resolve(msg);
            },ms)
    }
   })
}

// step by step await
async function demo1() {
    console.log('Arrancando...');
    var date1 = new Date();
    let msg = await sleep(2000, "Estaba esperando");
    let msg2 = await sleep(3000, " esta ");
    let msg3 = await sleep(3000, "respuesta.");
    var date2 = new Date();
    var diff = date2 - date1
    console.log("Step by step await response: "+msg + msg2 + msg3 + " -> Total Time: ",diff );
}

// simoultaniously await
async function demo2(){
    console.log('Simoultaneous awaiting ... is faster!');
    const date1 = new Date();
    const [m1,m2,m3] = await Promise.all([
                                            sleep(500, "Estaba esperando"),
                                            sleep(3000, " esta "),
                                            sleep(3000, "respuesta.")
    ]);
    const date2 = new Date();
    const diff = date2 - date1;
    console.log("Simultaneously await response: "+m1 + m2 + m3 + " -> Total Time: ",diff );
    
}

//run the demo you want
demo1();
demo2();

// catches any unhandled Promise rejections during execution
process.on('unhandledRejection', error => {
    console.log('Unhandled Rejection ', error);
})