'use strict';

const list = document.querySelector('ul');

const todo = () => {
  const newElem = prompt('Новая задача: ', '');

  const createElem = () => {
    const elem = document.createElement('li');
    elem.textContent = newElem;
    list.append(elem);
  };

  const deleteElement = () => {
    list.lastElementChild.remove();
  };

  const clearList = () => {
    list.innerHTML = '';
  };

  if (newElem === 'exit' || newElem === null) {
    return false;
  } else if (newElem === 'del') {
    if (list.lastElementChild) {
      deleteElement();
      todo();
    } else {
      todo();
    }
  } else if (newElem === 'clear') {
    clearList();
    todo();
  } else if (!newElem.trim().length) {
    todo();
  } else if (newElem) {
    createElem();
    todo();
  }
};

todo();
