function executor(input, callback) {
    // setTimeout is called synchronously, but the execution of the function
    // passed into it is performed asynchronously. Therefore, the call to
    // setTimeout completes immediately, yet is not an `async` function.
    setTimeout(() => {
        if (Math.random() > 0.5) {
            callback(null, input);
        } else {
            callback(Error('failure'), null);
        }
    }, 1000);
    console.log("timeout created");
}

function errFirstCallbackFunc(err, data) {
    if (err) {
        console.log(`error: ${err}`);
    } else {
        console.log(`success: ${data}`);
    }
};

async function entrypoint() {
    executor('words', errFirstCallbackFunc);
    console.log("done calling errFirstCallbackFunc");
}

entrypoint();
