import '../blocks/about.css';
import '../images/group.ico';
import '../../node_modules/swiper/js/swiper.min.js';

import Swiper from 'swiper';
import '../../node_modules/swiper/css/swiper.css';

import { GithubApi } from './modules/GithubApi';
import { CommitCardList } from './components/CommitCardList';

const commitCardList = new CommitCardList();
const apiGitHub = new GithubApi('https://api.github.com/repos/DesertoRaposa/News-Analyzer/commits?sha=level-3');

apiGitHub.getCommits()
    .then(result => {
        console.log(result);
        //console.log(result[0].html_url);
        commitCardList.setData(result);
        commitCardList.renderCards();

        const mySwiper = new Swiper('.swiper-container', {
            // Optional parameters
           //observer: true,
            breakpoints: {
                // when window width is >= 320px
                300: {
                    slidesPerView: 1.4,
                },
                // when window width is >= 480px
                800: {
                    slidesPerView: 2.4,
                },
                // when window width is >= 640px
                1000: {
                    slidesPerView: 3.4
                }
            },
            direction: 'horizontal',
            loop: true,
            slidesPerView: 3.4,
            spaceBetween: 16,
            centeredSlides: true,
        
            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
            },
        
            // Navigation arrows
            navigation: {
                nextEl: '.next-link_arrow',
                prevEl: '.prev-link_arrow',
            },
        
        });

    })
    .catch(err => {
        console.log(`Ошибка: ${err}`);
    })
