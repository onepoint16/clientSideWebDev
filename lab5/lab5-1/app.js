import { square } from './lib';
import $ from 'jquery';
import './styles.scss';

let i = 2;

function setMessageText(msg) {
    $('#message').text(msg);
}

setMessageText("The Square of " + i + " is " + square(i));

$('#message').click(() => {
    i++;
    setMessageText("The Square of " + i + " is " + square(i));
})