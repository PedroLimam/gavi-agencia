const form = document.getElementById("formEmail");
const msg = document.getElementById("msg");
const btnSend = document.querySelector(".btn-send-form")
const inputEmail = document.getElementById("email")
const inputName = document.getElementById("name")
const inputTextarea = document.getElementById("textarea")
const inputServico = document.getElementById("servico")

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const dados = new FormData(form);

    msg.disabled = true;
    btnSend.disabled = true
    inputEmail.disabled = true
    inputName.disabled = true
    inputTextarea.disabled = true
    inputServico.disabled = true
    btnSend.innerHTML = "Enviando...";

    try {
        const resposta = await fetch(form.action, {
            method: "POST",
            body: dados,
            headers: {
                "Accept": "application/json"
            }
        });

        if (resposta.ok) {
            msg.innerHTML = "✅ Mensagem enviada com sucesso!";
            msg.style.color = "green";
            msg.style.transform = "translate(75px, 10px)";
            msg.style.display = "block"
            msg.disabled = false;
            btnSend.disabled = false
            btnSend.innerHTML = "Enviar";
            inputEmail.disabled = false
            inputName.disabled = false
            inputTextarea.disabled = false
            inputServico.disabled = false

            form.reset();

            setTimeout(() => {
                msg.innerHTML = "";
                msg.style.display = "none"
            }, 6000);
        } else {
            msg.innerHTML = "❌ Erro ao enviar a mensagem.";
            msg.style.color = "red";
            msg.style.display = "block"
            msg.disabled = false;
            btnSend.disabled = false
            inputEmail.disabled = false
            inputName.disabled = false
            inputTextarea.disabled = false
            inputServico.disabled = false
            btnSend.innerHTML = "Enviar";

            setTimeout(() => {
                msg.innerHTML = "";
                msg.style.display = "none"
            }, 6000);
        }

    } catch (erro) {
        msg.innerHTML = "❌ Falha de conexão. Tente novamente.";
        msg.style.color = "red";
        msg.style.display = "block"
        setTimeout(() => {
            msg.innerHTML = "";
            msg.style.display = "none"
        }, 6000);
    }
});