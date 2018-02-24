import rewireMobX from 'react-app-rewire-mobx';

module.exports = function override(config, env) {
    config = rewireMobX(config,env);
    return config;
}
