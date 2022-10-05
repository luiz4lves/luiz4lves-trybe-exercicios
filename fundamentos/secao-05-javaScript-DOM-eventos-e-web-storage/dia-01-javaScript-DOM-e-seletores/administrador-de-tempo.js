const header = document.getElementById('header-container');
header.style.backgroundColor = 'rgb(10, 150, 93)';

const emergencyTasks = document.getElementsByClassName('emergency-tasks')[0];
emergencyTasks.style.backgroundColor = 'red';

const noEmergencyTasks = document.getElementsByClassName('no-emergency-tasks')[0];
noEmergencyTasks.style.backgroundColor = 'green'

const h3NoEmergencyTasks = document.querySelectorAll('.no-emergency-tasks h3');
for (let index = 0; index < h3NoEmergencyTasks.length; index += 1){
    h3NoEmergencyTasks[index].style.backgroundColor = 'rgb(15, 100, 24)';
}

const h3EmergencyTasks = document.querySelectorAll('.emergency-tasks h3');
for (let index = 0; index < h3EmergencyTasks.length; index += 1){
    h3EmergencyTasks[index].style.backgroundColor = 'rgb(35, 37, 37)';
}

const  footerContainer = document.getElementById('footer-container');
footerContainer.style.backgroundColor = 'rgb(0, 53, 51)'