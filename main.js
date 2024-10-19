function a(_) {
    switch (_) {
    case 'linkedin':
        window.open('https://www.linkedin.com/in/gabriellycampos', '_blank');
        break;
    case 'github':
        window.open('https://github.com/chTink/', '_blank');
        break;
    case 'youtube':
        window.open('https://www.youtube.com/@higabrielly', '_blank');
        break
    }
}
var b = window.document.getElementById('content_skills').children
  , c = document.getElementById('content_active').children
  , A = document.querySelector('.send_button');
activated_skill = 0;
b.buton_webfront.style.display = 'none';
var d = [{
    type: 'web back',
    icon: '../assets/icons/Internet.svg',
    description: 'Em resumo, enquanto o ERP é um conceito genérico que descreve sistemas integrados de gestão empresarial, o SAP é uma empresa que produz e vende software ERP e outras soluções empresariais.',
    skills: [{
        name: 'HTML',
        level: 90
    }]
}, {
    type: 'web front',
    icon: '../assets/icons/Internet.svg',
    description: 'Em resumo, enquanto o ERP é um conceito genérico que descreve sistemas integrados de gestão empresarial, o SAP é uma empresa que produz e vende software ERP e outras soluções empresariais.',
    skills: [{
        name: 'HTML',
        level: 90
    }]
}, {
    type: 'systems',
    icon: '../assets/icons/Laptop_coding.svg',
    description: 'Em resumo, enquanto o ERP é um conceito genérico que descreve sistemas integrados de gestão empresarial, o SAP é uma empresa que produz e vende software ERP e outras soluções empresariais.',
    skills: [{
        name: 'HTML',
        level: 90
    }]
}, {
    type: 'games',
    icon: '../assets/icons/Game_controller.svg',
    description: 'Em resumo, enquanto o ERP é um conceito genérico que descreve sistemas integrados de gestão empresarial, o SAP é uma empresa que produz e vende software ERP e outras soluções empresariais.',
    skills: [{
        name: 'HTML',
        level: 90
    }]
}, {
    type: 'databases',
    icon: '../assets/icons/Database.svg',
    description: 'Em resumo, enquanto o ERP é um conceito genérico que descreve sistemas integrados de gestão empresarial, o SAP é uma empresa que produz e vende software ERP e outras soluções empresariais.',
    skills: [{
        name: 'HTML',
        level: 90
    }]
}, {
    type: 'mobile',
    icon: '../assets/icons/iPhone.svg',
    description: 'Em resumo, enquanto o ERP é um conceito genérico que descreve sistemas integrados de gestão empresarial, o SAP é uma empresa que produz e vende software ERP e outras soluções empresariais.',
    skills: [{
        name: 'HTML',
        level: 90
    }]
}, {
    type: 'others',
    icon: '../assets/icons/Backend_development.svg',
    description: 'Em resumo, enquanto o ERP é um conceito genérico que descreve sistemas integrados de gestão empresarial, o SAP é uma empresa que produz e vende software ERP e outras soluções empresariais.',
    skills: [{
        name: 'HTML',
        level: 90
    }]
}];
b.item(0).addEventListener('click', ()=>{
    b.buton_webfront.style.display = 'none';
    b.item(activated_skill).style.display = '';
    activated_skill = 0;
    c.item(0).innerHTML = `\n <div class="title">client-side web</div>
    \n <p class="txt_content">
    \n Em resumo, enquanto o ERP é um conceito genérico que descreve
    \n sistemas integrados de gestão empresarial, o SAP é uma empresa que
    \n produz e vende software ERP e outras soluções empresariais.\n </p>\n`;
    c.item(1).innerHTML = `\n <div class="progress_group">\n <label for="">HTML</label>\n <div class="progress_full">\n<div class="progress"></div>\n </div>\n </div>\n
    \n <div class="progress_group">\n <label for="">HTML</label>\n <div class="progress_full">\n <div class="progress"></div>\n </div>\n </div>\n
    \n <div class="progress_group">\n <label for="">HTML</label>\n <div class="progress_full">\n <div class="progress"></div>\n </div>\n </div>\n
    \n <div class="progress_group">\n <label for="">HTML</label>\n <div class="progress_full">\n <div class="progress"></div>\n </div>\n </div>\n
    \n <div class="progress_group">\n <label for="">HTML</label>\n <div class="progress_full">\n <div class="progress"></div>\n </div>\n </div>\n
    \n <div class="progress_group">\n <label for="">HTML</label>\n <div class="progress_full">\n <div class="progress"></div>\n </div>\n </div>\n
    \n <div class="progress_group">\n <label for="">HTML</label>\n <div class="progress_full">\n <div class="progress"></div>\n </div>\n </div>\n

    `
}
);
b.item(1).addEventListener('click', ()=>{
    b.buton_webback.style.display = 'none';
    b.item(activated_skill).style.display = '';
    activated_skill = 1;
    c.item(0).innerHTML = `\n <div class="title">server-side web</div>
    \n <p class="txt_content">
    \n Em resumo, enquanto o ERP é um conceito genérico que descreve
    \n sistemas integrados de gestão empresarial, o SAP é uma empresa que
    \n produz e vende software ERP e outras soluções empresariais.\n </p>\n`;
    c.item(1).innerHTML = `\n <div class="progress_group">\n <label for="">HTML</label>\n <div class="progress_full">\n<div class="progress"></div>\n </div>\n </div>\n
    \n <div class="progress_group">\n <label for="">HTML</label>\n <div class="progress_full">\n <div class="progress"></div>\n </div>\n </div>\n
    \n <div class="progress_group">\n <label for="">HTML</label>\n <div class="progress_full">\n <div class="progress"></div>\n </div>\n </div>\n
    \n <div class="progress_group">\n <label for="">HTML</label>\n <div class="progress_full">\n <div class="progress"></div>\n </div>\n </div>\n
    \n <div class="progress_group">\n <label for="">HTML</label>\n <div class="progress_full">\n <div class="progress"></div>\n </div>\n </div>\n
    `
}
);
b.item(2).addEventListener('click', ()=>{
    b.buton_systems.style.display = 'none';
    b.item(activated_skill).style.display = '';
    activated_skill = 2;
    c.item(0).innerHTML = `\n <div class="title">systems</div>
    \n <p class="txt_content">
    \n Em resumo, enquanto o ERP é um conceito genérico que descreve
    \n sistemas integrados de gestão empresarial, o SAP é uma empresa que
    \n produz e vende software ERP e outras soluções empresariais.\n </p>\n`;
    c.item(1).innerHTML = `\n <div class="progress_group">\n <label for="">HTML</label>\n <div class="progress_full">\n<div class="progress"></div>\n </div>\n </div>\n
    \n <div class="progress_group">\n <label for="">HTML</label>\n <div class="progress_full">\n <div class="progress"></div>\n </div>\n </div>\n
    \n <div class="progress_group">\n <label for="">HTML</label>\n <div class="progress_full">\n <div class="progress"></div>\n </div>\n </div>\n
    \n <div class="progress_group">\n <label for="">HTML</label>\n <div class="progress_full">\n <div class="progress"></div>\n </div>\n </div>\n
    \n <div class="progress_group">\n <label for="">HTML</label>\n <div class="progress_full">\n <div class="progress"></div>\n </div>\n </div>\n
    `
}
);
b.item(3).addEventListener('click', ()=>{
    b.buton_games.style.display = 'none';
    b.item(activated_skill).style.display = '';
    activated_skill = 3;
    c.item(0).innerHTML = `\n <div class="title">games</div>
    \n <p class="txt_content">
    \n Em resumo, enquanto o ERP é um conceito genérico que descreve
    \n sistemas integrados de gestão empresarial, o SAP é uma empresa que
    \n produz e vende software ERP e outras soluções empresariais.\n </p>\n`;
    c.item(1).innerHTML = `\n <div class="progress_group">\n <label for="">HTML</label>\n <div class="progress_full">\n<div class="progress"></div>\n </div>\n </div>\n
    \n <div class="progress_group">\n <label for="">HTML</label>\n <div class="progress_full">\n <div class="progress"></div>\n </div>\n </div>\n
    \n <div class="progress_group">\n <label for="">HTML</label>\n <div class="progress_full">\n <div class="progress"></div>\n </div>\n </div>\n
    \n <div class="progress_group">\n <label for="">HTML</label>\n <div class="progress_full">\n <div class="progress"></div>\n </div>\n </div>\n
    \n <div class="progress_group">\n <label for="">HTML</label>\n <div class="progress_full">\n <div class="progress"></div>\n </div>\n </div>\n
    `
}
);
b.item(4).addEventListener('click', ()=>{
    b.buton_databases.style.display = 'none';
    b.item(activated_skill).style.display = '';
    activated_skill = 4;
    c.item(0).innerHTML = `\n <div class="title">databases</div>
    \n <p class="txt_content">
    \n Em resumo, enquanto o ERP é um conceito genérico que descreve
    \n sistemas integrados de gestão empresarial, o SAP é uma empresa que
    \n produz e vende software ERP e outras soluções empresariais.\n </p>\n`;
    c.item(1).innerHTML = `\n <div class="progress_group">\n <label for="">HTML</label>\n <div class="progress_full">\n<div class="progress"></div>\n </div>\n </div>\n
    \n <div class="progress_group">\n <label for="">HTML</label>\n <div class="progress_full">\n <div class="progress"></div>\n </div>\n </div>\n
    \n <div class="progress_group">\n <label for="">HTML</label>\n <div class="progress_full">\n <div class="progress"></div>\n </div>\n </div>\n
    \n <div class="progress_group">\n <label for="">HTML</label>\n <div class="progress_full">\n <div class="progress"></div>\n </div>\n </div>\n
    \n <div class="progress_group">\n <label for="">HTML</label>\n <div class="progress_full">\n <div class="progress"></div>\n </div>\n </div>\n
    `
}
);
b.item(5).addEventListener('click', ()=>{
    b.buton_mobile.style.display = 'none';
    b.item(activated_skill).style.display = '';
    activated_skill = 5;
    c.item(0).innerHTML = `\n <div class="title">mobile</div>
    \n <p class="txt_content">
    \n Em resumo, enquanto o ERP é um conceito genérico que descreve
    \n sistemas integrados de gestão empresarial, o SAP é uma empresa que
    \n produz e vende software ERP e outras soluções empresariais.\n </p>\n`;
    c.item(1).innerHTML = `\n <div class="progress_group">\n <label for="">HTML</label>\n <div class="progress_full">\n<div class="progress"></div>\n </div>\n </div>\n
    \n <div class="progress_group">\n <label for="">HTML</label>\n <div class="progress_full">\n <div class="progress"></div>\n </div>\n </div>\n
    \n <div class="progress_group">\n <label for="">HTML</label>\n <div class="progress_full">\n <div class="progress"></div>\n </div>\n </div>\n
    \n <div class="progress_group">\n <label for="">HTML</label>\n <div class="progress_full">\n <div class="progress"></div>\n </div>\n </div>\n
    \n <div class="progress_group">\n <label for="">HTML</label>\n <div class="progress_full">\n <div class="progress"></div>\n </div>\n </div>\n
    `
}
);
b.item(6).addEventListener('click', ()=>{
    b.buton_others.style.display = 'none';
    b.item(activated_skill).style.display = '';
    activated_skill = 6;
    c.item(0).innerHTML = `\n <div class="title">others</div>
    \n <p class="txt_content">
    \n Em resumo, enquanto o ERP é um conceito genérico que descreve
    \n sistemas integrados de gestão empresarial, o SAP é uma empresa que
    \n produz e vende software ERP e outras soluções empresariais.\n </p>\n`;
    c.item(1).innerHTML = `\n <div class="progress_group">\n <label for="">HTML</label>\n <div class="progress_full">\n<div class="progress"></div>\n </div>\n </div>\n
    \n <div class="progress_group">\n <label for="">HTML</label>\n <div class="progress_full">\n <div class="progress"></div>\n </div>\n </div>\n
    \n <div class="progress_group">\n <label for="">HTML</label>\n <div class="progress_full">\n <div class="progress"></div>\n </div>\n </div>\n
    \n <div class="progress_group">\n <label for="">HTML</label>\n <div class="progress_full">\n <div class="progress"></div>\n </div>\n </div>\n
    \n <div class="progress_group">\n <label for="">HTML</label>\n <div class="progress_full">\n <div class="progress"></div>\n </div>\n </div>\n
    `
}
);
A.addEventListener('click', e=>{
    e.preventDefault();
    f(document.getElementById('email').value, document.getElementById('message').value)
}
);
function f(B, C) {
    console.log(B);
    console.log(C)
}
