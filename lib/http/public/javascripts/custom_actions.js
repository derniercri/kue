
const delete_jobs = () =>  {
  const val = o('#search').val().trim()
  const jobs = o('#jobs .job')

  // query
  o.get('./job/search?q=' + encodeURIComponent(val), ids => {
    jobs.each((_, job) => {
      const id = job.id.replace('job-', '')
      if (~ids.indexOf(id)) {
        // Delete printed
        o.ajax({
          url: './job/' + id,
          type: 'DELETE',
          success: console.log,
          error: (_, textStatus, errorThrown) => {
            console.log("Status: " + textStatus)
            console.log("Error: " + errorThrown)
          }
        })
      }
    })
  })
}
