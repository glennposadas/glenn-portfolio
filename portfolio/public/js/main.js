const defaultAnalytics = firebase.analytics()

const downloadResumeButton = document.getElementById('download-resume-button')

downloadResumeButton.addEventListener('click', downloadResume)

function downloadResume() {
  open('https://firebasestorage.googleapis.com/v0/b/glenn-portfolio.appspot.com/o/POSADAS_GLENN_VON_C_RESUME_MARCH_2020.pdf?alt=media&token=81637c4f-d9f7-4397-980a-531ec51e6203', '_blank')

  const event = new Date()
  const dateISO = event.toISOString()
  defaultAnalytics.logEvent('download_resume', { date: dateISO})
}