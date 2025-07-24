import adapter from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
const config = { 
    kit: { 
        adapter: adapter(),
        alias: {
            '$widgets/*': 'src/widgets/*'
        }
    } 
};

export default config;
