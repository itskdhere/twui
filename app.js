const shell = document.getElementById('shell');
// const cmd = document.getElementById('cmd');
// const hostname_and_input = document.getElementById('hostname-and-input');
// const hostname = document.getElementById('hostname');
// const cmd_input = document.getElementById('cmd-input');
// const cmd_output = document.getElementById('cmd-output');

const charList = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

let inputCmdArr = [];
let inputCmdStr = '';

let _newCmd_input = undefined;
let _newCmd_output = undefined;

let shellHeight = 95;
const shellHeightInc = 15;

window.onload = () => {
    shell.style.height = `${shellHeight}vh`
    newPrompt();
}

window.addEventListener("keypress", (e) => {
    console.log('Pressed: ' + e.key);

    if (e.key == 'Enter') {
        const cmd_output = document.getElementById('cmd-output');

        let output = exec(inputCmdStr);

        cmd_output.textContent = output;

        _newCmd_input.removeAttribute('id');
        _newCmd_output.removeAttribute('id');

        _newCmd_input = undefined;
        _newCmd_output = undefined;

        inputCmdArr = [];
        inputCmdStr = '';

        shellHeight += shellHeightInc;

        shell.style.height = `${shellHeight}vh`;

        newPrompt();

    } else {
        inputCmdArr.push(e.key);
        inputCmdStr = inputCmdArr.join('');

        const cmd_input = document.getElementById('cmd-input');

        cmd_input.textContent = inputCmdStr;
    }

});

function exec(inputCommand) {
    switch(inputCommand) {
        case "ls":
            return `home var bin`;
        case "help":
            return `help`;
        default:
            return `Command Not Found`
    }
}

function newPrompt() {
    // newCmd.id = 'cmd';

    // newHostname_and_input.id = 'hostname-and-input';
    // newHostname.id = 'hostname';

    let newCmd = document.createElement('div');
    newCmd.classList.add('cmd');

    let newHostname_and_input = document.createElement('div');
    newHostname_and_input.classList.add('hostname-and-input');

    let newHostname = document.createElement('p');
    newHostname.classList.add('hostname');
    newHostname.textContent = `${window.location.hostname} ->`;

    let newCmd_input = document.createElement('p');
    newCmd_input.classList.add('cmd-input');

    let newCmd_output = document.createElement('div');
    newCmd_output.classList.add('cmd-output');

    _newCmd_input = newCmd_input;
    _newCmd_output = newCmd_output;

    newCmd_input.id = 'cmd-input';
    newCmd_output.id = 'cmd-output';

    newHostname_and_input.appendChild(newHostname);
    newHostname_and_input.appendChild(newCmd_input);

    newCmd.appendChild(newHostname_and_input);
    newCmd.appendChild(newCmd_output);

    shell.appendChild(newCmd);
}



/*
<div class="shell" id="shell">
    <div class="cmd">
        <div class="hostname-and-input">
            <p class="hostname">hostname -></p>
            <p class="cmd-input">cmd-input</p>
        </div>
        <div class="cmd-output">
            cmd-output
        </div>
    </div>
</div>
*/

// let newLi = document.createElement('li');
// newLi.textContent = itemVal;
// newLi.addEventListener('dblclick', () => {
//     remove(ref(database, `${uuid}/${itemId}`));
// });
// list.appendChild(newLi);


    // newCmd.id = 'cmd';

    // newHostname_and_input.id = 'hostname-and-input'

    // newHostname.id = 'hostname';

    // newCmd_input.id = 'cmd-input';
    // newCmd_input.textContent = inputCmdStr;

    // newCmd_output.id = 'cmd-output'
    // newCmd_output.textContent = 'cmd-output';


    // newHostname_and_input.appendChild(newHostname);
    // newHostname_and_input.appendChild(newCmd_input);

    // newCmd.appendChild(newHostname_and_input);
    // newCmd.appendChild(newCmd_output);

    // shell.appendChild(newCmd);

    // console.log(newCmd);