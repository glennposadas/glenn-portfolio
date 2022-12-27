const defaultAnalytics = firebase.analytics()

const buttonDownloadResume = document.getElementById('download-resume-button')
const buttonViewProjects = document.getElementById('view-projects-button')
const linkEmail = document.getElementById('')

buttonDownloadResume.addEventListener('click', downloadResume)
buttonViewProjects.addEventListener('click', viewProjects)

function downloadResume() {
  // Now we have an editable url :P No need to update this js file
  // everytime we have updates to my resume.
  // As of 12/27/22, my rebrandly link got blocked after updating my resume file. I've requested to unblock it though.
  // For now, this is the direct link of my resume file.
  open('https://firebasestorage.googleapis.com/v0/b/glenn-portfolio.appspot.com/o/POSADAS_GLENN_VON_C_2023.pdf?alt=media&token=4f50cfce-75f4-4581-be95-1135008fa2ba')

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
