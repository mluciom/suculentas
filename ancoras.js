// monta âncoras 1 a i_max em text_a - ex: <a id="id-a-1" href=""><img id="id-img-1" src=""/></a> ...
var i_max = img_urls.length; //quantidade de itens no array
var text_a = "";
for (var i = 1; i <= i_max; i++) {
    if (pag == 1) text_a += ' <a id="' + 'id-a-' + i + '" href="" target="_self"><img id="' + 'id-img-' + i + '" src=""/></a>'    
    else text_a += ' <a name="img' + i + '"></a><a id="' + 'id-a-' + i + '" href="" target="_self"><img id="' + 'id-img-' + i + '" src=""/></a>';                        
}
document.getElementById("id_html").innerHTML = text_a;
// atribui urls das imagens às âncoras em href e src
for (var i = 1; i <= i_max; i++) {
    var tag_a = document.getElementById("id-a-"+i);
    var tag_img = document.getElementById("id-img-"+i);
    // tag_a.href = img_urls[i-1];
    if (pag == 1) tag_a.href = "pag02.html#img" + i
    else tag_a.href = img_urls[i-1];                
    tag_img.src = img_urls[i-1];
}