// Some code snippets have been provided to you for ease of coding.
// You can choose to remove or change any of them to suit your needs.

var outstandingtasks=[];
var finishedtasks=[];
var maxtaskid=0;

function bootstrap()
{
    // For Q6, only display specific section when selected
    document.getElementById('home').style.display = 'block';
    
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            var targetId = this.getAttribute('href').substring(1);
            document.querySelectorAll('#container > div').forEach(div => {
                div.style.display = 'none';
            });
            document.getElementById(targetId).style.display = 'block';
        });
    });
    // Code for Q7 starts here. This code restores the values
    // of variables to their previous values (i.e., before browser
    // was closed). 

    // Code for Q7 ends here.
}
function addfunction()
{
    // Code for Q2 starts here. This function uses DOM read
    // to get the values of HTML fields. Subsequently, it
    // adds them to the JS variable called outstandingtasks. 
    // You are also required to save the contents of this variable
    // in a JS cookie (Q7).
    
    // Alert when an add is requested to an already full outstanding tasks list (Q4)
    if (outstandingtasks.length >= 10){
        alert("Maximum limit of 10 outstanding tasks reached. Please complete some tasks and try again.");
        return;
    }
    var taskDescription = document.getElementById('taskDescription').value;
    var taskPriority = document.getElementById('taskPriority').value;
    var taskDeadline = document.getElementById('taskDeadline').value;

    var newTask = {
        id: ++maxtaskid,
        description: taskDescription,
        priority: taskPriority,
        deadline: taskDeadline,
        status: "Outstanding"
    };

    outstandingtasks.push(newTask);
    
    displayfunction()

    //Code for Q2 ends here.
    console.log(outstandingtasks);
}

function finishfunction()
{
    // Code for Q3 starts here. This function uses DOM read to
    // get the serial number from the user. Subsequently, it
    // searches/finds the Task matching the serial number and
    // deletes the task from outstandingtasks. Do not forget to
    // add the task to finished tasks before deleting it.
    var taskID = document.getElementById('taskID').value;
    var index = outstandingtasks.findIndex(task => task.id === taskID);
    if (index >= 0) {
        var finishedTask = outstandingtasks.splice(index, 1)[0];
        finishedTask.status = 'Finished';
        var taskDescription = finishedTask.description;
        finishedtasks.push(finishedTask);
        alert("Task '" + taskDescription + "' has completed. Congrats!");
    } else {
        alert("Task ID not found. Please try again");
        console.log("Task ID not found.");
    }
    
    displayfunction();

    // Code for Q3 ends.
    console.log(outstandingtasks);
}

function displayfunction()
{
    // Code for Q4 starts here. This function identifies the HTML
    // element corresponding to the Tables for outstanding 
    // and finished tasks. You must create the table by adding rows,
    // columns, and finally populate the text in the table. Code
    // for Outstanding tasks and finished tasks is similar. Use
    // the Demo code used in class as a starting point for table
    // creation using JS.
    var outstandingTable = document.getElementById('displayoutstanding').getElementsByTagName('tbody')[0];
    var completedTable = document.getElementById('displaycompleted').getElementsByTagName('tbody')[0];

    outstandingTable.innerHTML = '';
    completedTable.innerHTML = '';

    outstandingtasks.forEach(function(task) {
        var row = outstandingTable.insertRow();
        row.insertCell(0).textContent = task.id;
        row.insertCell(1).textContent = task.description;
        row.insertCell(2).textContent = task.priority;
        row.insertCell(3).textContent = task.deadline;
        row.insertCell(4).textContent = task.status;
    });
    
    finishedtasks.forEach(function(task) {
        var row = completedTable.insertRow();
        row.insertCell(0).textContent = task.id;
        row.insertCell(1).textContent = task.description;
        row.insertCell(2).textContent = task.priority;
        row.insertCell(3).textContent = task.deadline;
        row.insertCell(4).textContent = task.status;
    });
    
    
    // Code for Q4 ends.
}

