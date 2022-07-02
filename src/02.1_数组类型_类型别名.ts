{
    // 数字类型注解
    let arr:number[] = [1,2,3,4,5] 
    // 字符串类型注解
    let arr1:string[] = ['1','2','3']
    // 联合类型
    // 一旦使用联合类型, 说明数组中可能是 number 类型, 也可能是 string 类型,所以会丢失 number 和 string 方法
    type arrAy = (string | number) []
    let arr2:arrAy = [1,'2']
    let arr3:arrAy = [1,'2']
    let arr4:arrAy = [1,'2']
    let arr5:arrAy = [1,'2']
}