import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

import schemas from "./sanity/schemas";

const config = defineConfig({

    projectId : 'onczd6rt',
    dataset : 'production',
    title : 'Admin',
    apiVersion : '2023-06-16',
    basePath : '/admin',
    plugins : [deskTool()],
    schema : {types: schemas}
})

export default config;