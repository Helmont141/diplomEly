document.querySelectorAll('.changes-new-or-old').forEach(form => {
    const type = form.formBtn.dataset.type;
    let url, id, method;

    form.addEventListener('submit', event => {
        event.preventDefault();
        // let arg = $(".changes-new-or-old").serialize().split("&");
        let sendData = {};
        // arg.forEach(el => {
        //     let coupleVar = el.split("=");
        //     sendData[coupleVar[0]] = coupleVar[1];
        // })
        let arg = document.querySelector(".changes-new-or-old");
        arg.querySelectorAll('input').forEach(input => {
            console.log(input.value);
            sendData[input.name] = input.value;
        })
        console.log(sendData);
        if (type == "add") {
            url = form.formBtn.dataset.url
            method = 'POST';
        }
        if (type == "update") {
            id = form.formBtn.dataset.id;
            url = form.formBtn.dataset.url + id;
            method = 'PATCH';
        }


        fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
              },
            body: JSON.stringify(sendData),
        }).then(res => {
            if (res.status == 200) {
                alert("Операция завершина успешно");
                document.location.reload();
            } else {
                alert("Что-то пошло не так");
                document.location.reload();
            }
        });

    })
})