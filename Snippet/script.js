let darkMode = false;
let canDragNow;
function ToggleDarkMode() {
  const bg = document.body;
  if (darkMode) {
    bg.style.backgroundImage = `none`;
    document.body.style.backgroundColor = "#ffffff";
    darkMode = false;
  } else {
    bg.style.backgroundImage = `none`;
    document.body.style.backgroundColor = "#1f2028";
    darkMode = true;
  }
}

let SnippetID = 0;
let selectedSnippetID = 0;

let noteID = 0;
let snippetZIndex = 0;

function changeSelectedSnippetID(SnippetID) {
  selectedSnippetID = SnippetID.match(/\d+/);

  console.log(selectedSnippetID);
  drag();
}

function createHelpSnippet() {
  document.body.innerHTML += `
  <div
  id="snippet_${SnippetID}"
  class="snippet"
  onmouseover="changeSelectedSnippetID(this.id)"
  style="z-index: ${SnippetID};  border: 2px solid #7279c6"
>
  <div id="snippet-header_${SnippetID}" class="snippet-header" style="background-color: #7279c6;">
    <input
      onchange="savePageState();changeSnippetColor(this.id)"
      type="color"
      id="headerColor_${SnippetID}"
      class="headerColor"
    />
    <input
      type="text"
      id="header_${SnippetID}"
      class="header"
      placeholder="oh hello there!"
      value="Help Snippet"
      onchange="savePageState(); saveTextInput(this.id)"
    />
    <button
      class="deleteNote"
      id="${SnippetID}"
      onclick="deleteSnippet(this.id)"
    >
      <img style="color: #ff1515" src="img/cross.svg" alt="X" />
    </button>
  </div>
  <div style="margin-top: 15px">
    <div id="Notes_${SnippetID}">
      <div id="snippet_data_1000000000000">
        <div>
          <div id="div_1000000000000" class="circle">
            <input
              type="color"
              class="color_circle"
              id="color_1000000000000"
              onchange="savePageState();changeNoteColor(this.id)"
            />
          </div>
          <input
            id="textInput_1000000000000"
            onchange="savePageState(); saveTextInput(this.id)"
            type="text"
            placeholder="Click on me to Write Something..."
          />
          <button id="1000000000000" onclick="deleteNote(this.id)">
            <img src="img/cross.svg" alt="X" />
          </button>
        </div>
      </div>
      <div id="snippet_data_1000000000001">
        <div>
          <div id="div_1000000000001" class="circle">
            <input
              type="color"
              class="color_circle"
              id="color_1000000000001"
              onchange="savePageState();changeNoteColor(this.id)"
            />
          </div>
          <input
            id="textInput_1000000000001"
            onchange="savePageState(); saveTextInput(this.id)"
            type="text"
            placeholder=""
            value="You Can Move a Snippet By Dragging it"
          />
          <button id="1000000000001" onclick="deleteNote(this.id)">
            <img src="img/cross.svg" alt="X" />
          </button>
        </div>
      </div>
      <div id="snippet_data_1000000000002">
        <div>
          <div id="div_1000000000002" class="circle">
            <input
              type="color"
              class="color_circle"
              id="color_1000000000002"
              onchange="savePageState();changeNoteColor(this.id)"
            />
          </div>
          <input
            id="textInput_1000000000002"
            onchange="savePageState(); saveTextInput(this.id)"
            type="text"
            value="Change the color of the Header"
          />
          <button id="1000000000002" onclick="deleteNote(this.id)">
            <img src="img/cross.svg" alt="X" />
          </button>
        </div>
      </div>
      <div id="snippet_data_1000000000003">
        <div>
          <div id="div_1000000000003" class="circle" style="background-color: #ff0000">
            <input
              type="color"
              class="color_circle"
              id="color_1000000000003"
              onchange="savePageState();changeNoteColor(this.id)"
            />
          </div>
          <input
            id="textInput_1000000000003"
            onchange="savePageState(); saveTextInput(this.id)"
            type="text"
            value="Change the color of the Bullet Circles"
          />
          <button id="1000000000003" onclick="deleteNote(this.id)"><img src="img/cross.svg" alt="X" />
          </button>
        </div>
      </div>
      <div id="snippet_data_1000000000004">
        <div>
          <div id="div_1000000000004" class="circle" style="background-color: #00ff00">
            <input
              type="color"
              class="color_circle"
              id="color_1000000000004"
              onchange="savePageState();changeNoteColor(this.id)"
            />
          </div>
          <input
            id="textInput_1000000000004"
            onchange="savePageState(); saveTextInput(this.id)"
            type="text"
            value="By clicking on them and select a color"
          />
          <button id="1000000000004" onclick="deleteNote(this.id)"><img src="img/cross.svg" alt="X" />
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

  
     `;
  drag();
  SnippetID++;
}
createHelpSnippet();

function createNewSnippet() {
  document.body.innerHTML += `
    <div id='snippet_${SnippetID}' class = "snippet" onmouseover="changeSelectedSnippetID(this.id)" style="z-index: ${SnippetID};">
       <div id='snippet-header_${SnippetID}' class = "snippet-header">
      
         <input onchange="savePageState();changeSnippetColor(this.id)" type='color' id='headerColor_${SnippetID}' class='headerColor'>
         <input type='text' id='header_${SnippetID}' class='header' placeholder = "New Snippet..." onchange="savePageState(); saveTextInput(this.id)">
         <button class="deleteNote"  id="${SnippetID}" onclick="deleteSnippet(this.id)"><img style="color: #ff1515;" src="img/cross.svg" alt="X"/></button>
        </div>
    <div style='margin-top: 15px;'>
    <div id='Notes_${SnippetID}'>
      <div id='snippet_data_${noteID}'>
        <div>
          <div
          id="div_${noteID}"
          class="circle"
          
          >
            <input
              type='color'
              class = "color_circle"
              id="color_${noteID}"
              onchange="savePageState();changeNoteColor(this.id)"
            />
          </div>
          <input id="textInput_${noteID}" onchange="savePageState(); saveTextInput(this.id)" type='text' placeholder = "Click on me to Write Something..."/>
          <button id="${noteID}" onclick="deleteNote(this.id)"><img src="img/cross.svg" alt="X"  /></button>
          </div>
          
    </div>
    </div>

    <button id="${SnippetID}" onclick='addNote(this.id)' class='addBtn'>+Add</button>
  </div>`;
  drag();
  SnippetID++;
  noteID++;
}

function addNote(btnID) {
  console.log(btnID);
  const doc = document.getElementById(`Notes_${btnID}`);

  doc.innerHTML += `
  <div id='snippet_data_${noteID}'>
   <div style='margin-top: 5px;'>
    
      
  <div>
    <div
    id="div_${noteID}"
      type='color'
      class="circle"
    ><input
        type='color'
        class = "color_circle"
        id="color_${noteID}"
        onchange="savePageState();changeNoteColor(this.id)"
      />
    </div>
    <input value="" id="textInput_${noteID}" onchange="savePageState(); saveTextInput(this.id)" type='text' placeholder = "Click on me to Write Something..."/>
    <button id="${noteID}" onclick="deleteNote(this.id)"><img src="img/cross.svg" alt="X"/></button>
    
</div>
</div>`;
  noteID++;
}

//===============================
//this is the Draggable Div codes:

function drag() {
  var activeElement = document.activeElement;

  // Check if the active element is an input with type text

  let isDragging = false;
  let offsetX, offsetY;

  const draggableSnippet = document.getElementById(
    `snippet_${selectedSnippetID}`
  );

  draggableSnippet.addEventListener("mousedown", (e) => {
    activeElement = document.activeElement;
    if (
      activeElement.tagName.toLowerCase() === "input" ||
      activeElement.tagName.toLowerCase() === "button"
    ) {
      canDragNow = false;
    } else {
      canDragNow = true;
    }
    if (canDragNow) {
      document.getElementById(`snippet_${selectedSnippetID}`).style.zIndex =
        snippetZIndex;
      snippetZIndex += 100;
      isDragging = true;
      offsetX = e.clientX - draggableSnippet.getBoundingClientRect().left;
      offsetY = e.clientY - draggableSnippet.getBoundingClientRect().top;
      draggableSnippet.style.cursor = "grabbing";
    }
  });

  document.addEventListener("mousemove", (e) => {
    activeElement = document.activeElement;
    if (
      activeElement.tagName.toLowerCase() === "input" ||
      activeElement.tagName.toLowerCase() === "button"
    ) {
      canDragNow = false;
    } else {
      canDragNow = true;
    }
    if (canDragNow) {
      if (isDragging) {
        const x = e.clientX - offsetX;
        const y = e.clientY - offsetY;
        draggableSnippet.style.left = x + "px";
        draggableSnippet.style.top = y + "px";
      }
    }
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
    draggableSnippet.style.cursor = "grab";
  });
}

//end of the Draggable Div codes.
//===============================
let pageStateNeedsToRemove = false;
// Function to save the page state
function savePageState() {
  if (!pageStateNeedsToRemove) {
    var pageState = {
      html: document.documentElement.outerHTML,
      // Add your JavaScript variables to save here
      variable1: document.body.innerHTML,
      variable2: SnippetID,
      _darkMode: darkMode,
      _noteID: noteID,
    };
    localStorage.setItem("savedPageState", JSON.stringify(pageState));
    console.log("page has saved!");
    pageStateNeedsToRemove = false;
  } else {
    deletePageState();
  }
}

// Function to load the page state
function loadPageState() {
  var savedPageState = localStorage.getItem("savedPageState");
  initComponent();
  if (savedPageState) {
    var pageState = JSON.parse(savedPageState);

    // Restore HTML content
    //document.documentElement.outerHTML = pageState.html;
    document.body.innerHTML = pageState.variable1;

    // Restore JavaScript variables
    var variable1 = pageState.variable1;
    SnippetID = pageState.variable2;
    noteID = pageState._noteID;
    darkMode = pageState._darkMode;

    // Add more logic to restore other variables as needed

    // Display loaded variables (optional)
    if (!darkMode) {
      document.body.style.backgroundColor = "#ffffff";
    } else {
      document.body.style.backgroundColor = "#1f2028";
    }
    //console.log("Loaded variable 1:", variable1);
    //console.log("Loaded variable 2:", variable2);
  }
  console.log("page has loaded!");
}

function deletePageState() {
  if (
    window.confirm(
      "Do you want to delete all saved Notes and settings?? This can't be reversed!."
    )
  ) {
    pageStateNeedsToRemove = true;
    var pageState = {
      html: "",
      // Add your JavaScript variables to save here
      variable1: "",
      variable2: 0,
      _noteID: 0,
    };
    localStorage.removeItem("savedPageState");
    console.log("page has Deleted!");

    location.reload();
  }
}

// Call the loadPageState function when the page loads
window.addEventListener("DOMContentLoaded", loadPageState);

// Call the savePageState function when the page is about to be unloaded
window.addEventListener("beforeunload", savePageState);

function saveTextInput(btnID) {
  const textInput = document.getElementById(btnID);
  textInput.setAttribute("value", textInput.value);
  //console.log("text saved");
  savePageState();
}

function changeSnippetColor(colorID) {
  color = document.getElementById(colorID);
  _snippetID = colorID.match(/\d+/);
  header = document.getElementById(`snippet-header_${_snippetID}`);
  snippetDiv = document.getElementById(`snippet_${_snippetID}`);
  header.style.backgroundColor = color.value;
  snippetDiv.style.borderColor = color.value;
  toggleBackground(_snippetID, color.value);
  console.log(color.value);
}

function changeNoteColor(colorID) {
  _snippetID = colorID.match(/\d+/);
  color = document.getElementById(`color_${_snippetID}`);
  header = document.getElementById(`div_${_snippetID}`);
  header.style.backgroundColor = color.value;
  console.log(color.value);
}

//==============================================
//Code for changing the text color if background is too dark:
function toggleBackground(textID, backgroundColor) {
  var contentElement = document.getElementById(`header_${textID}`);

  // Check the brightness of the background color
  var brightness = calculateBrightness(backgroundColor);

  // Set text color based on background brightness
  var newTextColor = brightness < 128 ? "white" : "black";

  contentElement.style.color = newTextColor;
}

function calculateBrightness(color) {
  // Convert hexadecimal color to RGB
  var hex = color.replace(/#/, "");
  var r = parseInt(hex.substring(0, 2), 16);
  var g = parseInt(hex.substring(2, 4), 16);
  var b = parseInt(hex.substring(4, 6), 16);

  // Calculate brightness using the formula
  return (r * 299 + g * 587 + b * 114) / 1000;
}

function deleteNote(btnID) {
  note = document.getElementById(`snippet_data_${btnID}`);
  note.remove();
}

function deleteSnippet(btnID) {
  if (window.confirm("Do you really want to delete this snippet?")) {
    snippet = document.getElementById(`snippet_${btnID}`);
    snippet.remove();
  } else {
  }
}

let toolBoxIsShowing = false;
function toggleToolBox() {
  const toolBoxDiv = document.getElementById("toolBoxDiv");
  const clockBtn = document.getElementById("clockBtn");
  const stopWatchBtn = document.getElementById("stopWatchBtn");
  const weatherBtn = document.getElementById("weatherBtn");
  if (!toolBoxIsShowing) {
    // toolBoxDiv.style.visibility = "visible";
    weatherBtn.style.visibility = "visible";
    setTimeout(() => (stopWatchBtn.style.visibility = "visible"), 50);
    setTimeout(() => (clockBtn.style.visibility = "visible"), 100);

    toolBoxIsShowing = true;
  } else {
    //toolBoxDiv.style.visibility = "hidden";
    clockBtn.style.visibility = "hidden";
    setTimeout(() => (stopWatchBtn.style.visibility = "hidden"), 50);
    setTimeout(() => (weatherBtn.style.visibility = "hidden"), 100);
    toolBoxIsShowing = false;
  }
}

function createStopWatchSnippet(timerID) {
  if (document.getElementById("snippet_999999999999") === null) {
    console.log("New Stopwatch Made");
    document.body.innerHTML += `
    <div id='snippet_999999999999' class = "snippet" onmouseover="changeSelectedSnippetID(this.id)" style="z-index: 1;border: 2px solid #8f7096;">
      <div style="background-color:#8f7096" id='snippet-header_999999999999' class = "snippet-header">
     
        <input onchange="savePageState();changeSnippetColor(this.id)" type='color' id='headerColor_999999999999' class='headerColor'>
        <input  type='text' id='header_999999999999' class='header' placeholder = "New StopWatch..." onchange="savePageState(); saveTextInput(this.id)">
        <button class="deleteNote"  id="999999999999" onclick="deleteSnippet(999999999999)"><img style="color: #ff1515;" src="img/cross.svg" alt="X"/></button>
       </div>
   <div style='margin-top: 15px;'>
   <div id='Notes_0'>
     <div id='snippet_data'>
       <div>
       <h1 id="timer_0">00:00:00:000</h1>
         </div>
    
         </div>
         
   </div>
   </div>
   <button style="border-radius: 2px;" id="startbtn_0" onclick='toggleTimer(0)' class='addBtn'>Start</button>
   <button id="lapbtn_0" onclick='lap(0)' class='addBtn'>Reset</button>
  </div>`;

    SnippetID++;
  }
}
//=============================================================================
//=============================================================================
//stop watch code gose here:
//================================

//let lapList = document.getElementById("laps");

let timerIsRunning = false;
let timerText;
let startBtn;
let lapBtn;

let mSec = 0;
let sec = 0;
let minute = 0;
let hour = 0;

let elapsedTime = 0;
let startTime;
let firstTime = true;

function toggleTimer(snippetId) {
  timerText = document.getElementById(`timer_0`);
  startBtn = document.getElementById(`startbtn_0`);
  lapBtn = document.getElementById(`lapbtn_0`);
  if (firstTime) {
    elapsedTime = 0;
    hour = Math.floor(elapsedTime / (1000 * 60 * 60));
    min = Math.floor((elapsedTime / (1000 * 60)) % 60);
    sec = Math.floor((elapsedTime / 1000) % 60);
    msec = Math.floor(elapsedTime % 1000);

    timerText.textContent = hour + ":" + min + ":" + sec + ":" + msec;
    firstTime = false;
  }
  if (!timerIsRunning) {
    startTime = Date.now() - elapsedTime;
    startBtn.innerHTML = "Pause";
    lapBtn.textContent = "Reset";
    timerIsRunning = true;
    update();
  } else {
    startBtn.innerHTML = "Resume";
    lapBtn.textContent = "Reset";
    elapsedTime = Date.now() - startTime;
    timerIsRunning = false;
  }
  console.log("timer Toggled");
  setInterval((snippetId) => {
    update(snippetId);
  }, 1);
}

let lapIndex = 1;
function lap(snippetId) {
  timerText = document.getElementById(`timer_0`);
  startBtn = document.getElementById(`startbtn_0`);
  lapBtn = document.getElementById(`lapbtn_0`);
  if (!timerIsRunning) {
    //reset the whole timer
    elapsedTime = 0;

    lapIndex = 1;

    timerText.textContent = "00:00:00:000";
    lapBtn.textContent = "Reset";
    startBtn.innerHTML = "Start";
    //lapList.innerHTML = "";
    firstTime = true;
  } else {
    //lapList.innerHTML =
    //   lapList.innerHTML + lapIndex + ". " + timerText.textContent + "<br>";
    // lapIndex++;
  }
}

function update(snippetId) {
  timerText = document.getElementById(`timer_0`);
  startBtn = document.getElementById(`startbtn_0`);
  lapBtn = document.getElementById(`lapbtn_0`);

  if (timerIsRunning) {
    elapsedTime = Date.now() - startTime;

    hour = Math.floor(elapsedTime / (1000 * 60 * 60))
      .toString()
      .padStart(2, 0);
    min = Math.floor((elapsedTime / (1000 * 60)) % 60)
      .toString()
      .padStart(2, 0);
    sec = Math.floor((elapsedTime / 1000) % 60)
      .toString()
      .padStart(2, 0);
    msec = Math.floor(elapsedTime % 1000)
      .toString()
      .padStart(3, 0);
    timerText.textContent = hour + ":" + min + ":" + sec + ":" + msec;
  }

  console.log("timer Updated");
}

function createClockSnippet() {
  console.log("New Clock Made");
  if (document.getElementById("snippet_9999999999999") === null) {
    document.body.innerHTML += `
  <div id='snippet_9999999999999' class = "snippet" onmouseover="changeSelectedSnippetID(this.id)" style="z-index: 1;border: 2px solid #e0904e;">
    <div style="background-color:#e0904e" id='snippet-header_9999999999999' class = "snippet-header">
   
      <input onchange="savePageState();changeSnippetColor(this.id)" type='color' id='headerColor_9999999999999' class='headerColor'>
      <input  type='text' id='header_9999999999999' class='header' placeholder = "New Clock..." onchange="savePageState(); saveTextInput(this.id)">
      <button class="deleteNote"  id="9999999999999" onclick="deleteSnippet(9999999999999)"><img style="color: #ff1515;" src="img/cross.svg" alt="X"/></button>
     </div>
 <div style='margin-top: 15px;'>
 <div id='Notes_0'>
   <div id='snippet_data'>
     <div>
     <h1 id="clock_0">00:00:00:000</h1>
       </div>
  
       </div>
       
 </div>
 </div>
</div>`;
    updateClocks();
    SnippetID++;
    setInterval(() => {
      updateClocks();
    }, 100);
  }
}

function updateClocks() {
  const clock = document.getElementById("clock_0");
  if (clock === null) {
    return;
  }
  const date = new Date();
  let time = date.getHours() < 12 ? "AM" : "PM";

  clock.textContent =
    (date.getHours() % 12).toString().padStart(2, 0) +
    ":" +
    date.getMinutes().toString().padStart(2, 0) +
    ":" +
    date.getSeconds().toString().padStart(2, 0) +
    `  ${time}`;

  console.log(date.getHours());
}

function changeBackground() {
  var input = document.createElement("input");
  input.type = "file";

  input.onchange = (e) => {
    // getting a hold of the file reference
    var file = e.target.files[0];

    // setting up the reader
    var reader = new FileReader();
    reader.readAsDataURL(file);

    // here we tell the reader what to do when it's done reading...
    reader.onload = (readerEvent) => {
      var content = readerEvent.target.result; // this is the content!
      const bg = document.body;

      bg.style.backgroundImage = `url("${content}")`;
      console.log(content);
    };
  };

  input.click();
}

function initComponent() {
  if (document.getElementById("snippet_9999999999999") !== "") {
    setInterval(() => {
      updateClocks();
    }, 100);
  }
}
