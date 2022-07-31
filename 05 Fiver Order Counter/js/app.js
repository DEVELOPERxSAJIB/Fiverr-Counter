// get elemenets 
const fiverr_form = document.getElementById('fiverr');
const counter = document.querySelector('.counter');

// submit fiverr form
fiverr_form.onsubmit = (e) => {
    e.preventDefault();

    let count = setInterval(() => {
        // get form val
        const form_data = new FormData(e.target);
        const {date, time} = Object.fromEntries(form_data.entries());

        // get timestamps
        let start_time = Date.now();
        let end_time = new Date(date + ' ' + time);
        let order_time = Math.floor(Math.abs(end_time.getTime() - start_time));

        // get val form time
        let total_sec = Math.floor(order_time / 1000);
        let total_min = Math.floor(total_sec / 60);
        let total_hour = Math.floor(total_min / 60);
        let total_day = Math.floor(total_hour / 24);

        let hours = total_hour - (total_day * 24);
        let min = total_min - (total_day * 24 * 60) - (hours * 60);
        let sec = total_sec - (total_day * 24 * 60 * 60) - (hours * 60 * 60) - (min * 60);

        if (total_sec <= 0) {
            clearInterval(count);
        }

        counter.innerHTML = `<h3>${total_day} Days : ${hours} Hours : ${min} Min : ${sec} Sec</h3>`
    }, 1000)

}