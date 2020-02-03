![Header  - Github](https://user-images.githubusercontent.com/32436485/73615683-6bc65a00-460a-11ea-84ed-e6bbe63780b0.png)

<div align="center"><strong>Pokedex</strong></div> 
<div align="center">This project is a sample demostration of usage of front-end technologies that allow to browse and search using a predefined set of pokemons. With this project I'll show to you, how I solve this *exercise* from UI/UX design to final Deploy.</div>

<br/>

<div align="center">
  <!-- Dependency Status -->
  <a href="https://david-dm.org/dario-fiore/pokedex">
    <img src="https://david-dm.org/dario-fiore/pokedex.svg" alt="Dependency Status" />
  </a>
  <!-- devDependency Status -->
 <a href="https://david-dm.org/dario-fiore/pokedex" title="dependencies status"><img src="https://david-dm.org/dario-fiore/pokedex/status.svg"/></a>

<a href="http://ec2-3-8-3-91.eu-west-2.compute.amazonaws.com" title="dependencies status"><img src="https://img.shields.io/badge/live-preview-blue"/></a>

</div>

## ⚡️ Tech Stack

| Name                                                            | Description                                                                                         |
| --------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| [React](https://github.com/facebook/react)                      | A declarative, efficient, and flexible JavaScript library for building user interfaces              |
| [Typescript](https://github.com/microsoft/TypeScript)           | TypeScript is a superset of JavaScript that compiles to clean JavaScript output                     |
| [Apollo Server](https://github.com/apollographql/apollo-server) | GraphQL server for Express, Connect, Hapi, Koa and more                                             |
| [Apollo Client](https://github.com/apollographql/apollo-client) | A fully-featured, production ready caching GraphQL client for every UI framework and GraphQL server |
| [Ant Design](https://github.com/ant-design/ant-design)          | A UI Design Language and React UI library                                                           |
| [UmiJS](https://github.com/umijs/umi)                           | Pluggable enterprise-level react application framework                                              |
| [Lodash](https://github.com/lodash/lodash)                      | A modern JavaScript utility library delivering modularity, performance, & extras                    |

## 🎨 UI/UX

After defining my tech stack, I started with UI/UX. This activity took me **4 man/day**. I spent 1 m/d finding my use cases using sites like Dribble, Behance, etc. After that I spent the remaining days in order to prototype my final UX using Adobe XD. Prototype is available [here](https://xd.adobe.com/view/011c7848-569e-43a0-4075-d53bbf04deee-772d/?fullscreen).

_For this project I skip wireframing step due to limited time_.

## 🔨 Development

After prortype a stable version, I started developement phase. This phase took me **4 man/day** and I work on client and server both.

**Server** implementation was already developed and I made small changes in order to support other filter criteria. Changes affects graphql schema and model implementation.

**Client** implementation was built from scratch. First of all I setted up project using UmiJS (create-umi-app). The result was a production-ready project that allow me to start (in 30 minutes) my development without worring about boring project configuration (webpack loaders, dev scripts, etc). When I develop I tried to follow TDD approch (although team was composed of 1 person (me ✌️), so I tried to write a test for each implementations.
_Due to limited time I skip some improvements / implementations (you can see these in improvements section)_

## 📦 Deploy

In order to view a live demo I made a deploy on a virtual machine powered by **AWS EC2** (Ubuntu). I had some paste experience, so, this task took me **0,5 man/day**.

## 📌 Improvements

- Boost project collaboration introducing CI/CD workflow
- Use cached data, configuring cache with ApolloClient
- Improve stability introducing an error boundary
- Make application layout responsive
- Improve application loading satate
- Generate project doc (usign typedoc)
