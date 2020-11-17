const newEvent = '5 March 2021'
const daysEl = document.querySelector('.day')
const hoursEl = document.querySelector('.hours')
const minutesEl = document.querySelector('.minutes')
const secondsEl = document.querySelector('.seconds')

const countdown = () => {
	const eventDate = new Date(newEvent)
	const currentDate = new Date()
	const totalSeconds = new Date(eventDate - currentDate) / 1000
	const days = Math.floor(totalSeconds / 3600 / 24)
	const hours = Math.floor(totalSeconds / 3600) % 24
	const minutes = Math.floor((totalSeconds / 60) % 60)
	const seconds = Math.floor(totalSeconds % 60)
	daysEl.innerHTML = days
	hoursEl.innerHTML = hours
	minutesEl.innerHTML = minutes
	secondsEl.innerHTML = seconds
	if (days < 10) {
		daysEl.innerHTML = '0' + days
	}
	if (hours < 10) {
		hoursEl.innerHTML = '0' + hours
	}
	if (minutes < 10) {
		minutesEl.innerHTML = '0' + minutes
	}
	if (seconds < 10) {
		secondsEl.innerHTML = '0' + seconds
	}
}

countdown()
setInterval(countdown, 1000)
