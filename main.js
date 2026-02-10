import {
  linkedin,
  youtube,
  github,
  resume,
  email,
  gui,
  help,
  aboutme,
  commands,
  projects,
  socials,
} from "./commands.js";
const container = document.querySelector(".container");
const input = document.getElementById("prompt");
const inputWrap = document.querySelector(".input-wrap");
const promptMeasure = document.getElementById("prompt-measure");
const blockCaret = document.getElementById("block-caret");
let previousCmds = [];
let index = 1;
let blockCaretEnabled = false;

window.addEventListener("keydown", handleEnter);
window.addEventListener("keydown", handleUpArrow);
window.addEventListener("keydown", handleDownArrow);
window.addEventListener("keydown", handleTabCompletion);

initBlockCaret();

function handleEnter(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    const userCmd = input.value;
    previousCmds.push(userCmd);
    if (userCmd === "clear") {
      // return early if it is a clear cmd to avoid creating a new div
      previousCmds.push(userCmd);
      command(userCmd, null);
      input.value = "";
      scrollToCurrentInput();
      return;
    }
    const newDiv = document.createElement("div");
    newDiv.classList = "output";
    newDiv.innerHTML = `
            <div class="flexbox">
              <span class="prompt-user nospace">boatnoah</span>
              <span class="light-dark nospace">@</span>
              <span class="prompt-host nospace">portfolio</span>
              <span class="light-dark nospace">:(</span>
              <span class="prompt-branch nospace">main</span>
              <span class="light-dark nospace">)$ ~ </span>
              <span class="space">${userCmd}</span>
            </div>
            <div class="cmd-line"></div>
          `;
    const newOutput = newDiv.querySelector(".cmd-line");
    command(userCmd, newOutput);
    container.insertBefore(newDiv, container.lastElementChild);
    input.value = "";
    scrollToCurrentInput();
  }
}

function handleUpArrow(event) {
  if (event.key === "ArrowUp" && previousCmds.length !== 0) {
    event.preventDefault();
    input.value = previousCmds[previousCmds.length - index];
    if (!(index + 1 > previousCmds.length)) {
      index++;
    }
    updateBlockCaret();
  }
}

function handleDownArrow(event) {
  if (event.key === "ArrowDown" && previousCmds.length !== 0) {
    event.preventDefault();
    input.value = previousCmds[previousCmds.length - index];
    if (index - 1 !== 0) {
      index--;
    }
    updateBlockCaret();
  }
}

function handleTabCompletion(event) {
  if (event.key === "Tab") {
    event.preventDefault();
    const incompleteWord = input.value.toLowerCase();
    const match = commands.filter((command) =>
      command.startsWith(incompleteWord),
    );
    if (match.length > 0) {
      input.value = match[0];
      updateBlockCaret();
    }
  }
}

function initBlockCaret() {
  if (!input || !inputWrap || !promptMeasure || !blockCaret) {
    return;
  }

  blockCaretEnabled = true;
  document.body.classList.add("block-caret-ready");
  syncCaretMetrics();
  updateBlockCaret();

  input.addEventListener("input", updateBlockCaret);
  input.addEventListener("click", updateBlockCaret);
  input.addEventListener("keyup", updateBlockCaret);
  input.addEventListener("focus", handlePromptFocus);
  input.addEventListener("blur", handlePromptBlur);
  window.addEventListener("resize", handleResize);

  if (document.activeElement === input) {
    blockCaret.classList.add("visible");
  }
}

function syncCaretMetrics() {
  const styles = window.getComputedStyle(input);
  const properties = [
    "font-family",
    "font-size",
    "font-weight",
    "font-style",
    "letter-spacing",
    "line-height",
    "text-transform",
    "text-indent",
  ];

  properties.forEach((property) => {
    promptMeasure.style.setProperty(
      property,
      styles.getPropertyValue(property),
    );
  });
}

function handlePromptFocus() {
  if (!blockCaretEnabled) {
    return;
  }

  blockCaret.classList.add("visible");
  updateBlockCaret();
}

function handlePromptBlur() {
  if (!blockCaretEnabled) {
    return;
  }

  blockCaret.classList.remove("visible");
}

function handleResize() {
  if (!blockCaretEnabled) {
    return;
  }

  syncCaretMetrics();
  updateBlockCaret();
}

function updateBlockCaret() {
  if (!blockCaretEnabled) {
    return;
  }

  const cursorPosition = input.selectionStart ?? input.value.length;
  promptMeasure.textContent = input.value.slice(0, cursorPosition);

  const textWidth = promptMeasure.getBoundingClientRect().width;
  const maxPosition = Math.max(0, input.clientWidth - blockCaret.offsetWidth);
  const cursorX = Math.min(
    maxPosition,
    Math.max(0, textWidth - input.scrollLeft),
  );

  blockCaret.style.transform = `translateX(${cursorX}px)`;
  blockCaret.style.height = `${input.clientHeight}px`;
}

function command(cmd, terminal) {
  switch (cmd.toLowerCase()) {
    case "ls":
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

    case "youtube":
      addLine("Opening YouTube...", terminal);
      newTab(youtube);
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

    case "gui":
      addLine("Opening gui...", terminal);
      newTab(gui);
      break;

    case "clear":
      clearContent();
      break;

    case "chess":
      addLine("Coming Soon...", terminal);
      break;

    case "":
      addLine("", terminal);
      break;

    default:
      addLine(
        `<p>zsh: command not found: ${cmd}. For a list of commands, type 'ls'.</p>`,
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
  scrollToCurrentInput();
  setTimeout(function () {
    window.open(link, "_blank");
  }, 500);
}

function clearContent() {
  const contentList = container.querySelectorAll(".output");
  contentList.forEach((element) => {
    element.remove();
  });
  scrollToCurrentInput();
}

function scrollToCurrentInput() {
  window.scrollTo(0, document.body.offsetHeight);
  input.focus();
  updateBlockCaret();
}
