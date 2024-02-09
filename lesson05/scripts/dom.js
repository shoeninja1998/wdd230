const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', function() 
{
    if (input.value != '')
    {
    // List item
    const li = document.createElement('li');
    li.textContent = input.value;

    // Delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'X';
        deleteButton.addEventListener('click', function()
        {
            list.removeChild(li);
            input.focus();
            input.value = '';
            
        })

        li.append(deleteButton);
        list.append(li);
    }
});