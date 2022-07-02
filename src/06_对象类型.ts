{
    type student = {
        name: string,
        gender: number,
        result: number,
        heigth: number,
        study: (content: string) => void,
        playgame: (content1: string) => void
    }

    // 对象类型
    const a: student = {
        name: '冷雪瞳',
        gender: 21,
        result: 100,
        heigth: 175,
        study(content: string) {
            console.log('看书:', content);
        },
        playgame(content1: string) {
            console.log('打游戏:', content1);
        }
    }
    a.study('绝世无双')
    a.playgame('LOL')
}