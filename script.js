const tree = document.getElementById('tree');
const addNodeButton = document.getElementById('addNodeButton');
const updateNodeButton = document.getElementById('updateNodeButton');
const deleteNodeButton = document.getElementById('deleteNodeButton');

let selectedNode = null;

function createNodeElement(name, value) {
    const node = document.createElement('div');
    node.classList.add('tree-node');

    const nodeName = document.createElement('span');
    nodeName.classList.add('node-name');
    nodeName.textContent = name;

    const nodeValue = document.createElement('span');
    nodeValue.classList.add('node-value');
    nodeValue.textContent = value;

    const nodeButtons = document.createElement('div');
    nodeButtons.classList.add('node-buttons');

    const selectButton = document.createElement('button');
    selectButton.textContent = 'Select';
    selectButton.addEventListener('click', () => {
        if (selectedNode) {
            selectedNode.classList.remove('selected');
        }
        selectedNode = node;
        selectedNode.classList.add('selected');
    });

    const addChildButton = document.createElement('button');
    addChildButton.textContent = 'Add Child';
    addChildButton.addEventListener('click', () => {
        addNode(node);
    });

    nodeButtons.appendChild(selectButton);
    nodeButtons.appendChild(addChildButton);

    node.appendChild(nodeName);
    node.appendChild(nodeValue);
    node.appendChild(nodeButtons);

    return node;
}

function addNode(parentNode) {
    const newNode = createNodeElement('New Node', '');
    parentNode.parentElement.insertBefore(newNode, parentNode.nextElementSibling);
}

function updateNode() {
    if (selectedNode) {
        const newName = prompt('Enter new name:');
        const newValue = prompt('Enter new value:');

        if (newName && newValue) {
            selectedNode.querySelector('.node-name').textContent = newName;
            selectedNode.querySelector('.node-value').textContent = newValue;
        }
    } else {
        alert('No node selected');
    }
}

function deleteNode() {
    if (selectedNode) {
        selectedNode.parentElement.removeChild(selectedNode);
        selectedNode = null;
    } else {
        alert('No node selected');
    }
}

addNodeButton.addEventListener('click', () => {
    addNode(tree);
});

updateNodeButton.addEventListener('click', () => {
    updateNode();
});

deleteNodeButton.addEventListener('click', () => {
    deleteNode();
});

// Add initial nodes
addNode(tree);
addNode(tree);