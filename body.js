// array com urls de imagens
const img_urls = [
    "https://b5gz5g.dm.files.1drv.com/y4m5eR5QoyhI8mPuE2VS8lBj4zS1f60r3P7rw42pYl9-Cy2FmCF5QExo-V3T7vrDrw7rTD8FHH3yc5MzWEfpDH5QSI0v7FgNgQY-TkJChhj_7VxhsDScWMF82KXRORd5FIvn161PjHHkADCD4U67jXk60l_O9zokqR_cIp6AD4LcQOI4k5AnDiiKMXZDs84CcOjlID9o6gRQz4FPuyfpnQDng/IMG-20211031-WA0000.jpg?psid=1",
    "https://cpge5g.dm.files.1drv.com/y4mjceHKdkrLY7fV-wRj9WoNL-xzRDM-S14bS5oYL9-Hv_YO8KpcSutjj0-gRwRWdXKcxUQnap9IcJdlFj_N_jadbPUv3mWQI-a5FS8vK7MTzDuNz2M1fGDZdFvIn5LP-d3MbH7t1HD0zD2R_5P3TQSwaQ6i6eSg8bEbYA2CgQ3Y4Pv3FsRuiEBx9M1TAnrvps_TsuOK403zbLBBHPYHv6WLg/1635694774277.jpg?psid=1",
    "https://cpgb5g.dm.files.1drv.com/y4mXrRPWSJKmCITWwRYhtElsRxfwmZS6wq6fDgk0y4DG5mxzqqaatpKzzaw9mzt1WVqB1kWVC26Oj0_X0yNptv0Vj4PKyIwAkY8qpEnBbQIwE8R7DxYWQHOdnptEsM5RIYdYWdVemD8zkvDIaLrA992TtODYch5Q8AL9V26CB1DSgAzB7gtmDzDr4F5lxZRY9C2wQlS4vQJM5NL1l1NvvfdcQ/1635694774284.jpg?psid=1",
    "https://cpgc5g.dm.files.1drv.com/y4mAXObeQOwFFeLGU-p43qlOiOirLsc1ycHcfotb6BECoadBeGR-xQX2G4vVLjO8jrzBxiDI5WgFgNh6Yukpn8gmMvm-BCoc-Elg4oaZtaCjg4ZHorXjNIB2aYwRLYycZlP09ZsQl9krtaHbbHRqluY79HDA5CnWxEJxQncSwcr1LuwmgTgOEt11GvqZWg4gZlG7hmxR4eI3wSsL1sQO0Oebg/1635694774290.jpg?psid=1",
    "https://cpgh5g.dm.files.1drv.com/y4mV1De480CN2tazsITT63sqFIESErjErutgen6Ok_dnR35ObzQ7xOjTURZiylpfVw1TfK4VhIk4L7rUjdf4tRXoSu9k6HLHx9efHLPC3M_QPDGes5oXtYbrKTGbSzrU5e8EAjC68tWtNhkAx6phrRF9lU3nxP2MNmvCLq328-xytPclLkKDkJcF2TMOJrhMMBgyUew3Kf-Liy4ITZNK04yAQ/1635694774296.jpg?psid=1",
    "https://cpgi5g.dm.files.1drv.com/y4m34aZuxaCZ9_Ip4c0v8QkTACbDzm1Ww4_rHmYwgxx6dGRfMh19OeRWiAZprUbB34kygYNpOlRFs0CpCvNWHPgvNPXzDS_ReDJ56gkiLE99Q2SDfByO4swiJooi8NEI8Tbdh5uo0E4UAoeu-WaVqhClkR_1RybzTSyc28mdl6R7Dd_17srQg9XIxMpGTcLJoVupeEnrfY4I69S00_tGPCpWQ/1635694774300.jpg?psid=1",
    "https://czgz5g.dm.files.1drv.com/y4meuMp8CxFlw2EM9C0b_VI3qIPjyzakpj3FN6aiu_g5uxBBLPr1hOxj9sj_D2u_INGI3xOsmvJ5t3L7DU6VRyiZsVUhryncLPXyD24tUDFL5eMXdr8ofh_MAtQc8xf95GjW9ngZsPOCdG2BfXR_ptM5Ng8EU-Ec4DKBn5ijHniNpeyaf18pcuBy9HEnSdIowZ8xpQjw0nfYWBcprPfLWOJ8w/1635694774305.jpg?psid=1",
    "https://czga5g.dm.files.1drv.com/y4mSlDtPGx7Y_tKXuHEsbPat9t5Jv5ZKaTr9QV5P8bdIWbnqPhGZvWL6aZ-IQC8kcJIry8g-TKxEZ5_tMpwJRXEv8CsdWfryat0JpZCQ6lNI8y40o3__4mBaJ4yTzOZxhm7zDjfRJ2rrnepaAUKmbZiHI2RaTShRVb1bus-ob_SS_hccxK1Cu3MDjRoJhNfpoYi5synA2daW5ckxyrKUb_euQ/1635694774310.jpg?psid=1",
    "https://czgy5g.dm.files.1drv.com/y4mxFwOX4Jcwg6pWjg1SAsAvPn50awr0BiTcC4-desCwWKmVG5fbcB8AccXtSbukaWseafxZUszdQdqC152_jZ2FI_7TzLTKWRpktMm6p3TaMgYXTjUtP7XSIvcS3ZiHQSBzMVEzhoVmv-jGp-3aWTQiM5vdr0Zmm6kncQWR18A3l0P7VydMwJSstAlxcYOlXxsGMfB_bN8WIfmFwjabAzVYw/1635694774320.jpg?psid=1",
    "https://czgd5g.dm.files.1drv.com/y4mD4cvqI4hZ0lZxVy5CinsJh9F0TR16GmcXFN1IhY1NXNMwC47ViJQrVCYBV-VHqaxvVwc4ZYD-dJ2eAXeUvzk0MsN2u80PE-Es5S9RA2MG3ihDkRyvpY_YiT09UN498NnPAA9MAC9gW4YVnaGbLJjI71c_dqXDYpIyNrXvZj1DhsD_umYmAGfTnrl_YyFrlrnMg2mTACLQ78LwxlX54XanQ/1635694774325.jpg?psid=1",
    "https://czge5g.dm.files.1drv.com/y4mA02oEWZxTpv2QJ4WcOa1GQRmfOO0BBCnRZxOttEfifrrSKATwYbAy5gjE5JVeJpiTwXUOK2eoynIoG-vRHEhsxaotNovHL_w_yWQyDAjuFemA7CPAhAnlOmJX7Zz9AbZKvU9NRBWT6Zm5MMHj1n-zNqkkAYdBH2CtFpaRU1_88MuxS6NIWZ5iQncYbP_jRnsk6sD66CvEWbWmpCJNBELiw/1635694774331.jpg?psid=1",
    "https://czgb5g.dm.files.1drv.com/y4mdKKS89bD-wj69aAzg6Q-7trJ2QJAFlDNJ8bJTDo0iKqqjcND8b8sK22y0Pv4kAGlLi2elqgBMsyOuPkjG7b12E_c-1xgmc_cvYPOXKNxGAxO1U3rK8IU6_qJ-RUcUAacCKePw6HqRZeAZOFbrpbsaSo1PiJ8CQ0S5zEhnTxaPba1M-3WQzB1rJTvlPSnKW2XBUfY4r43Cp5r3ikAfjRRYw/1635694774336.jpg?psid=1",
    "https://czgc5g.dm.files.1drv.com/y4mOUDn8VWtwudUUthn1M2K63QgQZvxaT4zFc6k6ejZm_HHVRtP5oyU73p5YT93MhGbQF3F2TjHlJdsLZ085Ot5W9pHLi-sfC6duQ5-EjcYJjuSlpgFdqccvWv7FUYfnXY0_jDJCycr3PSOaxFXLnBMIVPHZ3F5dzkMho5-wPG0IGJ-8aO2irZqREjcNzxOkI6e9EL5Dfd10bkle_nSUDO4VQ/1635694774342.jpg?psid=1",
    "https://czgh5g.dm.files.1drv.com/y4mNW3I5hRROzXXk_BA8cKKJAlfz6-FrYheC0-1ocy6zzzpV0Tg_gwxRaKiBZ8UdyGPbT8SJOVl28x9sVjjgqpvaLLPpShGiyf-8KfkuLckwtRK3MUQdpu9A8BJfWZ_lAJQa6LtXTY2ZaddnP4e3IjyB5Jr9Gd2e_br_QZBIkubuzuhrrc2l3jNhRdtZ3HpwaCeUrfLeVq-Nz4wWqkcfblaBg/1635694774348.jpg?psid=1",
    "https://czgi5g.dm.files.1drv.com/y4mhtKohFqH18kl9vod5-p-rujq89kqc8twxsVxJ09xpnVNKPPaOu41mWtqb7lhagmTHnY9yphXIOcPkMjq50TPv6W5zZoOwPSyrTxC5XwhOrBWFKrtM5Z1XhOrTMDemDSJz09GSiGZdMEyIiqtYAMLEHQo7KnkwHLE2wIP6t6FwX4bRBses6uR5l_MInLLF8G4xwc0GR5iUgpBYAvuW2oLHQ/1635694774354.jpg?psid=1",
    "https://cjgz5g.dm.files.1drv.com/y4m5_qVv1h01cXqpufHaPxosri1oXx2ccH_e7fZqZdJt4oL3fllijUbFaJ-NQ-Iah2S0okq31tLhHC_tX0BjLqwhiH9Ub6iBtmWyXuFCIfya8iWkOP4QBXqWBtgYSVtvSpCd1t4ECXypHePS_uR8UEwtF6ViMI93LPmJeIt9RMjNfuiKfHa-kTTZ4b9G1PBMLaPdyprjne4nPHCiGuN8SEVxg/1635694774359.jpg?psid=1",
    "https://cjga5g.dm.files.1drv.com/y4m7GD36Xj1FwMIJteY1yq61QFhcYni0oEWH3yTHeBAkIqAhEC8v4oHz1Y0hWn0-E7zkUg9Pm6mDIJfZWCr9Tk8sEP1FAK0XRGf-SKgLrEaDIXzQ45qIZW0UhzDr01ytnoNm-kE13UBw6TC33gbVipJenPaoZLTuMJgvLp2QrUhef9VL1R8_PyrGXLGEnWwa21icFTquixDi7XvFitCbEEGPA/1635694774366.jpg?psid=1",
    "https://cjgx5g.dm.files.1drv.com/y4mq77qtXr7UZmxKD98uzV_GRLGr5lvloqKKO4MEPEEYpiCKKpI03MfVVdIvpX8jeBZ-Es_Fj30w8CXUwW03rApFBg2Y0pMg-aNL8FtnrbQi16bk8RhOhB3KPC6NAs6jM9AfsN_ABBEyCjaaR8xsLgFTmxlFaRDeB2D05uNlUJ3Ave7qIVSoyoVyaWGwFTf3PDFdYWNos6uHRV25Q6xtTaomQ/1635694774373.jpg?psid=1",
    "https://cjgy5g.dm.files.1drv.com/y4muT1Dn1QohBfVo1XZgzBxzaGRsNAiyYnOwl3aZjUVk_kx4a0U05uMVE6-FUL982e_xORtdRZmBOy4acYVebvRDxLugaLA9B-68aA_rypwvNzfCoq3PtTzSPhUK4lRKs1JKwcZr9pveqJtjTs0wZ_TdOJdnfT0qsUab4bIzLUY5dEiD6l01nqyxcHW_DtiZblzGkbJCgDcN9PB8I7RxH2l5A/1635694774379.jpg?psid=1",
];

// header
var text_a = "";
text_a += '<h2> <!-- t??tulo -->' +
'    <a name="top"></a>' +           
'    <table align="center" frame="nosides"> ' +           
'        <tr>' +
'            <td><img src="imagens/avatar.png" alt="avatar" style="height: 54px; width: 54px"></td>' +
'            <td>Suculentas ?? venda</td>' +
'        </tr> ' +
'    </table>' +
'</h2>';
document.getElementById("id_header").innerHTML = text_a;

// ROTINA 1 - ativa
// monta ??ncoras 1 a i_max em text_a 
var i_max = img_urls.length; //quantidade de itens no array
var text_a = "";
for (var i = 1; i <= i_max; i++) {
    if (pag == 1)
       if (i == 1)
          text_a += ' <a href="' + "pag02.html#top" + '" target="_self"><img src="' + img_urls[i-1] + '"></a>'
       else 
          text_a += ' <a href="' + "pag02.html#img" + i + '" target="_self"><img src="' + img_urls[i-1] + '"></a>';    
    else 
       text_a += ' <a name="img' + i + '"></a><a href="' + img_urls[i-1] + '" target="_self"><img src="' + img_urls[i-1] + '"></a>';    
}
document.getElementById("id_html").innerHTML = text_a; 
//alert(text_a)

/*
// ROTINA 2 - v??lida (com ??ndices de href e img)
var i_max = img_urls.length; //quantidade de itens no array
var text_a = "";
for (var i = 1; i <= i_max; i++) {
    if (pag == 1) text_a += ' <a id="' + 'id-a-' + i + '" href="" target="_self"><img id="' + 'id-img-' + i + '" src=""/></a>'    
    else text_a += ' <a name="img' + i + '"></a><a id="' + 'id-a-' + i + '" href="" target="_self"><img id="' + 'id-img-' + i + '" src=""/></a>';                        
}
document.getElementById("id_html").innerHTML = text_a;
// atribui urls das imagens ??s ??ncoras em href e src
for (var i = 1; i <= i_max; i++) {
    var tag_a = document.getElementById("id-a-"+i);
    var tag_img = document.getElementById("id-img-"+i);
    if (pag == 1) tag_a.href = "pag02.html#img" + i
    else tag_a.href = img_urls[i-1];                
    tag_img.src = img_urls[i-1];
}
*/
