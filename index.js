'use strict';

/**
 * Checks if the input text length is greater than the maximum admited.
 * 
 * @param {string} content textField.value
 * @param {number} max 
 * @returns {boolean}
 */
const ensureContentLength = (content, max) => {
    return (content.length > max);
}

/**
 * Modifies the HTML counter.
 * Returns a false only if the given text field length is greater than a maximum.
 * 
 * @listens onkeyup
 * @param {Object} textField
 * @param {Object} counter      span that contains the countdown of chars
 * @param {number} maxCount     maximum admited chars
 * @returns {boolean}
 */
exports.lengthValidation = function(textField, counter, maxCount){
    textField.onkeyup = function(){
        counter.innerHTML = maxCount - this.value.length;

        if (ensureContentLength(this.value, maxCount)) {
            alert(`The length of this input should be a maximum of ${maxCount} characters!`);
            return false;
        } else {
            return true;
        }
    }
}