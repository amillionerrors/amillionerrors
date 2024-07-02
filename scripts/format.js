let linenos = document.getElementsByClassName('lineno');

// code blocks with line numbers
// This edits CSS so if your CSS isn't working this is probably overriding
// This also messes with the final html to right-align the line numbers
for (let elem of linenos) {
    let nums = [];
    let newContent = "";
    for (n of elem.textContent.split("\n")) {
        if (n !== "") {
            nums.push(n);
        }
    }
    let longestNum = nums[nums.length-2].length;

    for (n of nums) {
        let padding = "";
        for (let i=0; i<longestNum-n.length; i++) {
            padding += " ";
        }
        if (n !== nums[-1]) {
            newContent += padding + n + "\n";
        } else {
            newContent += padding + n;
        }
    }
    elem.textContent = newContent;

    elem.style = `width: ${longestNum * 10}px;`;
    elem.parentElement.style = `width: ${longestNum * 10}px;`;
}