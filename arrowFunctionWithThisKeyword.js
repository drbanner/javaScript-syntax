/*
    Arrow functions do not rebind 'this'
*/
const p2 = {
    talk() {
        setTimeout(function () {
            console.log('this', this);
        }, 2000)
    }
}
