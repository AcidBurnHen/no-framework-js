# Modern Web Dev With No Framework

This is an example project of building a web application by re-creating the modern practices/approaches found in popular frontend frameworks with just Javascript. 

The goal of this project will be to share the things I have learned along the way. While trying to minimilaze the abstraction and complexities used for re-creating the features. My goal is to avoid any sort of build process or compilation step required to run this, and to focus on achivieng the most that can be with just native web technoligies of HTML, CSS and Javascript.

## NOTES: 
As this project expands I will try to expand the explanation and documentation behind everything. I will also document critical changes, design decisions, and why I have taken them. 

As I am used to work with Components in frontend frameworks, I wanted something similar for this project as well, but introducing something like JSX here would break the foundational goals of this project. Therefore, I have decided to work with HTML Web Components as they give me that familiar feeling of modular component based approach, while staying true to using native parts of web technologies. (Even though Web Components are a newer technology). 

All the pages will be located in the /pages folder, and shall represent the main entry points for working on anything related to that page. 

All the components will be located in the /components folder. 

## 1. Client side routing
- The first step I took was to start working on a router with some example pages to get client side navigation working