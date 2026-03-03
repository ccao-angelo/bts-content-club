# Web Development Project 1 - BTS Content Club - Community Watchboard 💜

Submitted by: Chau Cao

## Project Overview
BTS Content Club is a focused community board that connects fans through shared viewing experiences and curated video resources. The site displays various BTS gameshows, legendary performances, and documentaries so users can discover and watch as they like.

Time spent: **7** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The app has a cohesive, unique theme for events or resources relevant to a specific community**
  - [x] Header/title describing the theme is displayed
- [x] **At least 10 unique events or resources are displayed in a responsive card format**
  - [x] There are at least 10 cards displayed 
  - [x] The cards should be displayed in an organized format (ex. a grid, or in one line)
  - [x] Each card should include some information about the event or resource


The following **optional** features are implemented:

- [x] Buttons or links to a related resources are on each card component
  - [x] All cards have buttons or links in addition to text
- [x] The site is responsive for both desktop and mobile formats
  - [x] Web app is shown in a mobile format
  - [ ] **Video Walkthrough Special Instructions**: To ease the grading process, please use Chrome Developer Tools' "Toggle Device" button to demonstrate that your web application's responsiveness in both a desktop *and* a mobile format. Detailed instructions can be found below this stretch feature on the project page. 

The following **additional** features are implemented:

- [x] The site is styled specifically for BTS ARMYs, complete with custom Borahae (purple heart) cursors and hover glows.
- [x] The site implemented a functional React `useState` filter system to sort content by category (All, Variety Show, Performance, Documentary).
- [x] The site added smooth CSS fade-in animations when the page loads or filters are clicked.

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src="https://i.imgur.com/o6VgBuS.gif" title='Video Walkthrough' width='600' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with [ScreenToGif](https://www.screentogif.com/) for Windows

## Notes

While building this app, I encountered and successfully resolved several foundational React and environment challenges:
* **Environment Setup:** When intially trying to run the `npm create vite` command, I faced a Windows PowerShell execution policy that blocked scripts from running. I resolved this by updating the `Set-ExecutionPolicy` to `RemoteSigned` for my user account.
* **File Paths:** When adding thumbnail images to my data array, I initially used local absolute file paths, which resulted in broken image icons. I learned that in React/Vite, local assets need to be correctly imported at the top of the file so the bundler can process them.
* **React State and Case Sensitivity:** While building the category filter buttons, my app suddenly rendered a completely blank page. By inspecting the browser console, I found an `Uncaught ReferenceError`. I learned how to read the stack trace, which pointed me to a simple case-sensitivity typo (`activefilter` instead of `activeFilter`) in my `useState` hook.
* **Understanding the Local Server:** I learned that closing the VS Code terminal shuts down the Vite local server, resulting in a "site can't be reached" error in the browser, and practiced restarting the environment using `npm run dev`.
## License

    Copyright [yyyy] [name of copyright owner]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.