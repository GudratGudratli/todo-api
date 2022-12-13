const tbody = document.querySelector("tbody")
console.log(tbody);

fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then((data) => {
        data.forEach((el) => {
            const row = document.createElement("tr")

            const id = document.createElement("td")
            id.innerText = el.id
            // console.log(id);

            const title = document.createElement("td")
            title.innerText = el.title
            title.contentEditable = "true"
            // console.log(title);

            const forBtnTD = document.createElement("td")

            const editBtn = document.createElement("button")
            editBtn.innerText = "EDIT"

            const delBtn = document.createElement("button")
            delBtn.innerText = "X"

            delBtn.addEventListener("click", () => {
                fetch(`https://jsonplaceholder.typicode.com/todos${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then((x) => {
                        console.log(x);
                    })
                row.remove()
            })

            editBtn.addEventListener("click", () => {
                fetch(`https://jsonplaceholder.typicode.com/todos${id}`, {
                    method: "PUT",
                    body: JSON.stringify(),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                    .then(res => res.json())
                    .then((y) => {
                        const changedTitle = document.getElementsByName("td")
                        el.title = changedTitle.innerText
                    })
            })

            forBtnTD.append(editBtn,delBtn)
            row.append(id, title, forBtnTD)
            tbody.append(row)

        })
    })