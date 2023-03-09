//3초 후에 hello를 한 번 출력하고 종료하기
setTimeout(() => {
    console.log("hello");
    process.exit(0);
}, 3000);

//3초 후에 hello를 한 번 출력하고 종료하기
setTimeout(() => console.log("hello"), 3000);