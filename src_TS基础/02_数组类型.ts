{
    // 数字类型注解
    let arr:number[] = [1,2,3,4,5] 
    // 字符串类型注解
    let arr1:string[] = ['1','2','3']
    // 联合类型
    // 一旦使用联合类型, 说明数组中可能是 number 类型, 也可能是 string 类型,所以会丢失 number 和 string 方法
    let arr2:(string | number) [] = [1,'2']

}