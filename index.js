var displayError = () => {
  $('#errors').html("I'm sorry, there's been an error. Please try again.");
}

var searchRepositories = () => {
  const searchTerms = $('#searchTerms').val()
  const url = `https://api.github.com/search/repositories?q=${searchTerms}`
  $.get(url).done(function(data) {
    $('#results').html(data);
  }).fail(function(error) {
    displayError();
  });
}

function showCommits(el) {
  const url = `https://api.github.com/repos/${el.dataset.owner}/${el.dataset.repository}/commits`
  $.get(url).done(function(data) {
    $('#details').html(data);
  }).fail(function(error) {
    displayError()
  });
}

$(document).ready(function (){
});
