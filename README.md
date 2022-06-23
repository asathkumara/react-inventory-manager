
<table >
    <tr>
        <th>Roles</th>
        <th>Deliverables</th>
        <th>Project Specifications</th>
    </tr>
    <tr>
        <td style="">
            <p >I assumed the following roles when designing this app:</p>
            <ul>
                <li>Full-Stack Developer</li>
                <li>User Experience (UX) Designer</li>
                <li>User Interface (UI) Designer</li>
                <li>Interaction (IxD) Designer</li>
            </ul>
        </td>
        <td style="">
           <p>Full-Stack Development: Web application built using Node.js and JavaScript framework React.js and Redux for state management</p>
            <p>Interaction Design: High-fidelity prototypes for key tasks on desktop and mobile.</p>
            <p>UX/UI Design:</p>
            <ul>
                <li>Competitive Analysis</li>
                <li>UI Kit</li>
                <li>High-fidelity mockups and prototypes</li>
                <li>Sitemap (Information Architecture Diagram)</li>
                <li>User Personas</li>
            </ul>
        </td>
        <td style="">
           <p>Duration: 4 weeks</p>
           <p>Tools</p>
           <ul>
                <li>Figma</li>
                <li>Photoshop</li>
                <li>Octopus</li>
            </ul>
        </td>
    </tr>    
</table>

> Version 1 of the prototype is available at https://react-inventory-manager.vercel.app. The new version detailed in the prototypes is still undergoing development.

## Table of Contents

1. [Overview](#overview)
2. [Research](#research)</br>
 -- [Findings](#findings)
3. [Design](#design)</br>
 -- [Personas](#personas)</br>
 -- [Sitemap](#site-map)</br>
 -- [UI Kit](#ui-kit)</br>
 -- [Prototypes](#prototypes)</br>
4. [License](#license)


## Overview

A crucial aspect of any business is inventory management. It determines your warehousing costs and impacts your ability to fulfill orders accurately and on time. Good inventory management is no simple task -- especially if you're doing it by hand. It takes time and a mistake could be costly. 

The same can be said about our inventory at home -- or more specially, our kitchen. While the stakes are lower, good inventory management could save you money and a grocery run.

<table>
    <tr>
        <th>Problems</th>
        <th>Proposed Solutions</th>
    </tr>
    <tr>
        <td> 
            <ul>
                <li>Many users don't keep inventory of their kitchen</li>
                <li>Many users often rely on paper checklists and spreadsheets</li>
            </ul>
        </td>
        <td> 
            <ul>
                <li>Allow users to group items into zones and sub-zones</li>
                <li>Remind users when to restock on items below a minimum restock level or an expiry date</li>
                <li>Allow users to generate and share shopping lists</li>
                <li>Design for ease of use, addressing users with limited technological experience</li>
            </ul>
        </td>
    </tr>
</table>

## Research

I started my research with **competitive analysis** in order to understand the inventory management solutions available in the market. Wanting to identify functional and usability gaps, I also looked at **user reviews** for the popular solutions. Given the lack of surveys on the topic, if time permitted I would have liked to conduct a survey on how users manage their kitchen inventory.

### Findings

1. Popular consumer inventory management software are not specialized for a specific kind of inventory (such as kitchen inventory) and focus on general inventory management
2. Popular restaurant inventory management software that are compatible with accounting and POS systems are specialized and are costly
3. Many users wanted a more intuitive interface and found existing interfaces difficult to understand and navigate. Often resulting in an uninstall of the app.


## Design

I felt it was important to empathize with and represent as many people as possible through two **user personas**. These personas were based on the research above and its findings. They were to serve as reference points for future design decisions.

For both "Michael" and "Joyce":

<a id="personas" href="https://www.figma.com/file/fUM6IYbMcWhQezzN3FArjx/Kitchen-Inventory-Manager-(V2)---User-Personas?node-id=2%3A43" target="_blank" title="Ctrl click to open in new window. Markdown doesn't support this yet.">> Open Figma User Personas</a>
</br>

![Michael Fabela](https://user-images.githubusercontent.com/28933557/175376129-8b6c2068-d984-410b-89d2-114efb15c2f1.png)
![Joyce Silver](https://user-images.githubusercontent.com/28933557/175376149-db981286-31a0-4ccc-97e0-5838e217e765.png)

A lot of ease of use issues on popular inventory management software stems from a poor information heirarchy. This **sitemap** for the react inventory manager aims to resolve some of these issues:

<a id="site-map" href="https://octopus.do/30z9qts8na4" target="_blank" title="Ctrl click to open in new window. Markdown doesn't support this yet.">> Open Octopus Sitemap</a>
</br>

![image](https://user-images.githubusercontent.com/28933557/175379559-306fa1e7-8634-4b33-8e00-37818f37486e.png)

In addition to a clear hierarchy, having a clear visual design is also important. Details such as primary / accent color palettes and button states were important to clearly define. I developed this **UI Kit** to clarify some of these visual details for my app:

<a id="ui-kit" href="https://www.figma.com/file/Pc9lnF6f6pc6PfwVWqgMNw/Kitchen-Inventory-Manager-(V2)---UI-Kit?node-id=0%3A1" target="_blank" title="Ctrl click to open in new window. Markdown doesn't support this yet.">> Open Figma UI Kit</a>

**High fidelity prototypes** allowed me to test the key tasks and components of the app on desktop and mobile.

<a id="prototypes" href="https://www.figma.com/proto/4iR8pDpqTBfH8vnpKcBA6h/Kitchen-Inventory-Manager---Prototype-V2?node-id=11%3A125&scaling=scale-down&page-id=0%3A1&starting-point-node-id=11%3A125" target="_blank" title="Ctrl click to open in new window. Markdown doesn't support this yet.">> Open Figma desktop high-fidelity prototype</a>

<a href="https://www.figma.com/proto/4iR8pDpqTBfH8vnpKcBA6h/Kitchen-Inventory-Manager---Prototype-V2?node-id=50%3A849&scaling=scale-down&page-id=50%3A722&starting-point-node-id=50%3A849" target="_blank" title="Ctrl click to open in new window. Markdown doesn't support this yet.">> Open Figma mobile high-fidelity prototype</a>

## License

This project is licensed under [MIT](https://github.com/asathkumara/react-inventory-manager/blob/master/LICENSE). Feel free to re-use any libraries or code for **non-commercial use** but do your due diligence with attributing credit.
