// Import the Head component from next/head
import Head from 'next/head';

// Define your font settings
const sora = {
  subsets: ['latin'],
  family: 'Sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
};

// Import your components
import TopLeftImg from '../components/TopLeftImg';
import Nav from '../components/Nav';
import Header from '../components/Header';

// Your Layout component
const Layout = ({ children }) => {
  // Log the children to the console to inspect its content
  //onsole.log('Children:', children);

  return (
    <div
      className={'page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative'}
    >
      {/* Use the Head component to include the Google Fonts link */}
      <Head>
        <link
          rel="stylesheet"
          href={`https://fonts.googleapis.com/css2?family=${sora.family}:wght@${sora.weight.join(';')}&display=swap`}
        />
      </Head>

      {/* Include your components in the desired order */}
      <TopLeftImg />
      <Nav />
      <Header />
      {children}
    </div>
  );
};

export default Layout;


