type Hero = {
  title: string;
  description: string;
  video: string;
};

type CentreBlockText = {
  title: string;
};

type HomeData = {
  hero: Hero;
  centreBlockTextOne: CentreBlockText;
  centreBlockTextTwo: CentreBlockText;
};

export const homeData: HomeData = {
  hero: {
    title: "Health on your wrist",
    description:
      "Advanced health tracking meets intelligent coaching. Chronos helps you understand your body, optimize your workouts, and achieve your fitness goals with precision.",
    video: "https://files.duckhou.se/video-bg-caterina-capstone.mp4",
  },
  centreBlockTextOne: {
    title: "Your health, your way",
  },
  centreBlockTextTwo: {
    title: "How it works in 3 steps",
  },
};
