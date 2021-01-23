export const toFaDigits = v => {
    const id = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    return v.replace(/[0-9]/g, (x) => id[+x]);
};

export const toEnDigits = v => {
    const id = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g];
    for(let i=0; i<10; i++){
        v = v.replace(id[i], i);
    }
    return v;
};

export const toCurrencyFormat = n => n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");

