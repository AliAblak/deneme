<!DOCTYPE html>
<html lang="en">
<head>
<meta http-equiv="content-type" content="text/html; charset=utf-8">
<title>Eğitim Ders</title>
</head>
<style>
    ul{
        margin: 0; margin-bottom: 5px;
    }
    li{
        display: inline;
        margin: 0;
        height: 22px;
        padding-top: 5px;
        padding-bottom: 5px;
        padding-left: 5px;
        padding-right: 50px;
        color: red;
        border: 1px solid red;
    }
    div{
        width: 518px;
        height: 250px;
        margin-left: 40px;
        padding: 5px;
        border: 1px solid red;
    }
</style>


<body>
<ul>
    <li onclick="show('onearey')" style="cursor: pointer;">Javascript Eğitim Seti</li>
    <li onclick="show('wonarey')" style="cursor: pointer;"> Php Eğitim Seti</li>
    <li onclick="show('truyarey')" style="cursor: pointer;">Html Eğitim Seti</li>
</ul>

<div id="onearey" style="display: none;">Javascript Tab'ının İçeriği</div>
<div id="wonarey" style="display: none;">Php Tab'ının İçeriği</div>
<div id="truyarey" style="display: none;">Html Tab'ının İçeriği</div>


<script type="text/Javascript" language="Javascript">

function example () {
    var alanlar = document.getElementsByTagName('div');
    var uzunluk = alanlar.length;
    for (var i = 0; i < uzunluk; i++) {
        alanlar[i].style.display = 'none';
    }
}

function show(değer) {
    example();
    document.getElementById(değer).style.display = 'block';
    
}

</script>
 
</body>
</html>
