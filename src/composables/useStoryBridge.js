export default (id, cb, options = {}) => {
  console.log(window);
  const sbBridge = new window.StoryblokBridge(options);

  sbBridge.on(["input", "published", "change"], (event) => {
    if (event.action == "input" && event.story.id === id) cb(event.story);
    else location.reload();
  });
};
