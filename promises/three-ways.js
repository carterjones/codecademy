const promSucceed = new Promise((resolve, reject) => {
    resolve('success!');
});

const promFailure = new Promise((resolve, reject) => {
    reject('failure!');
});

const handleSuccess = (resolvedValue) => {
    console.log(`success: ${resolvedValue}`);
};

const handleFailure = (rejectionReason) => {
    console.log(`failure: ${rejectionReason}`);
};

// Convention 1.
promSucceed.then(handleSuccess, handleFailure);
promFailure.then(handleSuccess, handleFailure);

// Convention 2.
promSucceed.then(handleSuccess).then(null, handleFailure);
promFailure.then(handleSuccess).then(null, handleFailure);

// Convention 3.
promSucceed.then(handleSuccess).catch(handleFailure);
promFailure.then(handleSuccess).catch(handleFailure);
