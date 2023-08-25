const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export default function getDate(){
    const d = new Date();

    let date = d.getDate();
    let month = months[d.getMonth()];
    let day = days[d.getDay()];

    const string = month + " " + date + ", " + day;
    // console.log(string);

    return string;
}

