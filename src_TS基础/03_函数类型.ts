{
    // 什么是函数
    // 程序员传入参数,函数返回值

    // 函数声明式
    function add(a: number, b: number): number {
        return a + b
    }
    const res = add(2, 3)
    // console.log(res);

    // 函数表达式
    // const add1 = function (a: number, b: number): number {
    //     return a + b
    // }
    // const res1 = add1(6, 7)
    // console.log(res1);

    // 箭头函数
    // const add2 = (a: number, b: number): number => {
    //     return a + b
    // }
    // const res3 = add2(10, 20)
    // console.log(res3);

    // 函数类型别名
    // 函数类型别名只能用于箭头函数
    type FnType = (a:number, b:number) => number

    // 函数表达式
    const add1:FnType = function (a, b) {
        return a + b
    }
    const res1 = add1(6, 7)
    console.log(res1);

    // 箭头函数
    const add2:FnType = (a, b) => {
        return a + b
    }
    const res3 = add2(10, 20)
    console.log(res3);
}