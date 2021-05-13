class Parking {
    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = [];
    }
    addCar(carModel, carNumber) {
        if (this.capacity === 0) {
            throw new Error("Not enough parking space.")
        }
        this.capacity--;

        this.vehicles.push({ carModel, carNumber, payed: false });
        return `The ${carModel}, with a registration number ${carNumber}, parked.`
    }
    removeCar(carNumber) {
        const index = this.vehicles.findIndex(c => c.carNumber == carNumber);

        if (index < 0) {
            throw new Error("The car, you're looking for, is not found.")
        }
        if (this.vehicles[index].payed == false) {
            throw new Error(`${carNumber} needs to pay before leaving the parking lot.`)
        }

        this.vehicles.splice(index, 1);
        this.capacity++;
        return `${carNumber} left the parking lot.`;

    }
    pay(carNumber) {
        const index = this.vehicles.findIndex(c => c.carNumber == carNumber);
        if (index < 0) {
            throw new Error(`${carNumber} is not in the parking lot.`);
        }
        if (this.vehicles[index].payed == true) {
            throw new Error(`${carNumber}'s driver has already payed his ticket.`)
        }
        this.vehicles[index].payed = true;
        return `${carNumber}'s driver successfully payed for his stay.`;
    }
    getStatistics(carNumber) {
        if (carNumber == undefined) {
            return [
                `The Parking Lot has ${this.capacity} empty spots left.`,
                this.vehicles
                    .sort((a, b) => a.carModel.localeCompare(b.carModel))
                    .map(car => `${car.carModel} == ${car.carNumber} - ${car.payed ? 'Has payed' : 'Not payed'}`)
                    .join('\n')
            ].join('\n')
        } else {
            const car = this.vehicles.findIndex(c => c.carNumber == carNumber);
            return `${this.vehicles[car].carModel} == ${this.vehicles[car].carNumber} - ${this.vehicles[car].payed? 'Has payed' :'Not payed'}`;
        }
    }
}

const parking = new Parking(12);

console.log(parking.addCar("Volvo t600", "TX3691CA"));
console.log(parking.getStatistics());

console.log(parking.pay("TX3691CA"));
console.log(parking.removeCar("TX3691CA"));

