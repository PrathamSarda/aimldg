let api = "http://127.0.0.1:8080/api/v1/update";

async function updateData() {
    let id = document.getElementById("id").value;

    let data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        ip: document.getElementById("ip").value
    };

    let req = await fetch(${api}/${id}, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    let res = await req.text();
    document.getElementById("o").textContent = res;
}