function timerLeft(){
	setInterval(function(){
		var hoursLeft = document.getElementById('timer-v-hours'),
		hoursText = document.getElementById('timer-v-hours__text'),
		minutesLeft = document.getElementById('timer-v-minutes'),
		minutesText = document.getElementById('timer-v-minutes__text'),
		secLeft = document.getElementById('timer-v-seconds'),
		secText = document.getElementById('timer-v-seconds__text'),
		dateNow = new Date().getTime(),
		dateFinish = new Date(2019,12,31),
		sec = Math.floor((dateFinish - dateNow)/1000),
		sectToMinutes = sec % 3600,
		hoursNumber = Math.floor(sec / 3600),
		minutesNumber = Math.floor(sectToMinutes/60),
		secondsNumber = sectToMinutes % 60;

		hoursLeft.innerHTML = hoursNumber; 
		minutesLeft.innerHTML = minutesNumber;
		secLeft.innerHTML = secondsNumber;
	})
}
timerLeft();