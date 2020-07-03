declare var showConfetti: any;
class Cricket {
    Team1Total: number[];
    Team2Total: number[];
    row: number;
    column: number;
    flag: boolean;
    button1: boolean;
    button2: boolean;
    timeleft: number;
    timeTracker: number;
    flagForTimer: boolean;

    constructor() {
        this.row = 1;
        this.column = 1;
        this.Team1Total = [];
        this.Team2Total = [];
        this.timeleft = 60;
        this.button1 = false
        this.button2 = false
        this.flagForTimer = false
        this.timer("team1Button");
    }

    //player score

    fillData = (button: HTMLButtonElement, table: string) => {
        var tableDOM = <HTMLTableElement>document.getElementById(table);
        let random = Math.round((Math.random() * 10) % 6)
        let flag = false
        if (random === 0) {
            tableDOM.rows[this.row].cells[this.column].innerHTML = '0';
            for (var itr = this.column + 1; itr < 6; itr++)
                tableDOM.rows[this.row].cells[itr].innerHTML = '';
            this.column = 6;
            flag = true
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
});


