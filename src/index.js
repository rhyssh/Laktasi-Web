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

// main
const benefitContainer = document.getElementById('benefit-container')
const lekatContainer = document.getElementById('lekat-container')
const kondisiContainer = document.getElementById('kondisi-container')
const susuiContainer = document.getElementById('susui-container')
const masalahContainer = document.getElementById('masalah-container')

const benefitContent = document.getElementById('benefit-content')
const lekatContent = document.getElementById('lekat-content')
const kondisiContent = document.getElementById('kondisi-content')
const susuiContent = document.getElementById('susui-content')
const masalahContent = document.getElementById('masalah-content')

const prevMain = document.getElementById('buttonMain-prevpage')
const nextMain = document.getElementById('buttonMain-nextpage')

const bayiContent = document.getElementById('bayi')
const ibuContent = document.getElementById('ibu')
const bayiContainer = document.getElementById('bayi-bungkus')
const ibuContainer = document.getElementById('ibu-bungkus')
const bayiBtn = document.getElementById('bayi-btn')
const ibuBtn = document.getElementById('ibu-btn')
const titleMasalah_1 = document.getElementById('title-masalah1')
const titleMasalah_2 = document.getElementById('title-masalah2')
const titleMasalah_3 = document.getElementById('title-masalah3')
const titleMasalah_4 = document.getElementById('title-masalah4')
const textMasalah_1 = document.getElementById('text-teks-masalah1')
const textMasalah_2 = document.getElementById('text-teks-masalah2')
const textMasalah_3 = document.getElementById('text-teks-masalah3')
const textMasalah_4 = document.getElementById('text-teks-masalah4')
const prevContainer = document.getElementById('prev-container')
const nextContainer = document.getElementById('next-container')


// button navbar
const btnintro = document.getElementById('introduction-logo')
const btnmain = document.getElementById('main-logo')
const btnyutub = document.getElementById('video-logo')



const animation = document.querySelector('.move div');
const animation2 = document.querySelector('.move2 div');

let MainContent = 0

nextMain.addEventListener('click', () => {

    if (MainContent == 0) {
        // animasi
        benefitContainer.classList.add('animate__animated', 'animate__fadeOutUpBig')

        // content
        setTimeout(() => {
            lekatContent.classList.remove('hide')
            benefitContent.classList.add('hide')
            benefitContainer.classList.remove('animate__animated', 'animate__fadeOutUpBig')
            lekatContainer.classList.add('animate__animated', 'animate__fadeInUpBig')
            prevContainer.classList.add('animate__animated', 'animate__fadeInUp')
            prevContainer.classList.remove('hide')
        }, 500);

        // text
        MainContent = 1
        console.log(MainContent)
    } else if (MainContent == 1) {
        // animasi
        lekatContainer.classList.add('animate__animated', 'animate__fadeOutUpBig')

        // content
        setTimeout(() => {
            susuiContent.classList.remove('hide')
            lekatContent.classList.add('hide')
            lekatContainer.classList.remove('animate__animated', 'animate__fadeOutUpBig')
            susuiContainer.classList.add('animate__animated', 'animate__fadeInUpBig')
            prevContainer.classList.remove('animate__animated', 'animate__fadeInUp')
        }, 500);

        // text
        MainContent = 2
        console.log(MainContent)
    } else if (MainContent == 2) {
        // animasi
        susuiContainer.classList.add('animate__animated', 'animate__fadeOutUpBig')

        // content
        setTimeout(() => {
            kondisiContent.classList.remove('hide')
            susuiContent.classList.add('hide')
            susuiContainer.classList.remove('animate__animated', 'animate__fadeOutUpBig')
            kondisiContainer.classList.add('animate__animated', 'animate__fadeInUpBig')
        }, 500);

        // text
        MainContent = 3
    } else if (MainContent == 3) {
        // animasi
        kondisiContainer.classList.add('animate__animated', 'animate__fadeOutUpBig')

        // content
        setTimeout(() => {
            masalahContent.classList.remove('hide')
            kondisiContent.classList.add('hide')
            kondisiContainer.classList.remove('animate__animated', 'animate__fadeOutUpBig')
            masalahContainer.classList.add('animate__animated', 'animate__fadeInUpBig')
            nextContainer.classList.add('hide')
        }, 500);
        // text
        MainContent = 3
    }
})

prevMain.addEventListener('click', () => {
    if (MainContent == 3) {
        // animasi
        masalahContainer.classList.add('animate__animated', 'animate__fadeOutDownBig')

        // content
        setTimeout(() => {
            kondisiContent.classList.remove('hide')
            masalahContent.classList.add('hide')
            masalahContainer.classList.remove('animate__animated', 'animate__fadeOutDownBig')
            kondisiContainer.classList.add('animate__animated', 'animate__fadeInDownBig')
            nextContainer.classList.add('animate__animated', 'animate__fadeInUp')
            nextContainer.classList.remove('hide')
        }, 600);

        MainContent = 2
    } else if (MainContent == 2) {
        // animasi
        kondisiContainer.classList.add('animate__animated', 'animate__fadeOutDownBig')

        // content
        setTimeout(() => {
            susuiContent.classList.remove('hide')
            kondisiContent.classList.add('hide')
            kondisiContainer.classList.remove('animate__animated', 'animate__fadeOutDownBig')
            susuiContainer.classList.add('animate__animated', 'animate__fadeInDownBig')

        }, 600);

        MainContent = 1
    } else if (MainContent == 1) {
        // animasi
        susuiContainer.classList.add('animate__animated', 'animate__fadeOutDownBig')

        // content
        setTimeout(() => {
            lekatContent.classList.remove('hide')
            susuiContent.classList.add('hide')
            susuiContainer.classList.remove('animate__animated', 'animate__fadeOutDownBig')
            lekatContainer.classList.add('animate__animated', 'animate__fadeInDownBig')

        }, 600);

        MainContent = 0
    } else if (MainContent == 0) {
        // animasi
        lekatContainer.classList.add('animate__animated', 'animate__fadeOutDownBig')

        // content
        setTimeout(() => {
            benefitContent.classList.remove('hide')
            lekatContent.classList.add('hide')
            lekatContainer.classList.remove('animate__animated', 'animate__fadeOutDownBig')
            benefitContainer.classList.add('animate__animated', 'animate__fadeInDownBig')
            prevContainer.classList.add('hide')

        }, 600);

        MainContent = 0
    }
})



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



function bounce() {
    // Ambil elemen dengan kelas 'link'
    var links = document.querySelectorAll('.link');

    // Iterasi melalui semua elemen 'link'
    links.forEach(function (link) {
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
    });
}

// bounce button pada halaman pengertian
setInterval(bounce, 500); // Panggil fungsi bounce setiap 1 detik

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

let main = 0
ibuBtn.addEventListener('click', () => {
    if (main !== 0) {
        bayiBtn.classList.remove('active')
        ibuBtn.classList.add('active')

        // animasi
        ibuContainer.classList.add('animate__animated', 'animate__fadeOutRightBig')

        // content
        setTimeout(() => {
            bayiContent.classList.remove('hide')
            ibuContent.classList.add('hide')
            ibuContainer.classList.remove('animate__animated', 'animate__fadeOutRightBig')
            bayiContainer.classList.add('animate__animated', 'animate__fadeInLeftBig')
        }, 90);

        // current
        main = 0
    }
})

bayiBtn.addEventListener('click', function () {
    if (main !== 1) {
        ibuBtn.classList.remove('active')
        bayiBtn.classList.add('active')

        // animasi
        bayiContainer.classList.add('animate__animated', 'animate__fadeOutLeftBig')

        // content
        setTimeout(() => {
            ibuContent.classList.remove('hide')
            bayiContent.classList.add('hide')
            bayiContainer.classList.remove('animate__animated', 'animate__fadeOutLeftBig')
            ibuContainer.classList.add('animate__animated', 'animate__fadeInRightBig')
        }, 90);

        // curindex
        main = 1
    }
});

let mainIndex = 0

titleMasalah_1.addEventListener('mouseenter', () => {
    textMasalah_1.classList.remove('hide')
    textMasalah_1.classList.add('animate__animated', 'animate__flipInX')
})
titleMasalah_1.addEventListener('mouseleave', () => {
    textMasalah_1.classList.add('hide')
    textMasalah_1.classList.remove('animate__animated', 'animate__flipInX')
})

titleMasalah_2.addEventListener('mouseenter', () => {
    textMasalah_2.classList.remove('hide')
    textMasalah_2.classList.add('animate__animated', 'animate__flipInX')
})
titleMasalah_2.addEventListener('mouseleave', () => {
    textMasalah_2.classList.add('hide')
    textMasalah_2.classList.remove('animate__animated', 'animate__flipInX')
})

titleMasalah_3.addEventListener('mouseenter', () => {
    textMasalah_3.classList.remove('hide')
    textMasalah_3.classList.add('animate__animated', 'animate__flipInX')
})
titleMasalah_3.addEventListener('mouseleave', () => {
    textMasalah_3.classList.add('hide')
    textMasalah_3.classList.remove('animate__animated', 'animate__flipInX')
})

titleMasalah_4.addEventListener('mouseenter', () => {
    textMasalah_4.classList.remove('hide')
    textMasalah_4.classList.add('animate__animated', 'animate__flipInX')
})
titleMasalah_4.addEventListener('mouseleave', () => {
    textMasalah_4.classList.add('hide')
    textMasalah_4.classList.remove('animate__animated', 'animate__flipInX')
})