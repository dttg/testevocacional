Software Engineering - Career Test
====================

[this is a stack file, append here]

# 24 Jul 2018

- [x] Segment.io working;
- [x] Deploy to digitalocean.com;

# 17 Jul 2018

- Login page
  - [x] Change color of "Próximo" button and checkbox to #4555A5
  - [x] Remove chevrons from "Próximo" button
  - [x] Remove facebook login box
- Question page
  - [ ] It's hard to understand when you click on on the emoticon. An animation like fade-out/fade-in would be nice;
  - [ ] Translate text to portuguese
  - [ ] Put links to career at the end
- [ ] Translations by Gustavo
- [ ] Career links http://souvestibulando.com/carreiras.php

## career-app-blue palette
| # | original | Rx | Gx | Bx | Rd | Gd | Bd | diff | diff | diff | Rn | Gn | Bn | Rnx | Gnx | Bnx | new |
|----|--------|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|
| 50 | e3f2fd | e3 | f2 | fd | 227 | 242 | 253 | -40 | -20 | -2 | 227 | 177 | 175 | E3 | B1 | AF | E3B1AF|
| 100 | bbdefb | bb | de | fb | 187 | 222 | 251 | -43 | -20 | -2 | 187 | 157 | 173 | BB | 9D | AD | BB9DAD|
| 200 | 90caf9 | 90 | ca | f9 | 144 | 202 | 249 | -44 | -21 | -3 | 144 | 137 | 171 | 90 | 89 | AB | 9089AB|
| 300 | 64b5f6 | 64 | b5 | f6 | 100 | 181 | 246 | -34 | -16 | -1 | 100 | 116 | 168 | 64 | 74 | A8 | 6474A8|
| 400 | 42a5f5 | 42 | a5 | f5 | 66 | 165 | 245 | -33 | -15 | -2 | 66 | 100 | 167 | 42 | 64 | A7 | 4264A7|
| 500 | 2196f3 | 21 | 96 | f3 | 33 | 150 | 243 | -3 | -14 | -14 | 69 | 85 | 165 | 45 | 55 | A5 | 4555A5|
| 600 | 1e88e5 | 1e | 88 | e5 | 30 | 136 | 229 | -5 | -18 | -19 | 86 | 150 | 233 | 56 | 96 | E9 | 5696E9|
| 700 | 1976d2 | 19 | 76 | d2 | 25 | 118 | 210 | -4 | -17 | -18 | 81 | 132 | 214 | 51 | 84 | D6 | 5184D6|
| 800 | 1565c0 | 15 | 65 | c0 | 21 | 101 | 192 | -8 | -30 | -31 | 77 | 115 | 196 | 4D | 73 | C4 | 4D73C4|
| 900 | 0d47a1 | 0d | 47 | a1 | 13 | 71 | 161 |  |  |  | 69 | 85 | 165 | 45 | 55 | A5 | 4555A5|

# Video Call 05 Jul 2018

- Desing
- Segment.io integration
- Deploy - get in touch with client
- Facebook will need app?

# Sprint 3: Engineering Document and new user stories

- [ ] Fix animate question in and out;
- [x] Show career suggestions (suggestions engine);
- [ ] Protect routes with Auth and Questionary Guard;
- [x] App state being register in memory database;
- [x] App running without back-end;
- [ ] App running without back-end in provisioned server;
- [ ] Back-end database running;
- [ ] Back-end database integrated with front-end;
- [ ] App running with back-end in provisioned server;
- [x] Login;
- [ ] Login with facebook;
- [ ] ~~User profile and data screen~~<sup>[1](#mudacaFoco)</sup>;
- [ ] ~~Administration panel screen~~<sup>[1](#mudacaFoco)</sup>;

<a name="mudacaFoco">[1]: Scaffold has been made, but deleted as the focus sifted.</a>

# Sprint 2: Engineering Document and new user stories

Taking notes on discussions and building this Document.

## Roles

- **User:** Person who will give data to get career suggestions;
- **Manager:** Organization who will provide the App to the user and manage his data;
- **Client:** Organization who is contracting the developer and delivering the App to the Manager;
- **Developer:** Organization who is receiving instructions from the Client and building the App;

## Stories

- As a User, I want to see an question and give my answer so that I can get a career suggestion.
- As the Client, I want the App to be hosted on AWS as it is my preferred
deployment method and I have the tooling and knowledge to maintain it running
and deliver to the Manager.
- As the Client, I wish the technical tooling to be similar to what I have on
my other projects so I can reuse the developer's knowledge resource in those other
projects.

## Call Meeting 2018-04-24 20:00

Here we (client and developer) discussed the following points:
- [x] Server provision: will be done by the Manager (at wpengine.com), if he fails we should use AWS;
- [x] Database choice: MongoDB;
- [x] The career choice's business logic will follow the hawaiipublicschools model;
- [x] Should the app Stream answers? No, it will add too much complexity, time is short;
- [x] Should PWA tech be used? No, it will add too much risk, time is short;
- [ ] Git hosting provisioning: No answer yet;
- [ ] Roadmap: Deliverables enumeration and dates: To be defined by the developer until tomorrow;
- [x] Sprint size: 2 days, meeting at 20:00 every sprint end/start;
- [x] Manager is stoodi.com.br;
- [x] The color scheme should be red and blue;

## Roadmap: Deliverables and Dates

In order to provide this Roadmap to the Client, we use the following assumptions:
- Angular, Angular Material Components and Material Design Guidance for front-end;
- Docker is to be used on development, maybe useful to deployment also;
- MongoDB as Database, the developer is not an expert but can do it;
- Desing and App Integration with https://www.stoodi.com.br/embaixadores-do-stoodi/;
- API Integration with https://segment.com;
- The App's purpose is to acquire users (emails) and evolving them to new stoodi subscribers;

As requested by the Client, here follows the roadmap:

<ol>
  <li> Scaffold base app; </li>
  <li> Main screen layout (question, header, suggestion); </li>
  <li> Apply color scheme; </li>
  <li> Questions showing from memory database; </li>
  <li> Storing answers to memory database; </li>
  <li> Animate question in and out; </li>
  <li> Show career suggestions (suggestions engine); </li>
  <li> App state being register in memory database; </li>
  <li> App running without back-end in provisioned server; </li>
  <li> Back-end database running; </li>
  <li> Back-end database integrated with front-end; </li>
  <li> App running with back-end in provisioned server; </li>
  <li> Login; </li>
  <li> User profile and data screen; </li>
  <li> Administration panel screen; </li>
</ol>


## Sprint's Coding Tasks and Goals

- [x] Add a material card as the question container;
- [x] Add a material radio button instead of the native select;
- [x] Add a material toolbar with the App's name, logo, User profile link;
- [x] Apply color scheme;
- [x] Store a question's answer in a angular service;
- [x] Display multiple questions;
- [ ] Animate the in (question presentation) and out (answer recorded);

## Git:
- ec31184 Movendo projeto angular para diretório próprio

# Sprint 1: First Prototype

General angular scaffolding, choosing technical components.

![First Prototype look](engineering/screenshot-localhost-4200-2018.04.23-11-42-41.png)

## Git:
- 46b16e4 removendo link para css de fontes do google
- b41a2e5 Adicioanando novas fontes e comoponentes de angular material
- 49daaaf Adicioando estilos e cores
- 3ec3318 Componente de questão basico, falta estilizar
- b758420 chore: initial commit from @angular/cli

# Sprint 0: Talk and planning

Using the software and process references, discuss and take note on the general
look and feel of the intended product.

## Software References
- https://www.whatcareerisrightforme.com/career-aptitude-test.php
- https://www.princetonreview.com/quiz/career-quiz
- https://www.sokanu.com/career-test/
- https://app.pathsource.com/

## Process References
- https://www.hawaiipublicschools.org/DOE%20Forms/CTE/RIASEC.pdf

## Discussion Notes

We acknowledge that the Sokanu's App is good and near what we want but there is
no need of a complex back-end (too many career choices and too many, almost
equal, questions) and the live update of the results is good to have, but not
necessary. Also the UI elements are really focused and easy to understand.

All of the references use a question set with a affinity answer with 5 options.

As far as the user experience flow is concerned, it should be as follows:
1. Sing-up with Facebook (like in other company's projects) or with email;
2. Questions show up and the App stores the answers;
3. At the end of the test (with all questions answered) the App shows a report
and career suggestions. Those suggestions should be based on a answers table.

Optional features would be:
- A better design (author's note: that is hard to understand and grasp, very
subjective to me as a programmer);
- Store the answers in a database;
- Automatically export each (user's) email through an API to an external
marketing email software.
