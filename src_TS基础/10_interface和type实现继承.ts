{
    // 定义别名
    type person = {
        name: string,
        age: number,
        gender: string,
        sayHi: (content: number, content1: number) => void
    }

    // type 实现继承的效果
    // & 连接符可以实现 type 继承效果
    type student = {
        sleep: (content:string) => void
    } & person

    const persons: person = {
        name: '冷雪瞳',
        age: 21,
        gender: '女',
        sayHi(a: number, b: number) {
            return a + b
        },
    }
    
    const students: student = {
        name: '夏婠婠',
        age:20,
        gender:'女',
        sayHi(content, content1) {
            return content + content1
        },
        sleep(content) {
            return content
        },
    }
    console.log(students.name);
    console.log(students.age);
    console.log(students.gender);
    console.log(students.sleep('冷雪瞳'));
    console.log(students.sayHi(520,0));

    // console.log(persons.name);
    // console.log(persons.age);
    // console.log(persons.gender);
    // const res = persons.sayHi(500,20)
    // console.log(res);
}

// {
//     // 定义别名
//     interface person {
//         name: string,
//         age: number,
//         gender: string,
//         sayHi: (content: number, content1: number) => void
//     }

//     // 定义一个为学生的别名实现继承的效果
//     interface student extends person {
//         result:number,
//         sleep:(sleeps:string) => void
//     }

//     const persons: person = {
//         name: '冷雪瞳',
//         age: 21,
//         gender: '女',
//         sayHi(a: number, b: number) {
//             return a + b
//         },
//     }

//     const students:student = {
//         name:'占宇成',
//         age:21,
//         gender:'男',
//         result:100,
//         sayHi(content, content1) {
//             return content + content1
//         },
//         sleep(sleeps:string){
//             return sleeps
//         }
//     }

//     console.log(students.name);
//     console.log(students.age);
//     console.log(students.gender);
//     console.log(students.result);
//     console.log(students.sleep('学生要睡觉'));
//     console.log(students.sayHi(10000,2000));

//     // console.log(persons.name);
//     // console.log(persons.age);
//     // console.log(persons.gender);
//     // const res = persons.sayHi(500, 20)
//     // console.log(res);
// }