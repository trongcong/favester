// icon community
import InsiderZine from "../../assets/image/favester/icons-logo/insiderzine.png";
import WickedTrailers from "../../assets/image/favester/icons-logo/wicked.png";
import Rikimbo from "../../assets/image/favester/icons-logo/rikimbo.png";
import VideoGamePro from "../../assets/image/favester/icons-logo/videogamepro.png";
import Sprinkster from "../../assets/image/favester/icons-logo/sprinkster.png";
import Leisuretronics from "../../assets/image/favester/icons-logo/leisuretronics.png";
import Sharematic from "../../assets/image/favester/icons-logo/sharematic.png";
import Coneeko from "../../assets/image/favester/icons-logo/coneeko.png";

//icon tab screen
import SC_update from "../../assets/image/favester/screenshots/updates.jpg";
import SC_discover from "../../assets/image/favester/screenshots/discover.jpg";
import SC_profiles from "../../assets/image/favester/screenshots/profiles.jpg";
import SC_apps from "../../assets/image/favester/screenshots/apps.jpg";

import SC_ICON_update from "../../assets/image/favester/screenshots/liveupdates.svg";
import SC_ICON_discover from "../../assets/image/favester/screenshots/discover.svg";
import SC_ICON_profiles from "../../assets/image/favester/screenshots/profiles.svg";
import SC_ICON_apps from "../../assets/image/favester/screenshots/apps.svg";

// Platform Features
import PF_topics from "../../assets/image/favester/platform-features/topics.svg";
import PF_people from "../../assets/image/favester/platform-features/wethepeople.svg";
import PF_privacy from "../../assets/image/favester/platform-features/privacy.svg";
import PF_character from "../../assets/image/favester/platform-features/500characters.svg";
import PF_controls from "../../assets/image/favester/platform-features/controls.svg";
import PF_community from "../../assets/image/favester/platform-features/community.svg";

import Icon1 from "../../assets/image/favester/app-slider/6.svg";
import Icon2 from "../../assets/image/favester/app-slider/1.svg";
import Icon3 from "../../assets/image/favester/app-slider/2.svg";
import Icon4 from "../../assets/image/favester/app-slider/3.svg";
import Icon5 from "../../assets/image/favester/app-slider/4.svg";
import Icon6 from "../../assets/image/favester/app-slider/5.svg";

// Service Icons
import SV_Control from '../../assets/image/favester/services/control.svg';
import SV_Branding from '../../assets/image/favester/services/branding.svg';
import SV_Uncensored from '../../assets/image/favester/services/uncensored.svg';
import SV_Promotion from '../../assets/image/favester/services/promotion.svg';
import SV_Unlimited from '../../assets/image/favester/services/unlimited.svg';
import SV_Support from '../../assets/image/favester/services/support.svg';

//testimonial avatar
import TES_Rudy from '../../assets/image/favester/testimonial/rudy.jpg';
import TES_Serena from '../../assets/image/favester/testimonial/serena.jpg';
import TES_Stacie from '../../assets/image/favester/testimonial/stacie.jpg';
import TES_Steven from '../../assets/image/favester/testimonial/steven.jpg';
import TES_Warwick from '../../assets/image/favester/testimonial/warwick.jpg';

export const MENU_ITEMS = [
    {
        label: 'Home',
        path: '#banner_section',
        offset: '55',
    },
    {
        label: 'Communities',
        path: '#communities_section',
        offset: '55',
    },
    {
        label: 'Features',
        path: '#feature_section',
        offset: '55',
    },
    {
        label: 'Apps',
        path: '#app_section',
        offset: '55',
    },
    {
        label: 'Hosting',
        path: '#hosting_section',
        offset: '55',
    },
];

export const LOGOS = [
    {
        awardLogo: InsiderZine,
        awardName: 'InsiderZine',
        awardDetails: 'All the news mainstream media is too afraid to touch.',
        link: 'https://www.insiderzine.com/',
    },
    {
        awardLogo: WickedTrailers,
        awardName: 'WickedTrailers',
        awardDetails: 'Dedicated to the latest game and movie trailers.',
        link: 'https://www.wickedtrailers.com/',
    },
    {
        awardLogo: Rikimbo,
        awardName: 'Rikimbo',
        awardDetails: 'Your source for Japanese anime and manga.',
        link: 'https://www.rikimbo.com/',
    },
    {
        awardLogo: VideoGamePro,
        awardName: 'VideoGamePro',
        awardDetails: 'Gaming news, reviews and advice for all platforms.',
        link: 'https://www.videogamepro.com/',
    },
    {
        awardLogo: Sprinkster,
        awardName: 'Sprinkster',
        awardDetails: 'Only the best new videos, crowdsourced by the community',
        link: 'https://www.sprinkster.com/',
    },
    {
        awardLogo: Leisuretronics,
        awardName: 'Leisuretronics',
        awardDetails: 'Gadget and technology news and reviews.',
        link: 'https://www.leisuretronics.com/',
    },
    {
        awardLogo: Sharematic,
        awardName: 'Sharematic',
        awardDetails: 'The most amazing image and gif sharing service.',
        link: 'https://www.sharematic.com/',
    },
    {
        awardLogo: Coneeko,
        awardName: 'Coneeko',
        awardDetails: 'Illustrators, graphic designers and Photoshop gurus show off their skills.',
        link: 'https://www.coneeko.com/',
    },
];

export const SCREENSHOTS = [
    {
        icon: SC_ICON_update,
        title: 'Live updates',
        image: SC_update,
    },
    {
        icon: SC_ICON_discover,
        title: 'Discover',
        image: SC_discover,
    },
    {
        icon: SC_ICON_profiles,
        title: 'Profiles',
        image: SC_profiles,
    },
    {
        icon: SC_ICON_apps,
        title: 'Apps',
        image: SC_apps,
    },
];

export const PlatformFeatures = [
    {
        id: 1,
        icon: PF_topics,
        title: 'Topics',
        description:
            'Favester is all about your favorite topics - find people who are passionate about the same things.',
    },
    {
        id: 2,
        icon: PF_people,
        title: 'We the people',
        description:
            'Favester supports free speech, freedom of expression and freedom of opinion.',
    },
    {
        id: 3,
        icon: PF_privacy,
        title: 'Privacy',
        description:
            'You\'re in total control over who can see every post you make and who can see your profile.',
    },
    {
        id: 4,
        icon: PF_character,
        title: '500 characters',
        description:
            'Plenty of room to write meaningful posts and express yourself the way you want to.',
    },
    {
        id: 5,
        icon: PF_controls,
        title: 'Control',
        description:
            'Granular content and media warnings that you can use to hide sensitive content or spoilers.',
    },
    {
        id: 6,
        icon: PF_community,
        title: 'Community',
        description:
            'Funded and supported by community members, so we don\'t have to exploit your user data.',
    },
];

export const ON_THE_GO = [
    {
        id: 1,
        image: Icon1,
        title: 'Super Performance',
    },
    {
        id: 2,
        image: Icon2,
        title: 'Colour schemes',
    },
    {
        id: 3,
        image: Icon3,
        title: 'Notifications',
    },

    {
        id: 4,
        image: Icon4,
        title: 'Galleries',
    },

    {
        id: 5,
        image: Icon5,
        title: 'Post options',
    },

    {
        id: 6,
        image: Icon6,
        title: 'Face ID',
    },
];

export const TESTIMONIALS = [
    {
        img: TES_Rudy,
        id: 1,
        description:
            'I love that it seems to be like a mixture of Reddit and a messaging app. Will def promote to my contacts. Bye bye WhatsApp and the likes!',
        name: 'Rudy M.',
        designation: 'Beta Tester - Denver',
    },
    {
        img: TES_Serena,
        id: 2,
        description:
            'For the same reasons I like Discord, I like this app as it offers a way for people with a similar interest, or a program, topic or company.',
        name: 'Serena B.',
        designation: 'Beta Tester - London',
    },

    {
        img: TES_Stacie,
        id: 3,
        description:
            'I like the discovery potential for finding topics/channels of interest. There are some really, really niche topics that no one would think of.',
        name: 'Stacie M.',
        designation: 'Beta Tester - Chicago',
    },

    {
        img: TES_Steven,
        id: 4,
        description:
            'I like that you can talk to like minded people, not necessarily just friends or family that you have in contacts.',
        name: 'Steven N.',
        designation: 'Beta Tester - Melbourne',
    },

    {
        img: TES_Warwick,
        id: 5,
        description:
            'I\'m a graphics person... I love that you are generous with the use of graphics! And... I like the opportunity to form groups with like-minded folks.',
        name: 'Warwick F.',
        designation: 'Beta Tester - Amsterdam',
    },
];

// Service Section Content
export const SERVICES_DATA = [
    {
        title: 'Control',
        description:
            'You set your own rules and direction for your community.',
        icon: SV_Control,
    },
    {
        title: 'Branding',
        description:
            'We\'ll provide your own dedicated domain, and create a professional logo and mascot.',
        icon: SV_Branding,
    },
    {
        title: 'Uncensored',
        description:
            'We believe in freedom of speech, opinion and expression.',
        icon: SV_Uncensored,
    },
    {
        title: 'Promotion',
        description:
            'We help promote your community to millions of other members in the network.',
        icon: SV_Promotion,
    },
    {
        title: 'Unlimited',
        description:
            'Your community can expand to millions of members without costing you a dime.',
        icon: SV_Unlimited,
    },
    {
        title: 'Support',
        description:
            'Our team of engineers work hard to make sure your server is always online and running fine.',
        icon: SV_Support,
    },
];


export const Faq = [
    {
        id: 1,
        expend: true,
        title: 'How to contact with Customer Service?',
        description:
            'Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!. ',
    },
    {
        id: 2,
        title: 'App installation failed, how to update system information?',
        description:
            'Please read the documentation carefully . We also have some online  video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum . ',
    },
    {
        id: 3,
        title: 'Website reponse taking time, how to improve?',
        description:
            'At first, Please check your internet connection . We also have some online  video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum .',
    },
    {
        id: 4,
        title: 'New update fixed all bug and issues?',
        description:
            'We are giving the update of this theme continuously . You will receive an email Notification when we push an update. Always try to be updated with us .',
    },
    {
        id: 4,
        title: 'New update fixed all bug and issues?',
        description:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    },
];

export const Features = [
    {
        id: 1,
        icon: 'flaticon-creative',
        title: 'Powerful Features',
        description:
            'Automate time consuming tasks like organising expenses ,tracking your time and following up with clients ',
    },
    {
        id: 2,
        icon: 'flaticon-briefing',
        title: 'Easy Invoicing',
        description:
            'Want to surprice your clients with professional looking invoices ? Then you are some clicks behind .',
    },
    {
        id: 3,
        icon: 'flaticon-flask',
        title: 'Easy To Use',
        description:
            'Very Simple and intuitive. So you have to spend less time in paperwork and impress your customer with looks',
    },
];

export const Footer_Data = [
    {
        title: 'About Us',
        menuItems: [
            {
                url: 'https://kb.favester.com',
                text: 'What is Favester?',
            },
            {
                url: 'https://kb.favester.com',
                text: 'Knowledge Base',
            },
            {
                url: 'https://kb.favester.com',
                text: 'Customer Support',
            },
        ],
    },
    {
        title: 'Policies',
        menuItems: [
            {
                url: 'https://kb.favester.com',
                text: 'Privacy Policy',
            },
            {
                url: 'https://kb.favester.com',
                text: 'Terms & Conditions',
            },
            {
                url: 'https://kb.favester.com',
                text: 'Copyright Policy',
            },
        ],
    },
    {
        title: 'Compare To',
        menuItems: [
            {
                url: 'https://kb.favester.com',
                text: 'Facebook',
            },
            {
                url: 'https://kb.favester.com',
                text: 'Twitter',
            },
            {
                url: 'https://kb.favester.com',
                text: 'Tumblr',
            },
            {
                url: 'https://kb.favester.com',
                text: 'Blogger',
            },
            {
                url: 'https://kb.favester.com',
                text: 'Medium',
            },
        ],
    },
    {
        title: 'Featured Sites',
        menuItems: [
            {
                url: 'https://www.videogamepro.com',
                text: 'VideoGamePro',
            },
            {
                url: 'https://www.leisuretronics.com',
                text: 'LeisureTronics',
            },
            {
                url: 'https://www.insderzine.com',
                text: 'InsiderZine',
            },
            {
                url: 'https://www.sharematic.com',
                text: 'Sharematic',
            },
            {
                url: 'https://www.coneeko.com',
                text: 'Coneeko',
            },
        ],
    },
];

// export const Timeline = [
//     {
//         title: 'Wireframing for project',
//         description:
//             'We respect our customer opinions and deals with them with perfect wireframing.',
//     },
//     {
//         title: 'UI/UX for project',
//         description:
//             'We provide the best UI/UX Design by following the latest trends of the market .',
//     },
//     {
//         title: 'Negotiation about project',
//         description:
//             'After the negotiation is done , We start to build the project with latest technology .',
//     },
// ];
//
// export const Testimonial = [
//     {
//         id: 1,
//         name: 'Michal Andry',
//         designation: 'Ceo of Invission Co.',
//         comment:
//             'Love to work with this designer in every our future project to ensure we are going to build best prototyping features.',
//         avatar_url: Client1,
//         social_icon: 'flaticon-instagram',
//     },
//     {
//         id: 2,
//         name: 'Roman Ul Oman',
//         designation: 'Co-founder of QatarDiaries',
//         comment:
//             'Impressed with master class support of the team and really look forward for the future. A true passionate team.',
//         avatar_url: Client2,
//         social_icon: 'flaticon-twitter-logo-silhouette',
//     },
// ];
//
//
// export const MONTHLY_PRICING_TABLE = [
//     {
//         freePlan: true,
//         name: 'Basic Account',
//         description: 'For Small teams or group who need to build website ',
//         price: '$0',
//         priceLabel: 'Only for first month',
//         buttonLabel: 'CREATE FREE ACCOUNT',
//         url: '#',
//         listItems: [
//             {
//                 content: 'Drag & Drop Builder',
//             },
//             {
//                 content: '1,000s of Templates Ready',
//             },
//             {
//                 content: 'Blog Tools',
//             },
//             {
//                 content: 'eCommerce Store ',
//             },
//             {
//                 content: '30+ Webmaster Tools',
//             },
//         ],
//     },
//     {
//         name: 'Business Account',
//         description: 'For Mediums teams or group who need to build website ',
//         price: '$9.87',
//         priceLabel: 'Per month & subscription yearly',
//         buttonLabel: 'START FREE TRIAL',
//         url: '#',
//         listItems: [
//             {
//                 content: 'Drag & Drop Builder',
//             },
//             {
//                 content: '1,000s of Templates Ready',
//             },
//             {
//                 content: 'Blog Tools',
//             },
//             {
//                 content: 'eCommerce Store ',
//             },
//             {
//                 content: '30+ Webmaster Tools',
//             },
//         ],
//     },
//     {
//         name: 'Premium Account',
//         description: 'For Large teams or group who need to build website ',
//         price: '$12.98',
//         priceLabel: 'Per month & subscription yearly',
//         buttonLabel: 'START FREE TRIAL',
//         url: '#',
//         listItems: [
//             {
//                 content: 'Drag & Drop Builder',
//             },
//             {
//                 content: '1,000s of Templates Ready',
//             },
//             {
//                 content: 'Blog Tools',
//             },
//             {
//                 content: 'eCommerce Store ',
//             },
//             {
//                 content: '30+ Webmaster Tools',
//             },
//         ],
//     },
// ];
//
// export const YEARLY_PRICING_TABLE = [
//     {
//         freePlan: true,
//         name: 'Basic Account',
//         description: 'For a single client or team who need to build website ',
//         price: '$0',
//         priceLabel: 'Only for first month',
//         buttonLabel: 'CREATE FREE ACCOUNT',
//         url: '#',
//         listItems: [
//             {
//                 content: 'Drag & Drop Builder',
//             },
//             {
//                 content: '1,000s of Templates Ready',
//             },
//             {
//                 content: 'Blog Tools',
//             },
//             {
//                 content: 'eCommerce Store ',
//             },
//             {
//                 content: '30+ Webmaster Tools',
//             },
//         ],
//     },
//     {
//         name: 'Business Account',
//         description: 'For Small teams or group who need to build website ',
//         price: '$6.00',
//         priceLabel: 'Per month & subscription yearly',
//         buttonLabel: 'START FREE TRIAL',
//         url: '#',
//         listItems: [
//             {
//                 content: 'Unlimited secure storage',
//             },
//             {
//                 content: '2,000s of Templates Ready',
//             },
//             {
//                 content: 'Blog Tools',
//             },
//             {
//                 content: '24/7 phone support',
//             },
//             {
//                 content: '50+ Webmaster Tools',
//             },
//         ],
//     },
//     {
//         name: 'Premium Account',
//         description: 'For Large teams or group who need to build website ',
//         price: '$9.99',
//         priceLabel: 'Per month & subscription yearly',
//         buttonLabel: 'START FREE TRIAL',
//         url: '#',
//         listItems: [
//             {
//                 content: 'Drag & Drop Builder',
//             },
//             {
//                 content: '3,000s of Templates Ready',
//             },
//             {
//                 content: 'Advanced branding',
//             },
//             {
//                 content: 'Knowledge base support',
//             },
//             {
//                 content: '80+ Webmaster Tools',
//             },
//         ],
//     },
// ];
//
