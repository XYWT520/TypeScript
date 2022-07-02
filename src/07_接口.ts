{
    // interface (接口) 只能对对象指定类型 而 type 可以为任何数据类型指定类型
    interface person {
        name:string
        age:number
        result:number
        sayHi:(content:string) => void
    }

    interface person1 extends person {
       play:(content1:string) => void
    }

    // const persons:person = {
    //     name:'冷雪瞳',
    //     age:20,
    //     result:100,
    //     sayHi(content) {
    //         console.log('你好',content);
    //     },
    // }
    // persons.sayHi('世界')


    const persons1:person1 = {
        name:'冷雪瞳',
        age:20,
        result:100,
        sayHi(content) {
            console.log('你好',content);
        },
        play(content1) {
            console.log('你好',content1);
        },
    }
    persons1.sayHi('宇宙')
    persons1.play('银河系')
}