<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cupom Fiscal</title>
    <style>
        body {
            font-family: "Courier New", Courier, monospace; /* Para simular o estilo de impressora */
            margin: 0;
            padding: 0;
            text-align: center;
        }

        .cupom {
            width: 300px; /* Largura do cupom */
            padding: 20px;
            border: 2px solid #000;
            margin: 0 auto;
            font-size: 12px;
            line-height: 1.6;
        }

        .header {
            text-align: center;
            margin-bottom: 10px;
        }

        .header h1 {
            font-size: 16px;
            margin: 0;
        }

        .header p {
            margin: 2px;
            font-size: 12px;
        }

        .items {
            margin-top: 15px;
            margin-bottom: 15px;
        }

        .items table {
            width: 100%;
            border-spacing: 0;
        }

        .items th, .items td {
            text-align: left;
            padding: 5px 0;
            font-size: 12px;
            border-bottom: 1px solid #ddd;
        }

        .totals {
            margin-top: 10px;
        }

        .totals p {
            margin: 5px 0;
            font-size: 14px;
            font-weight: bold;
        }

        .payment-method {
            margin-top: 10px;
        }

        .payment-method p {
            font-size: 12px;
            margin: 5px 0;
        }

        .footer {
            margin-top: 20px;
            font-size: 10px;
            text-align: center;
            color: #777;
        }

        .btn-print {
            margin-top: 20px;
            padding: 10px 20px;
            background-color: #4CAF50;
            color: white;
            border: none;
            font-size: 14px;
            cursor: pointer;
        }

        .btn-print:hover {
            background-color: #45a049;
        }
    </style>
</head>
<body>

<div class="cupom" id="cupomFiscal">
    <!-- Cabeçalho -->
    <div class="header">
        <h1>LOJA EXEMPLO</h1>
        <p>CNPJ: 12.345.678/0001-90</p>
        <p>Rua Exemplo, 123 - Bairro ABC</p>
        <p>Tel: (11) 98765-4321</p>
        <p>Data: 10/10/2024 | Hora: 14:30</p>
    </div>

    <!-- Itens -->
    <div class="items">
        <table>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th>Qtd</th>
                    <th>Preço</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Paracetamol</td>
                    <td>2</td>
                    <td>R$ 5,00</td>
                    <td>R$ 10,00</td>
                </tr>
                <tr>
                    <td>Dipirona</td>
                    <td>1</td>
                    <td>R$ 5,00</td>
                    <td>R$ 5,00</td>
                </tr>
                <tr>
                    <td>Omeprazol</td>
                    <td>3</td>
                    <td>R$ 6,00</td>
                    <td>R$ 18,00</td>
                </tr>
            </tbody>
        </table>
    </div>

    <!-- Totais -->
    <div class="totals">
        <p>Subtotal: R$ 33,00</p>
        <p>Desconto: R$ 0,00</p>
        <p>Impostos: R$ 3,30</p>
        <p><strong>Total: R$ 36,30</strong></p>
    </div>

    <!-- Forma de Pagamento -->
    <div class="payment-method">
        <p><strong>Forma de Pagamento:</strong> Cartão de Crédito</p>
    </div>

    <!-- Mensagem de Agradecimento -->
    <div class="footer">
        <p>Obrigado pela compra!</p>
        <p>www.lojaexemplo.com.br</p>
    </div>

    <!-- Botão de Impressão (se necessário) -->
    <button class="btn-print" onclick="window.print()">Imprimir Cupom</button>
</div>

<script>
    // A função print() aciona a janela de impressão
    function printCupom() {
        window.print();
    }
</script>

</body>
</html>
