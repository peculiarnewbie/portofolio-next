import { NOTION_API_KEY, PROJECTS_DATABASE } from "./config";

const { Client } = require('@notionhq/client');

const notion = new Client({ auth: NOTION_API_KEY});

async function projects() {
    let projects = await notion.databases.query({
        database_id: PROJECTS_DATABASE,
        sorts: [{
            property: 'Position',
            direction: 'ascending',
        },],
    });
    return projects.results;
}

export {
    projects,
}