import Ecom from './image/Screenshot (85).png'
import s1 from './image/Screenshot (73).png'
import budget from './image/Screenshot (76).png'
import Linkedin from './image/Screenshot (78).png'
export const plist = [
    {
        id: 'framework',
        title: 'Framework',
    },
    {
        id: 'styling',
        title: 'Styling',
    },
    {
        id: 'others',
        title: 'Others',
    }
];
export const framework = [
    {
        id: 1,
        title: 'ReactJS',
        img: "data:image/png;base64,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",
    },
    {
        id: 2,
        title: 'Javascript',
        img: 'https://cpoint-lab.co.jp/wp-content/uploads/2021/05/JavaScript_logo.png',
    },
    {
        id: 3,
        title: 'Redux',
        img: 'data:image/png;base64,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',
    },
    {
        id: 4,
        title: 'REST API',
        img: 'https://miro.medium.com/max/790/1*uHzooF1EtgcKn9_XiSST4w.png',
    },
];
export const styling = [
    {
        id: 1,
        title: 'CSS',
        img: 'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png',
    },
    {
        id: 2,
        title: 'Styled Components',
        img: "https://www.styled-components.com/atom.png",
    },
    {
        id: 3,
        title: 'SCSS',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_HXX3PVXXG4_3nbFx4WXyr3BjkqxW3GEV6pmi5G4Ev0rtiXiVFNvvwiriM8FrzX03F3E&usqp=CAU',
    },
    {
        id: 4,
        title: 'Material UI',
        img: 'https://cdn.filestackcontent.com/5yjLJYBrQ6EHpN9dK0ak',
    },
];
export const others = [
    {
        id: 1,
        title: 'Firebase',
        img: 'data:image/png;base64,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',
    },
    {
        id: 2,
        title: 'Git',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0_2-7Wfkt3qIOPRGnFiePq8Af4i_cIedoWAAb4rdyfalsBvkiCo8XsJAYC8zams_uIwE&usqp=CAU',
    },
    {
        id: 3,
        title: 'Github',
        img: 'https://pbs.twimg.com/profile_images/1414990564408262661/r6YemvF9_400x400.jpg',
    },
    {
        id: 4,
        title: 'Bootstrap',
        img: 'https://res.cloudinary.com/practicaldev/image/fetch/s--LTUFkuK5--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://imgur.com/Mj3H69v.png',
    },
];

export const projectData=[
    {
        id:1,
        imgurl:budget,
        lnkurl:'https://ritwik069.github.io/budget-analysis/',
        prjTitle:'Budget Analysis',
        desc:'This is a budget analysisi app/website which has some default value you can clear it and start by your own and aslo can track tour total expense and income with final balance . This app is made with React js frame work and data is managed using Context Api',

    },
    {
        id:2,
        imgurl:Linkedin,
        lnkurl:'https://linkedinproject-1e178.web.app/',
        prjTitle:'Social Media App',
        desc:'This is a social media clone made on Redux React App and authenticaion is done using Firebase Auth plus the storage of posts is also in Firebase FireStone . Here you can register and login using you credentials and can post atricles in written formate .',

    },
    {
        id:3,
        imgurl:Ecom,
        lnkurl:'https://ritwik069.github.io/electro/',
        prjTitle:'E-Commerce',
        desc:' This is the basic Ecommerse website named Electro made on React App and Context Api here  styled componenets with material ui is used . Here you can buy products add them to card exit card using Hooks and functional Components ',

    },






];