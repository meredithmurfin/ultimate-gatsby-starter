module.exports = {
    types: [
        {
            value: 'chore',
            name: 'chore:      โ๏ธ Build process or supporting tool changes',
        },
        {
            value: 'ci',
            name: 'ci:         ๐ CI-related changes',
        },
        {
            value: 'docs',
            name: 'docs:       ๐ Documentation updates',
        },
        {
            value: 'feat',
            name: 'feat:       โญ Adds functionality',
        },
        {
            value: 'fix',
            name: 'fix:        ๐ Fixes a bug',
        },
        {
            value: 'perf',
            name: 'perf:       โก๏ธ Changes that improve performance',
        },
        {
            value: 'refactor',
            name: 'refactor:   โป๏ธ Neither fixes a bug nor adds functionality',
        },
        {
            value: 'release',
            name: 'release:    ๐ Releases a new version',
        },
        {
            value: 'setup',
            name: 'setup:      ๐ Initial setup',
        },
        {
            value: 'style',
            name: 'style:      ๐จ Adds or updates styles',
        },
        {
            value: 'test',
            name: 'test:       ๐งช Adds or updates tests',
        },
        {
            value: 'ux',
            name: 'ux:         ๐ธ Changes that improve user experience',
        },
    ],
    scopes: [
        {
            value: 'wip',
            name: 'wip:    ๐ง WIP',
        },
        {
            value: 'review',
            name: 'review: ๐ฏ Code review changes',
        },
    ],
    allowTicketNumber: false,
    scopeOverrides: {
        chore: [
            {
                value: 'add-dep',
                name: 'add-dep:    โ Adds dependencies',
            },
            {
                value: 'analytics',
                name: 'analytics:  ๐ Adds or updates analytics',
            },
            {
                value: 'config',
                name: 'config:     ๐ ๏ธ Adds or updates configuration files',
            },
            {
                value: 'downgrade',
                name: 'downgrade:  โฌ๏ธ Downgrades dependencies',
            },
            {
                value: 'errors',
                name: 'errors:     ๐ฅ Changes that improve error handling',
            },
            {
                value: 'ignore',
                name: 'ignore:     ๐ Adds or updates .*ignore files',
            },
            {
                value: 'merge',
                name: 'merge:      ๐ Merge branches',
            },
            {
                value: 'pin-dep',
                name: 'pin-dep:    ๐ Pins dependencies to specific versions',
            },
            {
                value: 'rem-dep',
                name: 'rem-dep:    โ Removes dependencies',
            },
            {
                value: 'scripts',
                name: 'scripts:    ๐ Adds or updates development scripts',
            },
            {
                value: 'security',
                name: 'security:   ๐ Security-related changes',
            },
            {
                value: 'upgrade',
                name: 'upgrade:    โฌ๏ธ Upgrades dependencies',
            },
        ],
        docs: [
            {
                value: 'config',
                name: 'config: ๐ ๏ธ Adds or updates configuration documentation',
            },
            {
                value: 'logs',
                name: 'logs:   ๐ Adds or updates logs',
            },
            {
                value: 'meta',
                name: 'meta:   ๐ Adds or updates metadata',
            },
        ],
        fix: [
            {
                value: 'downgrade',
                name: 'downgrade:  โฌ๏ธ Downgrades dependencies',
            },
            {
                value: 'merge',
                name: 'merge:      ๐ Merge branches',
            },
            {
                value: 'quick',
                name: 'quick:      ๐ Temporarily resolves a critical bug',
            },
            {
                value: 'revert',
                name: 'revert:     ๐ฆ Rolls back to a previous version',
            },
            {
                value: 'style',
                name: 'style:      ๐จ Fixes styles',
            },
            {
                value: 'test',
                name: 'test:       โ๏ธ Fixes tests',
            },
            {
                value: 'typo',
                name: 'typo:       โ๏ธ Fixes typos',
            },
            {
                value: 'upgrade',
                name: 'upgrade:    โฌ๏ธ Upgrades dependencies',
            },
            {
                value: 'warn',
                name: 'warn:       ๐จ Fixes compiler and/or ๐ linter warnings',
            },
        ],
        refactor: [
            {
                value: 'abstract',
                name:
                    'abstract:   ใฐ๏ธ Changes that simplify code through abstraction',
            },
            {
                value: 'move',
                name: 'move:       ๐ Moves files',
            },
            {
                value: 'prune',
                name: 'prune:      ๐ฅ Removes code and/or files',
            },
            {
                value: 'read',
                name: 'read:       ๐ก Changes that improve code readability',
            },
            {
                value: 'rename',
                name: 'rename:     ๐ท๏ธ Renames files',
            },
            {
                value: 'reuse',
                name:
                    'reuse:      โฐ Changes that implement or improve code reuse',
            },
        ],
        setup: [
            {
                value: 'config',
                name: 'config: ๐ ๏ธ Adds or updates configuration files',
            },
            {
                value: 'docs',
                name: 'docs:   ๐ Documentation updates',
            },
            {
                value: 'init',
                name: 'init:   ๐ Initial commit',
            },
            {
                value: 'move',
                name: 'move:   ๐ Moves files',
            },
            {
                value: 'prune',
                name: 'prune:  ๐ฅ Removes code and/or files',
            },
            {
                value: 'rename',
                name: 'rename: ๐ท๏ธ Renames files',
            },
        ],
        test: [
            {
                value: 'e2e',
                name: 'e2e:    ๐ข Adds or updates end-to-end tests',
            },
            {
                value: 'perf',
                name: 'perf:   โก๏ธ Adds or updates performance tests',
            },
            {
                value: 'unit',
                name: 'unit:   ๐ฆ Adds or updates unit tests',
            },
        ],
        ux: [
            {
                value: 'access',
                name: 'access:     โฟ๏ธ Changes that improve user accessibility',
            },
            {
                value: 'alt-text',
                name: 'alt-text:   ๐ฌ Adds or updates alternative text',
            },
            {
                value: 'android',
                name: 'android:    ๐ค Android-specific changes',
            },
            {
                value: 'animation',
                name:
                    'animation:  โจ Adds or updates animations and transitions',
            },
            {
                value: 'ios',
                name: 'ios:        ๐ฑ iOS-specific changes',
            },
            {
                value: 'linux',
                name: 'linux:      ๐ง Linux-specific changes',
            },
            {
                value: 'osx',
                name: 'osx:        ๐ OSX-specific changes',
            },
            {
                value: 'responsive',
                name:
                    'responsive: ๐ฒ Changes that affect overall responsive design',
            },
            {
                value: 'style',
                name: 'style:      ๐จ Adds or updates styles',
            },
            {
                value: 'ui',
                name: 'ui:         ๐ฅ๏ธ General UI-related changes',
            },
            {
                value: 'windows',
                name: 'windows:    ๐ Windows-specific changes',
            },
        ],
    },
    messages: {
        type: "Select the type of change that you're committing:",
        scope: 'Select the scope of this change (optional):',
        customScope: 'Denote the scope of this change:',
        subject: 'Write a short description describing this change:\n',
        confirmCommit:
            'Are you sure you want to proceed with the commit above?',
    },
    allowCustomScopes: true,
    skipQuestions: ['body', 'breaking', 'footer'],
    subjectLimit: 100,
};
