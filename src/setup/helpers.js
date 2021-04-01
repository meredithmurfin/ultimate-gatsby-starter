/* eslint-disable */
import figlet from 'figlet';
import inquirer from 'inquirer';
import chalk from 'chalk';
import shelljs from 'shelljs';

const colors = {
    figletTitle: '#ff0087',
    sectionTitle: '#af87ff',
    subtitle: '#ff87af',
};

export function logFigletTitle(text) {
    console.log(
        chalk.hex(colors.figletTitle)(
            figlet.textSync(text, {
                font: 'big',
                horizontalLayout: 'default',
                verticalLayout: 'default',
            })
        )
    );
}

export function logFigletSubtitle(text) {
    console.log(chalk.hex(colors.subtitle)(text));
}

export function logSectionTitle(text) {
    console.log(chalk.hex(colors.sectionTitle).bold(text));
}

export function logSectionSubtitle(text) {
    console.log(text);
}

export function requestUserInput(questions) {
    inquirer
        .prompt(questions)
        .then((answers) => {
            answers.name;
            answers.description;
            return answers;
        })
        .catch((error) => {
            console.log(error);
        });
}