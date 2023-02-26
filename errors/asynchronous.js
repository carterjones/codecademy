function executor(input, callback) {
    // setTimeout is called synchronously, but the execution of the function
    // passed into it is performed asynchronously. Therefore, the call to
    // setTimeout completes immediately, yet is not an `async` function.
    setTimeout(() => {
        if (Math.random() > 0.5) {
            callback(input);
        } else {
            throw new Error('failure')
        }
    }, 1000);
    console.log("timeout created");
}

function callbackFunc(data) {
    console.log(`success: ${data}`);
};

async function entrypoint() {
    try {
        executor('words', callbackFunc);
        console.log("done calling callbackFunc");
    } catch (err) {
        console.log(`failure: ${err}`);
    }
}

entrypoint();
