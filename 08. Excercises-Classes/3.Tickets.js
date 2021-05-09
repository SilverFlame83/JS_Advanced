function solve(firstParam, secondParam) {
    function splitLine(firstParam) {
        return firstParam.split('|');
    }

    function getDestination(arr) {
        const [destination, price, status] = arr;
        return new Ticket(destination, Number(price), status)
    }

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    const sorted = {
        'destination': ((a, b) => a.destination.localeCompare(b.destination)),
        'price': ((a, b) => a.price - b.price),
        'status': ((a, b) => a.status.localeCompare(b.status)),
    }

    return firstParam
        .map(splitLine)
        .map(getDestination)
        .sort(sorted[secondParam])

}

console.log(solve(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'
));

// function solve(firstParam, secondParam){
//    function splitLine(firstParam){
//     return (firstParam.split('|'));
//    }

//    function convertTicket(arr){
//        let [destination,price,status] = arr;
//     return new Ticket(destination, Number(price),status)

//    }

//    class Ticket{
//        constructor(destination, price,status){
//            this.destination = destination;
//            this.price = price;
//            this.status = status;
//        }
//    }
//    const sortStatus = {
//     'destination': ((a,b) => a.destination.localeCompare(b.destination)),
//     'price': ((a,b) => a.price - b.price),
//     'status': ((a,b) => a.status.localeCompare(b.status)),
//    }

//     return firstParam
//     .map(splitLine)
//     .map(convertTicket)
//     .sort(sortStatus[secondParam])

// }

// console.log(solve(['Philadelphia|94.20|available',
// 'New York City|95.99|available',
// 'New York City|95.99|sold',
// 'Boston|126.20|departed'],
// 'destination'
// ));