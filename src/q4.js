function isNegative(x, method) {
    try {
        if (x < 0) throw new Error("Non-negative integer used in method " + method);
        return false;
    } catch (error) {
        console.log(error);
        return true;
    }
}
