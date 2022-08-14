// const init = () => {

function submitData(userName, userEmail) {
    const userObject = {
        name: userName,
        email: userEmail,
    };

    const p = document.createElement('p');
    const body = document.querySelector('body');

    const fetchRequest = () => fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(userObject),
    })
    .then(res => res.json())
    .then(data => {
        p.textContent = data.id;
        body.appendChild(p);   
    })
    .catch(error => {
        p.textContent = error.message;
        body.appendChild(p);
    });

    return fetchRequest();
}

    // submitData('kevin6', 'keviniscool@kevin.com6');
// }


// document.addEventListener('DOMContentLoaded', init);