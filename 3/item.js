export function drawItem(item) {
    const divItem = document.createElement('div');
    const imgItem = document.createElement('img');
    imgItem.src = item.path;
    const nameItem = document.createElement('h3');
    nameItem.textContent = item.name;
    divItem.appendChild(imgItem);
    divItem.appendChild(nameItem);
    return divItem
}