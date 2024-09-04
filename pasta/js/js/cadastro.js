

let envia=() => {
    let form = document.getElementById("frm");
     form.action = "proc.php";
     form.method ="get";
     form.submit();
}