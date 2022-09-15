function codeToRunLater() {
    for(var i=0; i<1111; i++) {
        console.log("Running: " + i);
    }
}

setTimeout(codeToRunLater, 10000);

console.log("End1");

