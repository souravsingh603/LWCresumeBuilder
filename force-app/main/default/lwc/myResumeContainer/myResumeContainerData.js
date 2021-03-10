import SOCIAL from '@salesforce/resourceUrl/SOCIAL';
import sourav from '@salesforce/resourceUrl/sourav';
export const PROFILE_IMAGE = sourav
export const SOCIAL_LINKS = [
    {
        type : 'twitter',
        label : 'twitter/Sourav90744491',
        link : 'https://twitter.com/Sourav90744491',
        icon : SOCIAL+'/SOCIAL/twitter.svg'
    },
    {
        type : 'LinkedIn',
        label : 'LinkedIn/sourav-singh-088a42b5',
        link : 'https://linkedin.com/in/sourav-singh-088a42b5',
        icon : SOCIAL+'/SOCIAL/linkedin.svg'
    },
    {
        type : 'GitHub',
        label : 'github/souravsingh603',
        link : 'https://github.com/souravsingh603',
        icon : SOCIAL+'/SOCIAL/github.svg'
    },
    {
        type : 'TrailHead',
        label : 'trailhead/ssingh369',
        link : 'https://trailblazer.me/id/ssingh369',
        icon : SOCIAL+'/SOCIAL/trailhead.svg'
    }

]

export const USER_DETAILS = {
    NAME: 'Sourav Singh',
    ROLE: 'SALESFORCE DEVELOPER',
    EMAIL: 'souravsingh6035@gmail.com',
    PHONE : '8296862422'
}
export const CAREER_SUMMARY = {
    HEADING : "CAREER SUMMARY",
    DESCRIPTION : "5 years of IT experience in understanding, analyzing and implementing Salesforce solutions to meet the business requirement for Fortune 500 companies. Good Understanding of Force.com Platform. Good knowledge on Salesforce lightning, Customization, Configuration, Apex, Visual Force pages, Triggers, SOQL, SOSL and integration with 3rd party systems. Contributed in complete project cycle right from requirement analysis to system study, designing, coding, testing, deployment, de-bugging, documentation and implementation.",

}

export const EXPERIENCE_DATA={
    HEADING: "Work Experience",
    EXPERIENCES: [
        {
            ROLE: "Salesforce Engineer",
            COMPANY_NAME: "SHELL",
            DURATION: "2020 - Present",
            DESCRIPTION:
                "Implemented Service Cloud Solution for Shell Customer Operation Specialists for 80 countries.Used various service cloud features like Omni channel, Email2Case, CTI, Milestones, Entitlements and custom components using LWC.Working in one of the fortune 10 product company provided me with the opportunity to understand the business properly which made my work more meaningful and interesting. It helped me come up with better solutions to fulfill the business needs. ",
            JOBROLE: "Worked directly with Customer Operation Specialist and Business Leads to gather requirement. Involved in technical design discussions with architects. Worked as a senior developer for end to end solution implementation.",
            TECHNOLOGIES_USED: {
                HEADING: 'Technologies used',
                LIST: [
                    "LWC",
                    "Aura",
                    "Javascript",
                    "Apex",
                    "Integration",
                    "CICD",
                    "Service Cloud",
                    "Agile Methodoligies"
                ]
            },
        },
        {
            ROLE: "Salesforce Developer",
            COMPANY_NAME: "Deloitte USI",
            DURATION: "2018 - 2020",
            DESCRIPTION:
                "Working for a Salesforce Platinum Partner company provided me with the opportunity to work on some of most complex projects and niche salesforce features. Working for one of the top IT consulting firm nurtured my interpersonal and negotiation skills. It also helped me to present my creativity and skills in a meaningful way.",
            JOBROLE: "Implemented complete custom application using LWC to implement both sales and service cloud feature in the same canvas. It provided our customer 360-degree view. We made this application completely configurable using custom metadata, custom label and an Admin page.Worked as a salesforce developer and consultant. Implemented one the Biggest lightning migration in salesforce domain for a major FSI Client. Implemented key business requirement and assisted the peers with their work. Held the sole responsibility of deployment using ANT and other version control systems like bitbucket and SourceTree. I had to work closely with client in an Agile setup for planning the sprints, feature releases and requirement gathering. I also had the responsibility of giving Sprint Demos, feature release documentation and planning preview and play for the users.",
            TECHNOLOGIES_USED: {
                HEADING: 'Technologies used',
                LIST: [
                    "LWC",
                    "Aura",
                    "SLDS",
                    "Javascript",
                    "Apex",
                    "SOQL",
                    "Agile Methodoligies"
                ]
            }
        },
        {
            ROLE: "Software Developer",
            COMPANY_NAME: "Infosys",
            DURATION: "2016-2018",
            DESCRIPTION:
                "Got wonderful training in Salesforce which helped me build my career as a Salesforce developer.Worked on multiple projects among which most of then were lightning migration and some were enhancements.Infosys provided me great learning environment and helped me understand the IT culture.",
            JOBROLE: "My role included solution implementation, contribution to solution design and playing part in end-to-end developement lifecycle.",
            TECHNOLOGIES_USED: {
                HEADING: 'Technologies used',
                LIST: [
                    "Angular",
                    "Bootstsrap",
                    "MobX",
                    "Webpack",
                    "HTML5/CSS3",
                    "Javascript",
                    "Agile Methodoligies"
                ]
            }
        }
    ]
}

export const EDUCATION_DATA={
    ICON: SOCIAL + '/SOCIAL/education.svg',
    HEADING: "EDUCATION",
    LIST:[
        {
            NAME: "Bachelors in Computer Science Engineering",
            UNIVERSITY_NAME: "BIJU PATNAIK UNIVERSITY OF TECHNOLOGY",
            DURATION: "2012 - 2016"
        }
    ]
}

export const AWARDS_DATA={
    ICON: SOCIAL + '/SOCIAL/awards.svg',
    HEADING: "AWARDS",
    LIST:[
        {
            NAME: "AWARD OF APPRECIATION",
            DESCRIPTION: "Received award of appreciation for successfuul implementation of phase 1 of  Service Cloud using LWC",
          
        },
        {
            NAME: "AWARD OF APPRECIATION",
            DESCRIPTION: "Received award of appreciation for successfuul implementation of phase 2 of  Service Cloud using LWC",
          
        },
        {
            NAME: "SPOT AWARD",
            DESCRIPTION: "Received Spot Award Delivering exceptional client Centered Performance",
          
        }

    ]
}

export const CERTIFICATION_DATA={
    ICON: SOCIAL + '/SOCIAL/certification.svg',
    HEADING: "CERTIFICATIONS",
    LIST:[
        {
            NAME: "Salesforce Platform Developer 1",
          
        },
        {
            NAME: "Salesforce Paltform Developer 2",
          
        },
        {
            NAME: "Salesforce Sharing and Visibility Designer",
          
        },
        {
            NAME: "Salesforce Administrator",
          
        },
        {
            NAME: "Salesforce Platform App Builder",
          
        }

    ]
}
export const LANGUAGES_DATA={
    ICON: SOCIAL + '/SOCIAL/awards.svg',
    HEADING: "LANGUAGES",
    LIST:[
        {
            NAME: "English",
            LEVEL: "Professional"
        },
        {
            NAME: "Hindi",
            LEVEL: "Native"          
        }

    ]
}

export const SKILLS_DATA ={
    HEADING: "SKILLS & TOOLS",
    SKILLS:[
        {
            HEADING: "FRONTEND",
            SKILLS_LIST: [
                { NAME: "Aura", LEVEL: "95" },
                { NAME: "Web Component", LEVEL: "80" },
                { NAME: "CSS", LEVEL: "75" },
                { NAME: "JavaScript", LEVEL: "89" },
                { NAME: "HTML5", LEVEL: "70" },
            ],
        },
        {
            HEADING: "BACKEND",
            SKILLS_LIST: [
                { NAME: "APEX", LEVEL: "95" },
                { NAME: "JAVA", LEVEL: "50" },
                
            ],
        },
        {
            HEADING: "DATABASE",
            SKILLS_LIST: [
                { NAME: "SOQL", LEVEL: "90" },
                { NAME: "SOSL", LEVEL: "50" },
               
            ],
        }
    ],
    OTHERS_SKILLS:{
        HEADING: 'TOOLS',
        SKILLS_LIST: [
            "Git",
            "Bitbucket",
            "SourceTree",
            "VSCODE",
            "VSTS",
            "ANT",
            "COPADO",
            "Google Api",
            "Confluence",
            "POSTMAN"
        ]
    }
}

export const INTERESTS_DATA = {
    HEADING : "INTERESTS",
    LIST : ["Reading","Food","Sports"]

}