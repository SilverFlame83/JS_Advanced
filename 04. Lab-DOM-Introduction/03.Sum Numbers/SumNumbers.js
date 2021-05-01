function calc() {
    const firstSum = Number(document.getElementById("num1").value);
    const secondSum = Number(document.getElementById("num2").value);

    const result = firstSum + secondSum;

    document.getElementById("sum").value = result;

}
