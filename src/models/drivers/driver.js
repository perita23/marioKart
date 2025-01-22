class driver{
    constructor(name,vehicle,history) {
        this.name = name;
        this.vehicle = vehicle;
        this.history = history;
    }

    get Name() {
        return this.name;
    }
    get Vehicle() {
        return this.vehicle;
    }
    get History() {
        return this.history;
    }
    set Name(name) {
        this.name = name;
    }
    set Vehicle(vehicle) {
        this.vehicle = vehicle;
    }
    set History(history) {
        this.history = history;
    }
    
}export default driver;