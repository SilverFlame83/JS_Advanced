function createComputerHierarchy() {
    class Battery {
        constructor(manufacturer, expectedLife) {
            this.manufacturer = manufacturer;
            this.expectedLife = expectedLife;
        }
    };

    class Keyboard {
        constructor(manufacturer, responseTime) {
            this.manufacturer = manufacturer;
            this.expectedLife = responseTime;
        }
    };

    class Monitor {
        constructor(manufacturer, width, height) {
            this.manufacturer = manufacturer;
            this.expectedLife = width;
            this.height = height;
        }
    };

    class Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
            if (this.constructor.name === Computer.name) {
                throw new Error('Cannot instantiate abstract class')
            }
            this.manufacturer = manufacturer;
            this.processorSpeed = processorSpeed;
            this.ram = ram;
            this.hardDiskSpace = hardDiskSpace;
        }
    };

    class Laptop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace)

            this.weigth = weight;
            this.color = color;
            this._battery = null;
            this.battery = battery;
        }

        get battery() {
            return this._battery;
        }

        set battery(value) {
            if (value instanceof Battery === false) {
                throw new TypeError('Battery must be an insnace of battery')
            }
            this._battery = value;
        }
    };

    class Desktop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace)

            this._keyboard = null;
            this._monitor = null;
            this.keyboard = keyboard;
            this.monitor = monitor;
        }

        get keyboard() {
            return this._keyboard;
        }

        set keyboard(value) {
            if (value instanceof Keyboard === false) {
                throw new TypeError('Computer keyboard must be an insnace of battery')
            }
            this._keyboard = value;
        }
        get monitor() {
            return this._monitor;
        }

        set monitor(value) {
            if (value instanceof Monitor === false) {
                throw new TypeError('Computer monitor must be an insnace of battery')
            }
            this._monitor = value;
        }
    };

    return {
        Battery,
        Keyboard,
        Monitor,
        Computer,
        Laptop,
        Desktop
    }
}

const comp = createComputerHierarchy();

const battery = new comp.Battery('Energy',3)
const a = new comp.Laptop("Hewlett Packard",2.4,4,0.5,3.12,"Silver",battery);
console.log(a);

const kbd = new comp.Keyboard('Razer',1);
const monitor = new comp.Monitor('AOC',60,35)
const b = new comp.Desktop('Dell',3.0,16,2,kbd,monitor)
