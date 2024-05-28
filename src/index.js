const buttonStart = document.getElementById('button-startPage')
const startPage = document.getElementById('start-page')
const navbar = document.getElementById('navbar')
const introductionPage = document.getElementById('introduction-page')
const mainPage = document.getElementById('main-page')
const videoPage = document.getElementById('video-page')
const buttonIntroNext = document.getElementById('buttonIntro-nextpage')
const pengertianContainerPage = document.getElementById('pengertian-container')
const pengertianContentPage = document.getElementById('pengertian-content')
const eksplorasiContainerPage = document.getElementById('eksplorasi-container')
const eksplorasiContentPage = document.getElementById('eksplorasi-content')
const iconNext = document.getElementById('icon-next')
const textButtonIntro = document.getElementById('text-buttonIntro');
const pendapatDokter = document.getElementById('pendapat-dokter')
const persepsiDokter = document.getElementById('persepsi-dokter')
const textPendapatDokter = document.getElementById('text-pendapat-dokter')
const gangguanDokter = document.getElementById('gangguan-dokter')
const textGangguanDokter = document.getElementById('text-gangguan-dokter')
const textPersepsiDokter = document.getElementById('text-persepsi-dokter')
const pendapatPasien = document.getElementById('pendapat-pasien')
const gangguanPasien = document.getElementById('gangguan-pasien')

// button navbar
const btnintro = document.getElementById('introduction-logo')
const btnmain = document.getElementById('main-logo')
const btnyutub = document.getElementById('video-logo')



const animation = document.querySelector('.move div');
const animation2 = document.querySelector('.move2 div');

// navbar
let nav = 0

function btnNavbar(target, musuh1, musuh2, index, targetPage, musuh1Page, musuh2Page) {
    if (nav !== index) {
        target.classList.add('nav-active')
        musuh1.classList.remove('nav-active')
        musuh2.classList.remove('nav-active')
        animation2.parentElement.classList.remove('hide');
        animation2.classList.add('page-animation2');

        setTimeout(function () {
            targetPage.classList.remove('hide');
            musuh1Page.classList.add('hide');
            musuh2Page.classList.add('hide');
        }, 510)
        setTimeout(function () {
            animation2.parentElement.classList.add('hide');
            animation2.classList.remove('page-animation2');
        }, 1500)
        nav = index
    }
}

function pageTransition(targetPage, musuh1Page, musuh2Page) {

}

btnintro.addEventListener('click', () => {
    btnNavbar(btnintro, btnmain, btnyutub, 0, introductionPage, mainPage, videoPage)
})

btnmain.addEventListener('click', () => {
    btnNavbar(btnmain, btnintro, btnyutub, 1, mainPage, introductionPage, videoPage)
})

btnyutub.addEventListener('click', () => {
    btnNavbar(btnyutub, btnintro, btnmain, 2, videoPage, introductionPage, mainPage)
})

// navbar end


buttonStart.addEventListener('click', function () {
    animation.classList.add('page-animation');
    animation.parentElement.classList.remove('hide');
    setTimeout(function () {
        startPage.classList.add('hide');
        introductionPage.classList.remove('hide');
        navbar.classList.remove('hide');
    }, 500)
    setTimeout(function () {
        animation.parentElement.classList.add('hide');
        animation.classList.remove('page-animation');
    }, 1500)
})

// bounce button pada halaman pengertian
setInterval(bounce, 500); // Panggil fungsi bounce setiap 1 detik

function bounce() {
    // Ambil elemen dengan kelas 'link'
    var link = document.querySelector('.link');

    // Periksa apakah elemen memiliki kelas 'gerak'
    if (link.classList.contains('gerak')) {
        // Jika ada, hapus 'gerak' dan tambahkan 'gerak1'
        link.classList.remove('gerak');
        link.classList.add('gerak1');
    } else {
        // Jika tidak, hapus 'gerak1' dan tambahkan 'gerak'
        link.classList.remove('gerak1');
        link.classList.add('gerak');
    }
}

buttonIntroNext.addEventListener('click', function () {
    if (eksplorasiContentPage.classList.contains('hide')) {
        // animasi
        pengertianContainerPage.classList.add('animate__animated', 'animate__fadeOutUpBig')

        // content
        setTimeout(() => {
            eksplorasiContentPage.classList.remove('hide')
            pengertianContentPage.classList.add('hide')
            pengertianContainerPage.classList.remove('animate__animated', 'animate__fadeOutUpBig')
            eksplorasiContainerPage.classList.add('animate__animated', 'animate__fadeInUpBig')
        }, 500);

        // current
        iconNext.classList.remove('fa-arrow-down')
        iconNext.classList.add('fa-arrow-up')


        // text
        textButtonIntro.textContent = 'Balik';


    } else {
        // animasi
        eksplorasiContainerPage.classList.add('animate__animated', 'animate__fadeOutDownBig')

        // content
        setTimeout(() => {
            pengertianContentPage.classList.remove('hide')
            eksplorasiContentPage.classList.add('hide')
            eksplorasiContainerPage.classList.remove('animate__animated', 'animate__fadeOutDownBig')
            pengertianContainerPage.classList.add('animate__animated', 'animate__fadeInDownBig')
        }, 600);

        // current
        iconNext.classList.remove('fa-arrow-up')
        iconNext.classList.add('fa-arrow-down')


        // text
        textButtonIntro.textContent = 'Lanjut';
    }
});

pendapatDokter.addEventListener('mouseenter', () => {
    textPendapatDokter.classList.remove('hide')
    textPendapatDokter.classList.add('animate__animated', 'animate__flipInX')

    setTimeout(() => {
        pendapatPasien.classList.remove('hide')
        pendapatPasien.classList.add('animate__animated', 'animate__bounceIn')
    }, 700);
})
pendapatDokter.addEventListener('mouseleave', () => {
    textPendapatDokter.classList.add('hide')
    pendapatPasien.classList.add('hide')
    pendapatPasien.classList.remove('animate__animated', 'animate__bounceIn')
    textPendapatDokter.classList.remove('animate__animated', 'animate__flipInX')
})

persepsiDokter.addEventListener('mouseenter', () => {
    textPersepsiDokter.classList.remove('hide')
})
persepsiDokter.addEventListener('mouseleave', () => {
    textPersepsiDokter.classList.add('hide')
})

gangguanDokter.addEventListener('mouseenter', () => {
    textGangguanDokter.classList.remove('hide')
    textGangguanDokter.classList.add('animate__animated', 'animate__flipInX')

    setTimeout(() => {
        gangguanPasien.classList.remove('hide')
        gangguanPasien.classList.add('animate__animated', 'animate__bounceIn')
    }, 700);
})
gangguanDokter.addEventListener('mouseleave', () => {
    textGangguanDokter.classList.add('hide')
    gangguanPasien.classList.add('hide')
    gangguanPasien.classList.remove('animate__animated', 'animate__bounceIn')
    textGangguanDokter.classList.remove('animate__animated', 'animate__flipInX')
})