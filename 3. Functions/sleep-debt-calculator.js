const getSleepHours = day => {
  if (day === 'Monday') {
    return 8;
  } else if (day === 'Tuesday') {
    return 7.5;
  } else if (day === 'Wednesday') {
    return 8.5;
  } else if (day === 'Thursday') {
    return 7;
  } else if (day === 'Friday') {
    return 6;
  }
};

Test:
console.log(getSleepHours('Monday')); 
console.log(getSleepHours('Friday'));

const getActualSleepHours = () => {
  return getSleepHours('Monday') +
  getSleepHours('Tuesday') +
  getSleepHours('Wednesday') +
  getSleepHours('Thursday') +
  getSleepHours('Friday');
};

const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 5;
};


console.log(getActualSleepHours());
console.log(getIdealSleepHours());


const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();


 if (actualSleepHours === idealSleepHours) { 
  console.log('You had the ideal amount of sleep.');
} else if (actualSleepHours > idealSleepHours) {
  console.log('You had ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed. Get some rest.');
} else {
    console.log('You had ' + (idealSleepHours - actualSleepHours) + ' hour(s) too much sleep this week. Wake up earlier.');
  }
};

calculateSleepDebt();


