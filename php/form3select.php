
     <?php 
    
    include('db.php');

    $stmt = $pdo->prepare("SELECT * FROM feedback WHERE 1");
    $stmt->execute();
    while ($info = $stmt->fetch(PDO::FETCH_ASSOC)){
        echo($info["nome"] . " disse: " . $info["comentario"] . "<br>");
    }

   ?>
