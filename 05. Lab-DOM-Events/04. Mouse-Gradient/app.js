function attachGradientEvents() {
    let grd = document.querySelector('#gradient');
    grd.addEventListener('mousemove', grdMove);
    grd.addEventListener('mouseout', grdOut);

    const resultElement = document.querySelector('#result');

    function grdMove(event) {
        let offSetx = event.offsetX / (event.target.clientWidth - 1);

        offSetx = Math.trunc(offSetx * 100);
        
        resultElement.textContent = `${offSetx}%`;
    }

    function grdOut(event) {
        resultElement.textContent = "";
    }

}