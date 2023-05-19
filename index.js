const buttonsElement = document.getElementById('buttons');

const MAP = {};

class Node {
    constructor(id, top, left) {
        this.id = id;
        this.top = top;
        this.left = left;
        this.child = [];
    }

    addChild(node) {
        this.child.push(node);
    }
}

const createButton = (node) => {
    const buttonElement = document.createElement('button');
    buttonElement.dataset.id = node.id;
    buttonElement.innerText = node.id;
    buttonElement.style.position = 'absolute';
    buttonElement.style.top = `${node.top}px`;
    buttonElement.style.left = `${node.left}px`;
    buttonsElement.append(buttonElement);
    return buttonElement;
};

const buildNodeId = (parentId, nodeIndex) => `${parentId}_${nodeIndex}`
const buildCoordinate = ({top, left, child}) => ({
    top: top + child.length * 24 + 24,
    left: left + 100
});

const handleClick = (event) => {
    const {id} = event.target.dataset;
    const parentNode = MAP[id];
    console.log('id', id, parentNode);
    const {top, left} = buildCoordinate(parentNode);
    const child = buildNode(buildNodeId(parentNode.id, parentNode.child.length), top, left);
    parentNode.addChild(child);
};

function buildNode(id, top, left){
    const node = new Node(id, top, left);
    const buttonElement = createButton(node);
    buttonElement.addEventListener('click', handleClick);
    MAP[id] = node;
    return node;
}

window.MAP = MAP;

buildNode('root', 50, 50);
