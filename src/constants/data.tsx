

export type FooterLinks = {
  title: string;
  path: string;
};

export const about: FooterLinks[] = [
  {
    title: 'Our company',
    path: '#',
  },
  {
    title: 'Careers',
    path: '#',
  },

  {
    title: 'Wealthsimple Foundation',
    path: '#',
  },

  {
    title: 'Giveback program',
    path: '#',
  },
];
export const legal: FooterLinks[] = [
  {
    title: 'Accessibility',
    path: '#',
  },
  {
    title: 'Privacy policy',
    path: '#'
  },
  {
    title: 'Terms of use',
    path: '#'
  },
];
export const accounts: FooterLinks[] = [
  {
    title: 'RRSP',
    path: '#',
  },
  {
    title: 'TFSA',
    path: '#',
  },
  {
    title: 'FHSA',
    path: '#',
  },
  {
    title: 'Non-registered account',
    path: '#',
  },
  {
    title: 'Spousal RRSP',
    path: '#',
  },
  {
    title: 'RESP',
    path: '#',
  },
  {
    title: 'Corporate',
    path: '#',
  },
  {
    title: 'LIRA',
    path: '#',
  },
  {
    title: 'All accounts',
    path: '#',
  },

];

export const products: FooterLinks[] = [
  {
    title: 'Managed investing',
    path: '#',
  },
  {
    title: 'Self-directed investing',
    path: '#',
  },
  {
    title: 'Private credit',
    path: '#',
  },
  {
    title: 'Private equity',
    path: '#',
  },
  {
    title: 'Cash',
    path: '#',
  },
  {
    title: 'Crypto',
    path: '#',
  },
  {
    title: 'Tax',
    path: '#',
  },
  {
    title: 'Wealthsimple Work',
    path: '#',
  },
];


export const footerGroupLinks = {
  about,
  legal,
  accounts,
  products,
}
export const faqData = [
  {
    title: `What is Wealthsimple's investment strategy?`,
    content: [
      `Wealthsimple builds portfolios of assets that are broadly diversified across markets, are expected to perform well over the long-term, keep fees low, and don't try to time the market. For the vast majority of people, we believe this is the best way to invest in public stock and bond markets. It is really hard to outperform the market, and the data shows that very few active managers do it consistently, especially once you factor in their fees. And, even if some managers do consistently outperform the market, it's really hard to predict in advance which ones will.`,
      `The most important determinant of wealth for investors is their savings rate and their ability to stick with an investment strategy. That’s why we provide a technology experience that is designed to help you invest long-term, advisors who are here to answer questions and help you stick to your plan, and a variety of portfolio themes that align with your values and goals.`,
    ],
  },
  {
    title: 'What kind of returns should I expect?',
    content: [
      `
Our strong belief is that financial assets are an excellent bet to outperform cash, and that returns will roughly correlate with the riskiness of the portfolio overall. Over long time horizons, a good rule of thumb is that our riskiest portfolios earn about 4–5% returns over the rate of inflation and that less risky portfolios will earn slightly less. A wide range of outcomes are possible in any year, but you should be confident that, in the long run, continually saving and investing in low-cost diversified portfolios is a good way to build wealth. When you create an account and are matched with a portfolio, you’ll be able to view your personal projection based on the level of risk in your portfolio and your deposits. You can find out more about our expected range of returns here.`,
    ],
  },
  {
    title: 'How do I know which portfolio is right for me?',
    content: [
      `
Ultimately, the best portfolio for you is one you can stick to, and keep investing in through market ups and downs. That’s what makes investors successful in the long term. To match you with the right portfolio, we will ask you a few questions, like what you’re saving for, when you’re going to need the money, and how comfortable with portfolio fluctuations you are. Your portfolio will be personalized to your situation, but in general the longer you have to invest, the more risk you can take in your portfolio as you will have plenty of time to make up for any short-term losses.`,
    ],
  },

  {
    title: 'Does Wealthsimple charge me a fee for taking money out of my account?',
    content: [
      `
No. We don't charge anything for withdrawals, transferring out, or leaving your account open with a zero balance.`,
    ],
  },

  {
    title: 'How do I request a transfer fee reimbursement?',
    content: [
      `Institutions typically charge a $50–$150 administrative fee to transfer your account. We will reimburse this fee when you transfer your account to Wealthsimple if your transfer is greater than $5,000 in value. You can find more details and submit a fee reimbursement request here.`,
    ],
  },
  {
    title: 'How can I access the 0.2% management fee?',
    content: [
      `
      Our management fees for Generation clients range from 0.4% for clients who have $500,000 with us, to 0.2% for clients who have $10,000,000 with us. To learn which rate you qualify for, reach out to our team of advisors.`,
    ],
  },
];

export const managedPortfolios: { title: string; text: string }[] = [
  {
    title: 'Reliable and diversified',
    text: `Your money is invested in a wide range of asset classes across the market. It's a time-tested way to help maximize returns while minimizing risk.`,
  },
  {
    title: 'Made for modern investors',
    text: `Get access to rare, innovative investing opportunities without high fees. Enjoy intuitive tech and get human help along the way.`,
  },
  {
    title: 'Supported by experts',
    text: `Our in-house investment team will customize a portfolio to suit your risk tolerance and goals. They keep a close eye on market trends and opportunities, so you don’t have to.`,
  },
];

type SavingsTypeProps = {
  title: string;
  text: string;
  list: string[];
  category: 'retirement' | 'education' | 'home' | 'all';
};

export const savingsTypesData: SavingsTypeProps[] = [
  {
    title: 'RRSP',
    text: 'A tax-advantaged retirement account for individuals or couples.',
    list: [
      'Withdraw your money in retirement at a lower tax rate',
      'Funds can be withdrawn early to buy a house or pay for education',
    ],
    category: 'retirement',
  },
  {
    title: 'TFSA',
    text: 'A flexible account that lets you invest and save tax-free.',
    list: ["You don't pay taxes on any investment gains", 'Withdraw funds any time without penalty'],
    category: 'retirement',
  },
  {
    title: 'LIRA',
    text: 'Leave a job? You’ll want to take your pension with you.',
    list: [
      'Move your old employer’s pension into a smarter account',
      'Rolling over to a Wealthsimple LIRA won’t cost you a penny',
    ],
    category: 'retirement',
  },

  //   education
  {
    title: 'TFSA',
    text: 'A flexible account that lets you invest and save tax-free.',
    list: ["You don't pay taxes on any investment gains", 'Withdraw funds any time without penalty'],
    category: 'education',
  },
  {
    title: 'RESP',
    text: "Save and access government benefits for your child's education.",
    list: [
      'The government will match 20% of your annual contribution, up to a lifetime maximum of $7,200 per child',
      'No minimums - start today with as little as $1',
    ],
    category: 'education',
  },
  {
    title: 'Non-registered account',
    text: 'Invest with maximum flexibility.',
    list: ['No contribution limits or rules to remember', 'Keep as much or as little in the account as you like'],
    category: 'education',
  },

  // home

  {
    title: 'RRSP',
    text: 'A tax-advantaged retirement account for individuals or couples.',
    list: [
      'Withdraw your money in retirement at a lower tax rate',
      'Funds can be withdrawn early to buy a house or pay for education',
    ],
    category: 'home',
  },
  {
    title: 'TFSA',
    text: 'A flexible account that lets you invest and save tax-free.',
    list: ["You don't pay taxes on any investment gains", 'Withdraw funds any time without penalty'],
    category: 'home',
  },
  {
    title: 'FHSA',
    text: 'Save up to $40,000 toward a down payment, tax-free.',
    list: ['Contribute up to $8,000 per year', 'Reduces your yearly tax bill'],
    category: 'home',
  },
];

export type WealthGrowthType = {
  asset: string;
  title: string;
  text: string;
  list: string[];
  fee: string;
  bg: string;
};

export const wealthGrowthData: WealthGrowthType[] = [
  {
    asset: '1',
    title: 'core',
    text: 'Get started with simple, low-fee financial tools.',
    list: ['Automatic portfolio rebalancing', 'Help from a real, friendly, human'],
    fee: '0.5%',
    bg: '#f8f0e5',
  },
  {
    asset: '100,000',
    title: 'premium',
    text: 'Make the most of your investments with lower fees and tailored advice.',
    list: ['20% lower management fee on your managed investments', 'Financial goal setting with an advisor'],
    fee: '0.4%',
    bg: '#eeece7',
  },
  {
    asset: '500,000',
    title: 'generation',
    text: 'Build your legacy with expert guidance from your dedicated team of advisors.',
    list: ['All Core and Premium features', 'dedicated team of advisors'],
    fee: '0.2% - 0.4%',
    bg: '#2a2c32',
  },
];



export const bgColors = [
  '#0080ff',
  '#3b5998',
  '#007777',
  '#8b9dc3',
  '#6e7f80',
  '#03396c',
  '#2e4045',
  '#83adb5',
  '#5e3c58',
  '#004444',
];