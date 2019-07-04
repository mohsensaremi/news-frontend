import {compose} from 'recompose';
import MainLayout from './MainLayout';
import style from './style';

const MainLayoutPage = compose(
    style
)(MainLayout);

MainLayoutPage.getInitialProps = async () => {

    return {
        relayVariables: {},
    };
};

export default MainLayoutPage;
