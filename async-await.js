const random = () => {
    return Promise.resolve(Math.random())
}

'Bad Promise Code 💩'

const sumRandomAsyncNums = () => {
    let first;
    let second;
    let third;

    return random()
        .then(v => {
            first = v;
            return random();
        })
        .then(v => {
            second = v;
            return random();
        })
        .then(v => {
            third = v;
            return first + second + third
        })
        .then(v => {
            console.log(`Result ${v}`)
        });
}

const random = () => {
    return Promise.resolve(Math.random())
}

'Good Promise Code ✅'

var sumRandomAsyncNums = async() => {

    const first = await random();
    const second = await random();
    const third = await random();

    console.log(`Result ${first }`);
    console.log(`Result ${second }`);
    console.log(`Result ${third}`);
}
sumRandomAsyncNums();


'Better Promise Code ✅✅'

const sumRandomAsyncNums = async() => {

    const first = await random();
    const second = await random();
    const third = await random();

    console.log(`Result ${first + second + third}`);
    
    const randos = Promise.all([
        random(), 
        random(),
        random()
    ])

    for(const r of await randos) {
        console.log(r)
    }
    
    //opcional, conditional statement 
    if (await random()) {
        // do something
        console.log('Cargando...');
    }
}

sumRandomAsyncNums();
