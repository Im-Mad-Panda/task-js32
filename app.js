const weekPlan = {
    Mon: 'Visit to stomatologist',
    Tue: 'Got salary',
    Wed: 'Meet friends',
    Thu: 'Hard working',
    Fri: 'Free day',
    Sat: 'Go to party'
}
function getPlanning(){
    const dayWeek = prompt(`Type the day:\nMon - for monday\nTue - thuesday\nWed - Wednesday\nThu - Thuesday\nFri - Friday\nSat - Saturday`);

    // alert(weekPlan[dayWeek] ? weekPlan[dayWeek] : 'Nothing planned for this day');

    console.log(dayWeek in weekPlan ? weekPlan[dayWeek] : 'There is on such day in our plan');

}
getPlanning();