{
    let res1 = 'hello,world'
    const res2 = 'hello,world'

    // 字面量类型
    type dirction = '上'|'下'|'左'|'右'

    function changeDiection (dirctions:dirction) {
        console.log(dirctions);
    }
    changeDiection('上')
}