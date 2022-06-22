'use strict';

const ad = document.querySelector('.ads');
ad.remove();

const items = document.querySelectorAll('.item');
const propsLists = document.querySelectorAll('.props__list');
const propsItemsTwo = document.querySelectorAll('.props__item_two');
const propsItemsThree = document.querySelectorAll('.props__item_three');
const propsItemsFour = document.querySelectorAll('.props__item_four');
const propsItemsFive = document.querySelectorAll('.props__item_five');

items[0].before(items[1]);
items[1].after(items[2]);
items[2].after(items[3]);

propsItemsFour[2].after(propsItemsFour[5]);
propsItemsFive.forEach(item => propsLists[4].append(item));
propsItemsThree.forEach(item => propsLists[3].append(item));
propsLists[2].append(propsItemsTwo[8], propsItemsTwo[9]);
