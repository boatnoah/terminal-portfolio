import {
  linkedin,
  tiktok,
  github,
  resume,
  email,
  help,
  aboutme,
  projects,
  socials,
} from "./commands.js";

const container = document.querySelector(".container");
const input = document.getElementById("prompt");
window.addEventListener("keydown", handleEnter);

function handleEnter(event) {
  if (event.key === "Enter") {
    const userCmd = input.value;
    // call function command
    console.log(userCmd);

    const newDiv = document.createElement("div");
    newDiv.classList = "terminal";
    newDiv.innerHTML = `
            <div>
              <span>guest</span>
              <span>@</span>
              <span>boatnoah.com</span>
              <span>:$ ~ </span>
              <span>${userCmd}</span>
            </div>
            <div class="cmd-line"></div>
          `;
    const newOutput = newDiv.querySelector(".cmd-line");

    command(userCmd, newOutput);
    container.insertBefore(newDiv, container.lastElementChild);
    input.value = "";
    input.focus();
  }
}

function command(cmd, terminal) {
  switch (cmd.toLowerCase()) {
    case "help":
      addLine(help, terminal);
      break;

    case "aboutme":
      addLine(aboutme, terminal);
      break;

    case "projects":
      addLine(projects, terminal);
      break;

    case "socials":
      addLine(socials, terminal);
      break;

    case "linkedin":
      addLine("Opening LinkedIn...", terminal);
      newTab(linkedin);
      break;

    case "tiktok":
      addLine("Opening TikTok...", terminal);
      newTab(tiktok);
      break;

    case "github":
      addLine("Opening GitHub...", terminal);
      newTab(github);
      break;

    case "resume":
      addLine("Opening resume...", terminal);
      newTab(resume);
      break;

    case "email":
      addLine(
        `Opening mailto: <a href="${email}">noahkimCS@gmail.com</a>...`,
        terminal,
      );
      newTab(email);
      break;

    case "clear":
      break;

    case "chess":
      addLine(chess, terminal);
      break;

    default:
      addLine(
        "<p>Command not found. For a list of commands, type 'help'.</p>",
        terminal,
      );
  }
}

function addLine(text, outputSpace) {
  if (typeof text === "string") {
    outputSpace.innerHTML = text;
    return;
  }
  for (let i = 0; i < text.length; i++) {
    outputSpace.innerHTML += `${text[i]}`;
  }
}

function newTab(link) {
  setTimeout(function() {
    window.open(link, "_blank");
  }, 500);
}
