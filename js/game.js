const playGame = () => {
  // Pods
  // Every DisplayObject might be interacted with
  // Adding noMouse() we are saying we will not interact with it and takes less processing
  // It would be fine without it, but it could help on older mobiles
  const pods = new Container().addTo().noMouse();
  interval(
    {
      min: 0.2,
      max: 0.5,
    },
    () => {
      new Circle({
        radius: 20,
        color: [yellow, red, blue, silver, grey, dark],
      })
        .loc(rand(W), -100, pods)
        .animate({
          // A string value is relative position,
          // so animate to left or right 100 from its current x
          // and then off the screen to the bottom
          props: {
            x: String(rand(-100, 100)),
            y: H + 100,
          },
          ease: 'linear',
          time: {
            min: 2,
            max: 5,
          },
          call: target => {
            // Dispose what just stopped animating
            target.dispose();
          },
        });
    }
  );

  // Paddle
  const paddle = new Rectangle({
    width: 100,
    height: 30,
    color: white,
  }).pos(0, 40, CENTER, BOTTOM);
  new MotionController({
    target: paddle,
    type: 'keydown',
    speed: 15,
    axis: HORIZONTAL,
    boundary: new Boundary({
      x: 0,
      y: 0,
      width: W - paddle.width,
      height: H,
    }),
  });
};

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
