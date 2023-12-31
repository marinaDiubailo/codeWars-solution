/**
 * DESCRIPTION:
Task
Make a custom esolang interpreter for the language Tick.
Tick is a descendant of Ticker but also very different data and command-wise.

Syntax/Info
Commands are given in character format. Non-command characters should be ignored.
Tick has an potentially infinite memory as opposed to Ticker(which you have a
special command to add a new cell) and only has 4 commands(as opposed to 7). Read about this esolang here.

Commands
>: Move data selector right

<: Move data selector left(infinite in both directions)

+: Increment memory cell by 1. 255+1=0

*: Add ascii value of memory cell to the output tape.
 */

function interpreter(str) {
    let idx = 0;
    let map = [];
    let num = 0;
    let result = '';

    for (let char of str) {
        if (char === '*') {
            result += String.fromCharCode(num);
        } else if (char === '>') {
            idx++;
        } else if (char === '<') {
            idx--;
        } else if (char === '+') {
            if (num === 255) {
                num = 0;
            } else {
                num += 1;
            }
            map[idx] = num;
        } else {
            continue;
        }
        num = map[idx] || 0;
    }

    return result;
}

console.log(
    interpreter(
        '+++werdfxcvcvbbvhgjgujuip+se+++++++++++w+wer++df+f+ghf+sqadsa++++++++++++++++++++++++uoui++++++++uio++++o++++++i+uiihfgd+df+++sd++++*>+++++sfd++2+34+4545++6567678890+8++++++456456+++++++001++1+1+1+11+11000++++++232434544++++++++++56765+56+++++++++++++sdfsdf345sd+++++++++sdf+d+++vxc+++4++45+dgfd3f++ef+++++34+w++34++f++wf+fwe3rfssd+fvcvbv+bvbn+m+++*>++++++++++++++++++++++SDF++DFERERDVDFGCVBVBNBNMSDFSFW+234+34+TEG4565658I890IUGHJDF++SFDS+FS+S+DSAD+Q+Q+++sdf+sdfs+SDF+SD+sdfsdfWEWETsdfsdf56456SDFSDF+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++**>+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*>++++++++++++++++++++++++++++++++*>+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*<<*>>>++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*<<<<*>>>>>+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++SFSSsd345SDFFSDFDS3453fsdfssDFSSDD+++++sdf*>+3435++++++++344353+++++++++sdsdff+++++++sdsdff++++++++*',
    ),
);
