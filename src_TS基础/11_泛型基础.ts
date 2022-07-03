{
    // 泛型
    // 在保证类型安全的前提下, 让函数与多种类型一起工作
    // function getId (val:any) {
    //     return val
    // }
    // console.log(getId(124));
    // console.log(getId('124'));
    // console.log(getId(true));

    // const result = getId(124)
    // const result1 = getId('124')
    // const result2 = getId(true)

    function getId<T>(val: T) {
        return val
    }

    // const result = getId<number>(124)
    // const result1 = getId<string>("124")
    // const result2 = getId<boolean>(true)

    // 高级用法,调用时可以省略类型, TS 可以自动推断
    const result = getId(124)
    const result1 = getId("124")
    const result2 = getId(true)
    console.log(result);
    console.log(result1);
    console.log(result2);
}