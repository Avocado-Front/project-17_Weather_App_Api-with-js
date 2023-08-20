let $  = document
let inp = $.querySelector('.search-box')
let btn = $.querySelector('.btn')
let modalElem = $.querySelector('.modal')


let apiData = {
    url:'https://api.openweathermap.org/data/2.5/weather?q=',
    key:'9a608599903b3929f1d084de8b7356ed'
}


function fetchData(){
    let countryValue = inp.value

    fetch(`${apiData.url}${countryValue}&appid=${apiData.key}`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        showData(data)
    })
    .catch(err =>{
        showError(err)
    })
}



function showData(data){
    let cityElem = document.querySelector('.city')
    cityElem.innerHTML = `${data.name},${data.sys.country}`

    let temValue = document.querySelector('.temp')
    let spanTemp = $.querySelector('.spanTemp')
    temValue.innerHTML = `${ Math.floor(data.main.temp -273.15 )}`
    temValue.appendChild(spanTemp)

    let weatherValue = document.querySelector('.weather')
    weatherValue.innerHTML = `${data.weather[0].main}`
    
    let lowHighTemp = document.querySelector('.hi-low')
    lowHighTemp.innerHTML = `${Math.floor(data.main.temp_min -273.15)}°c / ${Math.floor(data.main.temp_max -273.15)}°c` 

    let dateTime = document.querySelector('.date')
    dateTime.innerHTML = showDate()


}

function showDate(){
    let months =  ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let now = new Date()

    let day = days[now.getDay()]
    let month = months[now.getMonth()]
    let year = now.getFullYear()
    let date = now.getDate()

    return `${day} ${date}  ${month} ${year}`

}
function showError(err){
    modalElem.classList.add('active')
    setTimeout(function(){
        modalElem.classList.remove('active')
        var time = 3000;
        navigator.vibrate(time);
    },3000)
}

btn.addEventListener('click',() =>{
    fetchData()
})