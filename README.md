# 🧰 Algo - Cheat Sheet

## Motivation

While I studied at university I realized, that In theory there is no difference between theory and practice, but in
practice there is.

> ### Theory and practice:
>
> - Theory: everything is clear, but nothing works
> - Practice: everything works, but nothing is clear
> - Sometimes theory meets practice: nothing works and nothing is clear

The purpose of this project is mainly to keep my analytics skills up to date and
enhance them as well. Of course, the data structures and algorithms are always
fun, but sometimes they can be very difficult in other words this repo can be
something like a "fast" lookup for interview preparation.

Currently, I plan to add content that touches [data structures](https://en.wikipedia.org/wiki/List_of_data_structures)
and a lot of algorithms gathered from platforms
like [LeetCode](https://leetcode.com/), [Codility](https://www.codility.com/) end etc.

## Requirements

- [Node](https://nodejs.org/en/) `^18.14.2`
- [NPM](https://www.npmjs.com/) `^9.5.0`

## Installation

After confirming that your environment meets the
above [requirements](#requirements), it is time to clone the project
locally by doing the following:

```bash
$ git clone git@github.com:DeanHristov/algo-cheat-sheet.git <project-name>
$ cd <project-name>
```

When you're done with the steps above, you need to install the project
dependencies.

```bash
$ npm install
```

## Running the Project

In order to run the code in **dev** mode. Go to in your project (root) directory
and follow the command below.

```bash
$ npm run dev
```

## Testing

Currently, the project is supporting **unit testing**
with [JEST](https://jestjs.io/). In order to run them you have to perform:

```bash
$ npm test
```

## Main tasks

All tasks automation are based
on [NPM scripts](https://docs.npmjs.com/misc/scripts).

| Tasks                     | Description                                 |
| ------------------------- | ------------------------------------------- |
| `npm run start`           | Running the code in **dev** mode            |
| `npm run lint`            | Analyzing the code for problems with eslint |
| `npm run prettier-format` | Code formatting                             |
| `npm run test`            | Running the unit tests ( using jest)        |
| `npm run test:watch`      | Running the unit tests in "watch" mode      |
| `npm run test:coverage`   | Running the coverage of the unit tests      |

## Resources

- [TypeScript](https://www.typescriptlang.org/)
- [Computer Memory](https://statmath.wu.ac.at/courses/data-analysis/itdtHTML/node55.html)
- [Big O notation](https://en.wikipedia.org/wiki/Big_O_notation)
- [BIG-O Cheat sheet](https://www.bigocheatsheet.com/)
- [WIKI - List of data structures](https://en.wikipedia.org/wiki/List_of_data_structures)
- [Hash table](https://en.wikipedia.org/wiki/Hash_table#:~:text=A%20hash%20table%20uses%20a,the%20corresponding%20value%20is%20stored)
- [Programiz - DSA](https://www.programiz.com/dsa)
- [Master theorem (analysis of algorithms)](<https://en.wikipedia.org/wiki/Master_theorem_(analysis_of_algorithms)>)
- [Divide-and-conquer algorithm](https://en.wikipedia.org/wiki/Divide-and-conquer_algorithm#:~:text=A%20divide%2Dand%2Dconquer%20algorithm,solution%20to%20the%20original%20problem)
- [Memoization](https://en.wikipedia.org/wiki/Memoization)
- [Sorting algorithms - Intro](https://en.wikipedia.org/wiki/Sorting_algorithm)
- [Sorting algorithms - Categories](https://en.wikipedia.org/wiki/Category:Sorting_algorithms)
- [In-place algorithm](https://en.wikipedia.org/wiki/In-place_algorithm)
- [LeetCode Patterns](https://seanprashad.com/leetcode-patterns/)
- [LeetCode - Blind 75 Questions](https://leetcode.com/discuss/general-discussion/460599/blind-75-leetcode-questions)
- [LeetCode - Top Interview 150](https://leetcode.com/studyplan/top-interview-150/)

## Made by

- Author: [D. Hristov](https://dhristov.eu/) | Version: [1.0.0]() |
  Documentation [here](https://docs.google.com/spreadsheets/d/1fnI_9os-U5Mho8MgrOHael6KYRvm0JCPi9rm1l0G_Pk/edit?usp=share_link) |
  License: If you like them - use them :)
