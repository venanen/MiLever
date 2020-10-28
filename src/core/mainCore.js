class MainCore{
    ok(payload = {}, message = "Успешно!") {
        return { status: "ok", message,  payload };
    }
    err(payload = {}, message = "Ошибка!") {
        return { status: "ok", message, payload };
    }


}

export default new MainCore;