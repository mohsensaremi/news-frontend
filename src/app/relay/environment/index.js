import initEnvironment from '../ssr/createRelayEnvironment';

export function getClientEnvironment(){
    return initEnvironment();
}
