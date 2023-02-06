
function solution(today, terms, privacies) {
    const map = new Map();

    terms.forEach(term => {
        const [key, period] = term.split(' ');
        map.set(key, parseInt(period) * 28);
    })

    const calculateDate = (date) => {
        const [year, month, day] = date.split('.').map(v => parseInt(v));
        return (year * 12 * 28) + (month * 28) + (day);
    }

    const getExpireDay = (privacy) => {
        const [startDate, key] = privacy.split(' ');
        const term = map.get(key);
        return calculateDate(startDate) + term - 1;
    }

    const result = [];
    const todayDays = calculateDate(today);
    const expireDays = privacies.map(p => getExpireDay(p));

    expireDays.forEach((days, index) => {
        if (days < todayDays) {
            result.push(index + 1);
        }
    })

    return result;
}
