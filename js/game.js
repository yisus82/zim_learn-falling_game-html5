const playGame = () => {};

const ready = () => {
  new Pane({
    content: 'Catch Passion Pods and Avoid Others',
    color: white,
    backgroundColor: red,
  }).show(playGame);
};

new Frame({
  scaling: FIT,
  width: 1024,
  height: 768,
  color: black,
  outerColor: darker,
  ready,
});
