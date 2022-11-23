'use strict';


const NumofStudentEl = document.getElementById('number');
const nameEl = document.getElementById('name');
const unittestEl = document.getElementById('unittest');
const prefinalEl = document.getElementById('prefinal');
const finalEl = document.getElementById('final');
let paraEl = document.getElementById('para');

let NumofStudent;
const student = [];

let i = 0;

function ok() {
    NumofStudent = NumofStudentEl.value;
}

function init() {
    nameEl.value = null;
    unittestEl.value = null;
    prefinalEl.value = null;
    finalEl.value = null;

}
function add() {
    const studentobj = {};
    if (NumofStudentEl.value) {
        if (NumofStudent--) {
            studentobj.name = nameEl.value;
            studentobj.mark = parseInt(unittestEl.value) + parseInt(prefinalEl.value) + parseInt(finalEl.value);
            // studentobj.prefinal = prefinalEl.value;
            // studentobj.final = finalEl.value;
            student[i++] = studentobj;
        }
        else {
            console.log("limit reached");
        }
    }
    else {
        alert("please select the count");
    }

    init();
}

function view() {
    let i = 0;
    for (i = 0; i < student.length; i++) {
        console.log(student[i].name, student[i].mark);
    }
}

function highmark() {
    let i, j = 0;

    if (student.length !== 0) {
        let high_mark = student[0].mark;
        if (student.length !== 1) {
            for (i = 1; i < student.length; i++) {
                if (high_mark < student[i].mark) {
                    highmark = student[i].mark;
                    j = i;
                }
            }
        }

        paraEl.innerHTML = `<h4>${student[j].name} scored highet mark with total : ${student[j].mark} and average : ${((student[j].mark / 300) * 100).toFixed(2)}</h4>`;
    }
    else {
        alert("please add the student details");
    }
}

clear.addEventListener('click', () => {
    NumofStudentEl.value = null;
    init();
})