const defaultAnalytics = firebase.analytics()

const buttonDownloadResume = document.getElementById('download-resume-button')
const buttonViewProjects = document.getElementById('view-projects-button')
const linkEmail = document.getElementById('')

buttonDownloadResume.addEventListener('click', downloadResume)
buttonViewProjects.addEventListener('click', viewProjects)

function downloadResume() {
  open('https://firebasestorage.googleapis.com/v0/b/glenn-portfolio.appspot.com/o/POSADAS_GLENN_VON_C_RESUME_APR_2020.pdf?alt=media&token=16137ab1-001e-4e49-88d2-2fea09549ef3', '_blank')

  const event = new Date()
  const dateISO = event.toISOString()
  defaultAnalytics.logEvent('download_resume', { date: dateISO})
}

function viewProjects() {
  open('https://github.com/glennposadas/glenn-projects', '_blank')

  const event = new Date()
  const dateISO = event.toISOString()
  defaultAnalytics.logEvent('view_projects', { date: dateISO})
}