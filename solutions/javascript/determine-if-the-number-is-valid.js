const STATE = {
    INTEGER: 'INTEGER',
    DECIMAL: 'DECIMAL',
    START: 'START',
    UNKNOWN: 'UNKNOWN',
    AFTER_DECIMAL: 'AFTER_DECIMAL'
};

let get_next_state = function(current_state, ch) {
    if (current_state === STATE.START ||
        current_state === STATE.INTEGER) {
        if (ch === '.') {
            return STATE.DECIMAL;
        } else if (ch >= '0' && ch <= '9') {
            return STATE.INTEGER;
        } else {
            return STATE.UNKNOWN;
        }
    }
    if (current_state === STATE.DECIMAL) {
        if (ch >= '0' && ch <= '9') {
            return STATE.AFTER_DECIMAL;
        } else {
            return STATE.UNKNOWN;
        }
    }
    if (current_state === STATE.AFTER_DECIMAL) {
        if (ch >= '0' && ch <= '9') {
            return STATE.AFTER_DECIMAL;
        } else {
            return STATE.UNKNOWN;
        }
    }
    return STATE.UNKNOWN;
};

let is_number_valid = function(s) {
    if (s.length === 0) {
        return true;
    }

    let i = 0;
    if (s[i] === '+' || s[i] === '-') {
        i++;
    }


    let current_state = STATE.START;

    for (let l = i; l < s.length; l++) {
        current_state = get_next_state(current_state, s[l]);
        if (current_state === STATE.UNKNOWN) {
            return false;
        }
    }
  
    if (current_state === STATE.DECIMAL)
      return false;
  
    return true;
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Is Valid Number");
console.log("---------------------------------------");

console.log('is this number valid "4.325" = ' + is_number_valid("4.325"));
console.log('is this number valid "4.325a" = ' + is_number_valid("4.325a"));
console.log('is this number valid "x4.325" = ' + is_number_valid("x4.325"));
console.log('is this number valid "4.32.5" = ' + is_number_valid("4.32.5"));
console.log('is this number valid "4325" = ' + is_number_valid("4325"));
console.log('is this number valid "1." = ' + is_number_valid("1."));
console.log('is this number valid "1.1." = ' + is_number_valid("1.1."));
console.log('is this number valid "1.1.1" = ' + is_number_valid("1.1.1"));
console.log('is this number valid "1.1.1." = ' + is_number_valid("1.1.1."));
console.log('is this number valid "+1.1." = ' + is_number_valid("+1.1."));
console.log('is this number valid "+1.1" = ' + is_number_valid("+1.1"));
console.log('is this number valid "-1.1." = ' + is_number_valid("-1.1."));
console.log('is this number valid "-1.1" = ' + is_number_valid("-1.1"));
console.log('is this number valid "" = ' + is_number_valid(""));
