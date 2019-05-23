import Screenshot1 from '../../assets/image/developers/screen-1.png';

import AuthorOne from '../../assets/image/developers/author-1.jpg';
import AuthorTwo from '../../assets/image/developers/author-2.jpg';
import AuthorThree from '../../assets/image/developers/author-3.jpg';

import {ic_monetization_on} from 'react-icons-kit/md/ic_monetization_on';
import {ic_settings} from 'react-icons-kit/md/ic_settings';
import {pieChart} from 'react-icons-kit/icomoon/pieChart';
import {briefcase} from 'react-icons-kit/fa/briefcase';

export const MENU_ITEMS = [
    // {
    //     label: 'Home',
    //     path: '#banner_section',
    //     offset: '0',
    // },
    // {
    //     label: 'Screenshot',
    //     path: '#screenshot_section',
    //     offset: '0',
    // },
    {
        label: 'Features',
        path: '#screenshot_section',
        offset: '0',
    },
    {
        label: 'Channels',
        path: '#feature_section',
        offset: '0',
    },
    {
        label: 'Testimonials',
        path: '#testimonial_section',
        offset: '0',
    },
];

import IC_Rails from '../../assets/image/developers/programminglogos/rails.png';
import IC_React from '../../assets/image/developers/programminglogos/react.png';
import IC_Node from '../../assets/image/developers/programminglogos/nodejs.png';
import IC_Android from '../../assets/image/developers/programminglogos/android.png';
import IC_Pub from '../../assets/image/developers/programminglogos/activitypub.png';

export const SERVICE_ITEMS = [
    {
        icon: IC_Rails,
        title: 'Ruby on Rails',
    },
    {
        icon: IC_React,
        title: 'React',
    },
    {
        icon: IC_Node,
        title: 'Node.js',
    },
    {
        icon: IC_Android,
        title: 'Android',
    },
    {
        icon: IC_Pub,
        title: 'Activity Pub',
    },
];

import ISC_Topics from '../../assets/image/developers/screenshot/topics.png';
import ISC_Groups from '../../assets/image/developers/screenshot/groups.png';
import ISC_Apps from '../../assets/image/developers/screenshot/apps.png';
import ISC_Wikis from '../../assets/image/developers/screenshot/wikis.png';
import SC_Topics from '../../assets/image/developers/screenshot/topics.jpg';
import SC_Groups from '../../assets/image/developers/screenshot/groups.jpg';
import SC_Apps from '../../assets/image/developers/screenshot/apps.jpg';
import SC_Wikis from '../../assets/image/developers/screenshot/wikis.jpg';

export const SCREENSHOTS = [
    {
        icon: ISC_Topics,
        title: 'Topics',
        image: SC_Topics,
    },
    {
        icon: ISC_Groups,
        title: 'Groups',
        image: SC_Groups,
    },
    {
        icon: ISC_Apps,
        title: 'Apps',
        image: SC_Apps,
    },
    {
        icon: ISC_Wikis,
        title: 'Wikis',
        image: SC_Wikis,
    },
];

import IC_Games from '../../assets/image/developers/channellogos/games.png';
import IC_Movies from '../../assets/image/developers/channellogos/movies.png';
import IC_Shows from '../../assets/image/developers/channellogos/tvshows.png';
import IC_Music from '../../assets/image/developers/channellogos/music.png';
import IC_Tech from '../../assets/image/developers/channellogos/tech.png';
import IC_Design from '../../assets/image/developers/channellogos/design.png';


export const FEATURES = [
    {
        icon: IC_Games,
        title: 'Games',
        description:
            'Talk about your favourite games and discover new ones. Get to know people who love the same games as you.',
    },
    {
        icon: IC_Movies,
        title: 'Movies',
        description:
            'Learn more about the latest releases and classic gems. Watch the newest trailers for upcoming blockbusters.',
    },
    {
        icon: IC_Shows,
        title: 'TV Shows',
        description:
            'Delve deep into your favourite TV shows and chat live as episodes go to air. Find new bingeworthy shows to watch.',
    },
    {
        icon: IC_Music,
        title: 'Music',
        description:
            'Discuss your favourite artists. Share SoundCloud songs or upload your own tracks and get community feedback.',
    },
    {
        icon: IC_Tech,
        title: 'Tech',
        description:
            'There\'s nothing more exciting than exploring leaks and rumours about the latest gadgets and services.',
    },
    {
        icon: IC_Design,
        title: 'Design',
        description:
            'Share your latest artistic creations and get valuable tips from the art community, within a beautiful interface.',
    },
];


export const MONTHLY_PRICING_TABLE = [
    {
        name: 'Basic Account',
        description: 'For Small teams or group who need to build website ',
        price: '$0',
        priceLabel: 'Only for first month',
        buttonLabel: 'Start for free',
        url: '#',
        listItems: [
            {
                content: 'Drag & Drop Builder',
            },
            {
                content: '1,000s of Templates Ready',
            },
            {
                content: 'Blog Tools',
            },
            {
                content: 'eCommerce Store ',
            },
            {
                content: '30+ Webmaster Tools',
            },
        ],
    },
    {
        name: 'Business Account',
        description: 'For Mediums teams or group who need to build website ',
        price: '$9.87',
        priceLabel: 'Per month & subscription yearly',
        buttonLabel: 'Register Now',
        url: '#',
        trialButtonLabel: 'Or Start 14 Days trail',
        trialURL: '#',
        listItems: [
            {
                content: 'Drag & Drop Builder',
            },
            {
                content: '1,000s of Templates Ready',
            },
            {
                content: 'Blog Tools',
            },
            {
                content: 'eCommerce Store ',
            },
            {
                content: '30+ Webmaster Tools',
            },
        ],
    },
    {
        name: 'Premium Account',
        description: 'For Large teams or group who need to build website ',
        price: '$12.98',
        priceLabel: 'Per month & subscription yearly',
        buttonLabel: 'Register Now',
        url: '#',
        trialButtonLabel: 'Or Start 14 Days trail',
        trialURL: '#',
        listItems: [
            {
                content: 'Drag & Drop Builder',
            },
            {
                content: '1,000s of Templates Ready',
            },
            {
                content: 'Blog Tools',
            },
            {
                content: 'eCommerce Store ',
            },
            {
                content: '30+ Webmaster Tools',
            },
        ],
    },
];

export const YEARLY_PRICING_TABLE = [
    {
        name: 'Basic Account',
        description: 'For a single client or team who need to build website ',
        price: '$0',
        priceLabel: 'Only for first month',
        buttonLabel: 'Start for free',
        url: '#',
        listItems: [
            {
                content: 'Drag & Drop Builder',
            },
            {
                content: '1,000s of Templates Ready',
            },
            {
                content: 'Blog Tools',
            },
            {
                content: 'eCommerce Store ',
            },
            {
                content: '30+ Webmaster Tools',
            },
        ],
    },
    {
        name: 'Business Account',
        description: 'For Small teams or group who need to build website ',
        price: '$6.00',
        priceLabel: 'Per month & subscription yearly',
        buttonLabel: 'Register Now',
        url: '#',
        trialButtonLabel: 'Or Start 14 Days trail',
        trialURL: '#',
        listItems: [
            {
                content: 'Unlimited secure storage',
            },
            {
                content: '2,000s of Templates Ready',
            },
            {
                content: 'Blog Tools',
            },
            {
                content: '24/7 phone support',
            },
            {
                content: '50+ Webmaster Tools',
            },
        ],
    },
    {
        name: 'Premium Account',
        description: 'For Large teams or group who need to build website ',
        price: '$9.99',
        priceLabel: 'Per month & subscription yearly',
        buttonLabel: 'Register Now',
        url: '#',
        trialButtonLabel: 'Or Start 14 Days trail',
        trialURL: '#',
        listItems: [
            {
                content: 'Drag & Drop Builder',
            },
            {
                content: '3,000s of Templates Ready',
            },
            {
                content: 'Advanced branding',
            },
            {
                content: 'Knowledge base support',
            },
            {
                content: '80+ Webmaster Tools',
            },
        ],
    },
];

export const FAQ_DATA = [
    {
        expend: true,
        title: 'How to contact with Customer Service?',
        description:
            'Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!. ',
    },
    {
        title: 'App installation failed, how to update system information?',
        description:
            'Please read the documentation carefully . We also have some online  video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum . ',
    },
    {
        title: 'Website reponse taking time, how to improve?',
        description:
            'At first, Please check your internet connection . We also have some online  video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum .',
    },
    {
        title: 'New update fixed all bug and issues?',
        description:
            'We are giving the update of this theme continuously . You will receive an email Notification when we push an update. Always try to be updated with us .',
    },
];

export const FOOTER_WIDGET = [
    {
        title: 'About Us',
        menuItems: [
            {
                url: '#',
                text: 'Support Center',
            },
            {
                url: '#',
                text: 'Customer Support',
            },
            {
                url: '#',
                text: 'About Us',
            },
            {
                url: '#',
                text: 'Copyright',
            },
            {
                url: '#',
                text: 'Popular Campaign',
            },
        ],
    },
    {
        title: 'Our Information',
        menuItems: [
            {
                url: '#',
                text: 'Return Policy',
            },
            {
                url: '#',
                text: 'Privacy Policy',
            },
            {
                url: '#',
                text: 'Terms & Conditions',
            },
            {
                url: '#',
                text: 'Site Map',
            },
            {
                url: '#',
                text: 'Store Hours',
            },
        ],
    },
    {
        title: 'My Account',
        menuItems: [
            {
                url: '#',
                text: 'Press inquiries',
            },
            {
                url: '#',
                text: 'Social media directories',
            },
            {
                url: '#',
                text: 'Images & B-roll',
            },
            {
                url: '#',
                text: 'Permissions',
            },
            {
                url: '#',
                text: 'Speaker requests',
            },
        ],
    },
    {
        title: 'Policy',
        menuItems: [
            {
                url: '#',
                text: 'Application security',
            },
            {
                url: '#',
                text: 'Software principles',
            },
            {
                url: '#',
                text: 'Unwanted software policy',
            },
            {
                url: '#',
                text: 'Responsible supply chain',
            },
        ],
    },
];

import TES_Rudy from "../../assets/image/favester/testimonial/rudy.jpg";
import TES_Serena from "../../assets/image/favester/testimonial/serena.jpg";
import TES_Stacie from "../../assets/image/favester/testimonial/stacie.jpg";
import TES_Steven from "../../assets/image/favester/testimonial/steven.jpg";
import TES_Warwick from "../../assets/image/favester/testimonial/warwick.jpg";

export const TESTIMONIALS = [
    {
        avatar: TES_Rudy,
        id: 1,
        review:
            'I love that it seems to be like a mixture of Reddit and a messaging app. Will def promote to my contacts. Bye bye WhatsApp and the likes!',
        title: 'A whole new platform',
        name: 'Rudy M.',
        designation: 'Beta Tester - Denver',
    },
    {
        avatar: TES_Serena,
        id: 2,
        title: 'As good as Discord',
        review:
            'For the same reasons I like Discord, I like this app as it offers a way for people with a similar interest, or a program, topic or company.',
        name: 'Serena B.',
        designation: 'Beta Tester - London',
    },

    {
        avatar: TES_Stacie,
        id: 3,
        title: 'No limit of topics',
        review:
            'I like the discovery potential for finding topics/channels of interest. There are some really, really niche topics that no one would think of.',
        name: 'Stacie M.',
        designation: 'Beta Tester - Chicago',
    },

    {
        avatar: TES_Steven,
        id: 4,
        title: 'Not just for friends',
        review:
            'I like that you can talk to like minded people, not necessarily just friends or family that you have in contacts.',
        name: 'Steven N.',
        designation: 'Beta Tester - Melbourne',
    },

    {
        avatar: TES_Warwick,
        id: 5,
        title: 'Love the graphics',
        review:
            'I\'m a graphics person... I love that you are generous with the use of graphics! And... I like the opportunity to form groups with like-minded folks.',
        name: 'Warwick F.',
        designation: 'Beta Tester - Amsterdam',
    },
];
