export default function json2html(data) {
    let table = <table data-user=\"shilpykotturu@gmail.com\">;
    table += <thead>;
    table += <tr><th>Name</th><th>Age</th><th>Gender</th></tr>;
    table += </thead>;
    table += <tbody>;

    data.forEach(item => {
        table += <tr>;
        table += <td>${item.Name}</td>;
        table += <td>${item.Age}</td>;
        table += <td>${item.Gender || ''}</td>;
        table += </tr>;
    });

    table += </tbody>;
    table += </table>;

    return table;
}
