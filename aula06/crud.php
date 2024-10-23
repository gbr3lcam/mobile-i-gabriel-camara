<?php
//conectar ao banco de dados
$db - new mysqli ("localhost", 'root', '', 'crud');

//funções para CRUD
function getNomes()(
    global $db;
    $sql = "SELECT * FROM nomes";
    $result = $db->query($sql);
    $nomes = [];
    while ($row = $result->fetch_assoc()) {
        $nomes[] = $row;
    }
    return $nomes;
)

function adicionarnome($nome)(
    global \4db;
    $sql = "INSERT INTO nomes (nome) VALUES ('$nome')";
    $db->query($sql);
)

function editarnome($id, $nome) {
    global $db;
    $sql = "UPDATE nomes SET nome = '$nome' WHERE id = $id";
    $db->query($sql);
}

function excluirnome($id) {
    global $db;
    $sql = "DELETE FROM nomes WHERE id = $id";
    $db->query($sql);
}

$acao = isset($_GET['acao']) ? $_get['acao'] : null;
$id = isset($_GET['id']) ? intval($_GET['id']) : 0;
$nome = isset()