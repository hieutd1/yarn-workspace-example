const moment = require('moment')

export class Animal{
    getName(){
        return 'Animal'+ new moment().valueOf();
    }
}