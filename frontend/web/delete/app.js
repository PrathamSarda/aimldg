let api = "http://127.0.0.1:8080/api/v1/delete";

async function deleteData() {
    let id = document.getElementById("id").value;

    let req = await fetch(${api}/${id}, {
        method: "DELETE"
    });

    let res = await req.text();
    document.getElementById("o").textContent = res;
}