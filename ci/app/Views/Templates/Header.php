<!DOCTYPE html>
<html>
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="<?= $viewport ?>">
    <meta name="description" content="<?= $description ?>">
    <meta name="author" content="<?= $author ?>">
    <meta http-equiv="refresh" content="<?= $refreshtime ?>">

    <!-- Title -->
    <title><?= $title; ?></title>

    <?php
        helper('html');
        // CSS FILE
        foreach($cssList as $cssFile)
        {
            echo link_tag($cssFile);
        }
    ?>

    
    <?php
        // JS FILE
        foreach($jsList as $jsFile)
        {
            echo script_tag($jsFile);
        }
    ?>
</head>