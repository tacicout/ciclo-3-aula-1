document.addEventListener('DOMContentLoaded', function () {
    const billForm = document.getElementById('billForm');
    /* Botão Calcular*/
    const calculateButton = document.getElementById('calculateButton');
    const discountModal = document.getElementById('discountModal');
    const resultModal = document.getElementById('resultModal');

    const resultText = document.getElementById('resultText');
    const noDiscountButton = document.getElementById('noDiscountButton');
    const yesDiscountButton = document.getElementById('yesDiscountButton');
    const closeButtons = document.querySelectorAll('.close');
    calculateButton.addEventListener('click', function () {
        // Verifica se o formulário é válido antes de exibir o modal de desconto
        if (billForm.checkValidity()) {
            discountModal.style.display = 'block';
        } else {
            // Se o formulário não for válido, exibe uma mensagem de erro
            alert("Por favor, preencha todos os campos corretamente.");
        }
    });

    noDiscountButton.addEventListener('click', function () {
        displayResult(false);
    });

    yesDiscountButton.addEventListener('click', function () {
        displayResult(true);
    });

    closeButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            discountModal.style.display = 'none';
            resultModal.style.display = 'none';
        });
    });

    window.addEventListener('click', function (event) {
        if (event.target == discountModal || event.target == resultModal) {
            discountModal.style.display = 'none';
            resultModal.style.display = 'none';
        }
    });

    function displayResult(hasDiscount) {
        const totalBill = parseFloat(document.getElementById('totalBill').value);
        const serviceCharge = parseFloat(document.getElementById('serviceCharge').value);
        const numOfPayers = parseInt(document.getElementById('numOfPayers').value);
        
        
        let finalAmount = totalBill + (serviceCharge * numOfPayers);

        let discountInfo = hasDiscount ? "Desconto Aplicado" : "Sem Desconto";
        
        if (hasDiscount) {
            // aplicar o desconto com pix ou dinheiro
            // P desconto de 10%
           const discount = finalAmount * 0.1; // 10% do valor total
           finalAmount -= discount; // Deduzindo o desconto do valor total
        }


        resultText.innerHTML = `Valor Total: ${finalAmount.toFixed(2)} <br> ${discountInfo} <br> ${finalAmount}`;
        resultModal.style.display = 'block';
    
    }

});


