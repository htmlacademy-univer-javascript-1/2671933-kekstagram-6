function isMeetingWithinWorkday(workStart, workEnd, meetingStart, durationMinutes) {
  function toMinutes(time) {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  }
  const workStartInMinutes = toMinutes(workStart);
  const workEndInMinutes = toMinutes(workEnd);
  const meetingStartInMinutes = toMinutes(meetingStart);
  const meetingEndInMinutes = meetingStartInMinutes + durationMinutes;
  return meetingStartInMinutes >= workStartInMinutes && meetingEndInMinutes <= workEndInMinutes;
}

