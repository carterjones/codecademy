function executor(resolve, reject) {
    // setTimeout is called synchronously, but the execution of the function
    // passed into it is performed asynchronously. Therefore, the call to
    // setTimeout completes immediately, yet is not an `async` function.
    setTimeout(() => {
        if (Math.random() > 0.5) {
            resolve("resolved");
        } else {
            reject("rejected");
        }
    }, 1000);
    console.log("timeout created");
}

async function promiseFunc() {
    return new Promise(executor);
}

async function entrypoint() {
    try {
        let value = await promiseFunc();
        console.log("done calling promiseFunc");
        console.log(value);
    } catch (error) {
        console.log(`caught error: ${error}`);
    }
}

entrypoint();
