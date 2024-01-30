const linkedin = "https://www.linkedin.com/in/noah-kim-cs/";
const tiktok = "https://www.tiktok.com/@csboat?_t=8jNKJzYnmVm&_r=1";
const github = "https://github.com/boatnoah";
const resume = "https://www.resume.lol/share/lb03iae";
const email = "mailto:noahkimCS@gmail.com";
const gui = "https://boatnoah.github.io/personal-web/";

const help = [
  "<li> Press <kbd>tab</kbd> for auto-completion and use up and down arrows for previous commands.</li>",
  "<br>",
  "<li>aboutme        - Get to know me! <i class='fa-solid fa-user'></i></li>",
  "<li>projects       - See the latest projects I've built <i class='fa-solid fa-folder'></i></li>",
  "<li>socials        - Displays my socials <i class='fa-solid fa-hashtag'></i></li>",
  "<li>linkedin       - Check out my LinkedIn <i class='fa-brands fa-linkedin'></i></li>",
  "<li>tiktok         - Check out my TikTok <i class='fa-brands fa-tiktok'></li>",
  "<li>github         - My GitHub profile <i class='fa-brands fa-github'></i></li>",
  "<li>resume         - Check out my resume <i class='fa-solid fa-bars'></i></li>",
  "<li>gui            - See a simpler version of my website <i class='fa-solid fa-window-maximize'></i></li>",
  "<li>email          - Shoot me an email <i class='fa-solid fa-envelope'></i></li>",
  "<li>clear          - Clear Terminal <i class='fa-solid fa-terminal'></i></li>",
  "<li>chess          - Coming Soon...<i class='fa-solid fa-chess'></i></li>",
];

const aboutme = [
  " Hey, I'm Noah!",
  " I'm currently a 2nd-year student at California State University, Long Beach",
  " studying Computer Science. I enjoy coding, teaching others to code, and learning more about it.",
  " So for the past year, I have been working as a coding coach teaching kids aged 8-12",
  " the basics of programming. As a coach, I focus on developing projects that I have made into small",
  " coding lessons and ensuring each child progresses in their programming.",
  " I'm excited to be on this journey of growth and development, and",
  " I can't wait to see what the future holds in this rapidly evolving field.",
];

const commands = [
  "help",
  "aboutme",
  "projects",
  "socials",
  "linkedin",
  "tiktok",
  "github",
  "resume",
  "email",
  "gui",
  "clear",
  "chess",
];

const projects = [
  "<br>",
  `<li><a href="https://boatnoah.github.io/Pathfinding-Project/" target="_blank"><u>Pathfinding Visualizer </u> <i class="fa-solid fa-map-pin"></i></a> - Visualize how popular pathfinding algorithms work!</li>`,
  `<li><a href="https://github.com/boatnoah/Chess-Game-Project" target="_blank"><u>Chess</u> <i class="fa-solid fa-chess"></i></a> - Play a fun chess game!</li>`,
  `<li><a href="https://github.com/boatnoah/TicTacToeAI-Django" target="_blank"><u>Tic-Tac-Toe AI</u> <i class="fa-solid fa-robot"></i></a> - See how AI has solved Tic-Tac-Toe!</li>`,
  "<br>",
];

const socials = [
  "<br>",
  `<li><a href="${linkedin}" target="_blank"> <i class="fa-brands fa-linkedin"></i> <u>linkedin/noah-kim-cs</u></a></li>`,
  `<li><a href="${tiktok}" target="_blank">   <i class="fa-brands fa-tiktok"></i> <u>tiktok/csboat</u></a></li>`,
  `<li><a href="${github}" target="_blank">   <i class="fa-brands fa-github"></i> <u>github/boatnoah</u></a></li>`,
  "<br>",
];

export {
  linkedin,
  tiktok,
  github,
  resume,
  email,
  help,
  aboutme,
  projects,
  commands,
  socials,
  gui,
};
