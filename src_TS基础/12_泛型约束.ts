{
    // // 使用接口实现泛型约束
    // interface Ilength {
    //     length: number
    // }

    // function getId<T extends Ilength>(val: T) {
    //     console.log(val.length);
    //     return val
    // }

    // const result = getId('123456')
    // const result1 = getId([1,2,3,4,5])
    // console.log(result);
    // console.log(result1);


    
    // 第二种方法可以使用 typeof 来判断
    function getId<T>(val: T) {
        if(typeof val === 'string') {
            console.log(val.length);
        }
        return val
    }

    const result = getId('123456')
    // const result1 = getId([1,2,3,4,5])
    console.log(result);
    // console.log(result1);
}