const cmd = "";
let duplicateCount = 0;
let head = "abhinav@arch&nbsp;>&nbsp; ";
let past_cmd = "";


let help = ` 
            <div class="aqua" >Commands:</div> <div>
            <div class="aqua" style="display: inline-block;">ls</div> - List all items.</div></div>
            <div><div class="aqua" style="display: inline-block;">clear</div> - Clear past outputs.</div>
            <div><div class="aqua" style="display: inline-block;">cat</div> - View a file.</div>
            <div><div class="aqua" style="display: inline-block;">cd</div> - Change Directory.

            </div>

`

let about = `
            <br>
            <div class="aqua">Hi!!</div>
            <div class="about">My name is Abhinav Siluwal, I am 17 years old <b>high school student</b> and <b>STEM enthusiast</b> from Kathmandu, Nepal.</div>
            <div class="about">A 12th grader, Builder, <b>President of STEM club</b> in my high school, <b>Founder and Executive Director of Learn Robo Nepal</b>, a non profit. </div>
            <div></div>
`

let projects = `
            <br>
            <div class="aqua">Some of the Projects I have worked on: </div>
            <br><br>
            <div class="aqua">Rocker-bogie robo</div>
            <p>I made a Rover Like robot which had the rocker-bogie suspension mechanism.</p>
            <div class="aqua">Self Balancing Robot</div>
            <p>I made a robot that balanced itself on 2 wheels using the PID algorithm.</p>
            <div class="aqua">Smart Car Parking System</div>
            <p>A simple smart car parking system using arduino and sensors which tells you the amount of available space in a parking lot before entering the parking lot.</p>
            <div class="aqua">Robo Race</div>
            <p>I made off-road robo for robo race competations.</p>
            <div class="aqua">Quadcopter Drone</div>
            <p>I made a simple Quadcopter Drone using KK 2.1.5 flight controller.</p>
`

let contact = `
            <br>
            <div class="aqua">Feel free to contact me via the followings:</div>
            <div class="aqua_n"> abhinavsl511@gmail.com</div>
            <div class="aqua_n"> +977 9813127946</div>
       
`

document.addEventListener('DOMContentLoaded',function() {
    const commandInput = document.getElementById('command');
    const outputContainer = document.getElementById('output');
    console.log(commandInput);
    console.log(outputContainer);


    commandInput.addEventListener('keydown', function(e) {
          if (e.key === 'Enter') {
            const command = this.value;
            console.log(command)
            head = `<a style="color: #a8a6a6;">abhinav@arch&nbsp;>&nbsp;<a> ` + command;
            if (command === 'ls') {
                past_cmd = past_cmd + head + "<p>about.me &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;projects.txt &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;contact.me</p>";
            }
            else if (command === "help") {
                past_cmd = past_cmd + head + help;
            }
            else if (command === "clear") {
                past_cmd = "";
            }
            else if (command.startsWith("cat")) {
                if (command.includes("about.me")) {
                    past_cmd = past_cmd + head + about;
                }
                else if (command.includes("projects")) {
                    past_cmd = past_cmd + head + projects;
                }
                else if (command.includes("contact.me")) {
                    past_cmd = past_cmd + head + contact;
                }
                else {
                    past_cmd = past_cmd + head + "<div></div>" + command + `<p style="display: inline-block;">: file not found.</p><div></div>`;

                }
            }
            else {
                past_cmd = past_cmd + head + "<div></div>" + command + `<p style="display: inline-block;">: command not found.</p><div></div>`;
            }

            document.getElementById("past-cmd").innerHTML = past_cmd;
            this.value='';
          }
        });

})