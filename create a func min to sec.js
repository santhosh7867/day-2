const convertMinutesToSeconds = (minutes) => {
    return minutes * 60;
  };
  const minutes = 5;
  const seconds = convertMinutesToSeconds(minutes);
  console.log(seconds);