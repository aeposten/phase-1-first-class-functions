function receivesAFunction (callback) {
    callback('this is a callback function');
}

function returnsANamedFunction ( ) {
    return function named( ){

    };
}

function returnsAnAnonymousFunction () {
    return function () {

    };
}