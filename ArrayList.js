class ArrayList {
    constructor() {
        this.data = [];
    }

    add(element) {
        this.data.push(element);
    }

    get(index) {
        if (index < 0 || index >= this.data.length) {
            throw new RangeError("Index out of bounds");
        }
        return this.data[index];
    }

    remove(index) {
        if (index < 0 || index >= this.data.length) {
            throw new RangeError("Index out of bounds");
        }
        return this.data.splice(index, 1)[0];
    }

    size() {
        return this.data.length;
    }
}

module.exports = ArrayList;
