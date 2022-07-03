{
    // 如果函数没有返回值, 那么函数返回值的类型就是 void
    // 没有 return 就是 void 
    // 这种写法返回值是 viod
    const add = () => {}
    // 这种写法是确定返回值是 void
    const add1 = () : void=> {}

    const sayHi = (content:string) => {
        console.log(content);
    }
    sayHi('hello,world')
}