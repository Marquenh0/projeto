<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Obrigado!</title>

    <style>
h1 {
    text-align: center;
    font-size: 100px;
}
p {
    text-align: center;
    font-size: 70px;
}
button{
    display: block;
    margin: 0 auto;}
div {
    text-align: center;
}

    </style>

</head>
<body>
<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
<link rel="stylesheet" href="../styles/conteudo.css">
<link rel="stylesheet" href="../styles/feedback.css">
<link rel="stylesheet" href="../styles/footer.css">
<link rel="stylesheet" href="../styles/header.css">
<link rel="stylesheet" href="../styles/home.css">
<link rel="stylesheet" href="../styles/styles.css">
<link rel="stylesheet" href="../styles/tutorial.css">
    <h1>OBRIGADO PELO COMENTARIO!</h1>
    <br>
    <p>Veja mais clicando no botão abaixo</p>
<br>
    <div>
        <br>
    <button class="btn-default1" class="button-link" id="comentario">Comentários Antigos</button>
    <br>
    <div id="resultado"></div>
</div>
    

    <?php 

        include('db.php');
        $nome = $_POST["nome"];
        $email = $_POST["email"];
        $feedback = $_POST["mensagem"];

        $sql = "INSERT INTO feedback (nome, email, comentario) VALUES (?, ?, ?)";
        $stmt = $pdo->prepare($sql);
        $stmt->execute([$nome, $email, $feedback]);

    ?>
    <script src="../javascript/scphp.js"></script>
</body>
</html>



