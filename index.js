const firePixelArray = [];
const fireWidth = 10;
const fireHeiht = 10;

function start(){
    createFireDataStructure();
    createFireSource();
    renderFire();
    
    setInterval(calculateFirePropagation, 1000);
}

function createFireDataStructure(){
    const numberOfPixels = fireWidth * fireHeiht;

    for(let i = 0; i < numberOfPixels; i++){
        firePixelArray[i] = 0;
    }
}

function calculateFirePropagation(){
    for (let column = 0; column < fireWidth; column++){
        for (let row = 0; row < fireHeiht; row++){
            const pixelIndex = column + [fireWidth * row];

        }
    }
}

function updateFireIntensityPerPixel(currentPixelIndex){
    const belowPixelIndex = currentPixelIndex + fireWidth;
    if(belowPixelIndex >= fireWidth * fireHeiht){
        return;
    }
}

function renderFire(){
    let html = '<table cellpadding=0 cellspacing=0>';

    for (let row = 0; row < fireHeiht; row++){
        html += '<tr>';

        for(let column = 0; column < fireWidth; column++){
            const pixelIndex = column + ( fireWidth * row );
            const fireIntensity = firePixelArray[pixelIndex]

            html += '<td>';
                html += `<div class="pixel-index">${pixelIndex}</div>`;
                html += fireIntensity;
            html += '</td>';
        }

        html += '</tr>';
    }

    html += '</table>';

    document.querySelector('#fireCanvas').innerHTML = html;
}

function createFireSource(){
    for (let column = 0; column <= fireWidth; column++){
        const overflowPixelIndex = fireWidth * fireHeiht;
        const pixelIndex = (overflowPixelIndex - fireWidth) + column;

        firePixelArray[pixelIndex] = 36;
    }
}

start();