document.getElementById('add-task-btn').addEventListener('click', addTask);

function addTask() {
    const title = document.getElementById('task-title').value;
    const description = document.getElementById('task-desc').value;
    const deadline = new Date(document.getElementById('task-deadline').value);
    const priority = document.getElementById('task-priority').value;
    const category = document.getElementById('task-category').value;

    const taskItem = document.createElement('div');
    taskItem.classList.add('task-item', `${priority}-priority`);        

    taskItem.innerHTML = `
        <strong>${title}</strong> - ${description}<br>
        <small>Due: ${deadline.toLocaleString()} | Category: ${category}</small>
        <button class="complete-btn">Complete</button>
    `;

    const taskList = document.getElementById('task-list');
    taskList.appendChild(taskItem);

    const completeBtn = taskItem.querySelector('.complete-btn');
    completeBtn.addEventListener('click', () => {
        document.getElementById('completed-task-list').appendChild(taskItem);
        taskItem.removeChild(completeBtn); 
    });

    // Deadline Notification (visual alert)
    const checkDeadline = setInterval(() => {
        const currentTime = new Date();

        if (currentTime >= deadline) {
            taskItem.style.backgroundColor = 'red'; // Change color for alert
            taskItem.style.color = 'white';

            clearInterval(checkDeadline); // Stop checking after deadline
        }
    }, 1000); // Check every 1 second

    // Clear the form after task is added
    document.getElementById('task-title').value = '';
    document.getElementById('task-desc').value = '';
    document.getElementById('task-deadline').value = '';
    document.getElementById('task-priority').value = 'medium';
    document.getElementById('task-category').value = 'work';
}
