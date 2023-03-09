const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const p1 = document.createElement("p");
p1.textContent = "Hey I'm red!";
p1.setAttribute("style", "color:red;");
container.appendChild(p1);

const h3 = document.createElement("h3");
h3.textContent = "Hey I'm a blue h3!";
h3.setAttribute("style", "color:blue;");
container.appendChild(h3);

const div = document.createElement("div");
div.setAttribute("style", "background-color: pink; border: 1px solid black;")


const h1 = document.createElement("h1");
h1.textContent = "Hey I'm in a div!";
div.appendChild(h1);

const p2 = document.createElement("p");
p2.textContent = "ME TOO!";
div.appendChild(p2);

container.appendChild(div);

const btn = document.querySelector('#btn');

btn.addEventListener('click', function (e) {
    e.target.style.background = 'green';
});

//* buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

//* we use the .forEach method to iterate through each button
buttons.forEach((button) => {

    //* and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        alert(button.id);
    });
});