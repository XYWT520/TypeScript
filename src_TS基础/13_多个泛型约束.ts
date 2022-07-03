{
    // function obj<O,K extends keyof O>(obj:O,keys:K) {
    //     return obj[keys]
    // }
    // const p1 =  obj({name:'冷雪瞳'},'name')
    // console.log(p1);

    function object<O,K extends keyof O>(obj:O,key:K) {
        return obj[key]
    }
    const p1 = object({name:'夏婠婠'},'name')
    console.log(p1);
}