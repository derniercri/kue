const delete_jobs = () =>  {
  const search = o('#search').val().trim()
  const state = o('h1').text()

  // query
  o.ajax({
    type: 'DELETE',
    url: `./job/search?q=${encodeURIComponent(search)}&state=${state}`,
    success: console.log,
    error: (_, textStatus, errorThrown) => {
      console.log("Status: " + textStatus)
      console.log("Error: " + errorThrown)
    }
  })
}
