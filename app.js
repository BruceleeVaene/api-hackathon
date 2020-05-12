/*class App {
    constructor(){
        this.handleGetDataError = handleGetDataError;
        this.handleGetDataSuccess = handleGetDataSuccess;
    }
}*/


$.ajax ({
    method: 'GET',
    url: 'http://hotline.whalemuseum.org/api.json?species=orca',
    success: logResult,
    error: logError
})

function logResult(result) {
    console.log('Success!', result);
}
function logError(error) {
    console.log('Failure!', error);
}


/*$.ajax ({
    method: 'GET',
    dataType: 'jsonp',
    url: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBApr2mVQhGr446cdI_iz9gDY7U2IiKQYg&callback=initMap',
    success: logResult,
    error: logError
})*/
