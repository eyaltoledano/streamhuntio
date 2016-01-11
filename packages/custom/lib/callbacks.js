function alertThanks (post) {
  alert("Thanks for submitting this channel!");
  return post;
}
Telescope.callbacks.add("postSubmitClient", alertThanks);