class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.left = min;
        this.right = max;
    }

    guess() {
        let center = Math.round((this.right + this.left) / 2);
        return center;
    }

    lower() {
        this.right = Math.round((this.right + this.left) / 2);
    }

    greater() {
        this.left = Math.round((this.right + this.left) / 2);
    }
}

module.exports = GuessingGame;
