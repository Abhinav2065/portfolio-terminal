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
document.addEventListener('DOMContentLoaded',function() {
    const commandInput = document.getElementById('command');
    const outputContainer = document.getElementById('output');
    console.log(commandInput);
    console.log(outputContainer);


    commandInput.addEventListener('keydown', function(e) {
          if (e.key === 'Enter') {
            const command = this.value;
            console.log(command)
            head = "abhinav@arch&nbsp;>&nbsp; " + command;
            if (command === 'ls') {
                past_cmd = past_cmd + head + "<p>about.me projects.txt contact.me</p>";
            }
            else if (command === "help") {
                past_cmd = past_cmd + head + help;
            }
            else if (command === "clear") {
                past_cmd = "";
            }
            else {
                past_cmd = past_cmd + head + "<div></div>" + command + `<p style="display: inline-block;">: command not found.</p><div></div>`;
            }

            document.getElementById("past-cmd").innerHTML = past_cmd;
            this.value='';
          }
        });

})