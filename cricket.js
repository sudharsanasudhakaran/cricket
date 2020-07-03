"use strict";
class Cricket {
    constructor() {
        //player score
        this.fillData = (button, table) => {
            var tableDOM = document.getElementById(table);
            let random = Math.round((Math.random() * 10) % 6);
            let flag = false;
            if (random === 0) {
                tableDOM.rows[this.row].cells[this.column].innerHTML = '0';
                for (var itr = this.column + 1; itr < 6; itr++)
                    tableDOM.rows[this.row].cells[itr].innerHTML = '';
                this.column = 6;
                flag = true;
            }
            if (flag === false)
                tableDOM.rows[this.row].cells[this.column].innerHTML = random.toString();
            this.findPlayerTotal(this.row, this.column, table);
            this.column += 1;
            if (this.column > 6) {
                this.row += 1;
                this.column = 1;
                this.findPlayerTotal(this.row - 1, this.column, table);
            }
            flag = false;
        };
        this.row = 1;
        this.column = 1;
        this.Team1Total = [];
        this.Team2Total = [];
        this.timeleft = 60;
        this.button1 = false;
        this.button2 = false;
        this.flagForTimer = false;
        this.timer("team1Button");
    }
    ;
}
