document.getElementById("go").addEventListener('click', () => {
    let from = (new Date(document.getElementById("from").value)).getTime() / 1000;
    let to = (new Date(document.getElementById("to").value)).getTime() / 1000;
    if(from<to)
    {    
        window.location.replace(`/stats?from=${from}&to=${to}`);
    }
    else
    {
        window.alert("Fix your date")
    }
})